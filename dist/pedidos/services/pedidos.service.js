"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const pedidos_repository_1 = require("../repositories/pedidos.repository");
const detalle_pedido_repository_1 = require("../repositories/detalle-pedido.repository");
const status_enum_1 = require("../../common/enums/status.enum");
let PedidosService = class PedidosService {
    pedidosRepository;
    detallePedidoRepository;
    constructor(pedidosRepository, detallePedidoRepository) {
        this.pedidosRepository = pedidosRepository;
        this.detallePedidoRepository = detallePedidoRepository;
    }
    async findAll() {
        return await this.pedidosRepository.findAll();
    }
    async findById(id) {
        const pedido = await this.pedidosRepository.findById(id);
        if (!pedido) {
            throw new common_1.NotFoundException(`Pedido con id ${id} no encontrado`);
        }
        return pedido;
    }
    async findByStatus(status) {
        const statusValido = Object.values(status_enum_1.Status).includes(status);
        if (!statusValido) {
            throw new common_1.BadRequestException(`El status "${status}" no es válido`);
        }
        return await this.pedidosRepository.findByStatus(status);
    }
    async create(dto) {
        if (!dto.items || dto.items.length === 0) {
            throw new common_1.BadRequestException('El pedido debe contener al menos un item');
        }
        const nuevoPedido = await this.pedidosRepository.create({
            pedido_status: status_enum_1.Status.PENDIENTE_PAGO,
            pedido_total: 0
        });
        const detalles = dto.items.map((item) => ({
            pedido_id: nuevoPedido.id,
            producto_id: item.producto_id,
            cantidad: item.cantidad,
            descripcion: item.descripcion,
            precio: item.precio,
            subtotal: item.cantidad * item.precio
        }));
        await this.detallePedidoRepository.createMany(detalles);
        const totalReal = await this.detallePedidoRepository.sumSubtotalByPedidoId(nuevoPedido.id);
        await this.pedidosRepository.updateTotal(nuevoPedido.id, totalReal);
        return await this.findById(nuevoPedido.id);
    }
    async updateStatus(id, dto) {
        await this.findById(id);
        const statusValido = Object.values(status_enum_1.Status).includes(dto.pedido_status);
        if (!statusValido) {
            throw new common_1.BadRequestException(`El status "${dto.pedido_status}" no es válido`);
        }
        const pedidoActualizado = await this.pedidosRepository.updateStatus(id, dto.pedido_status);
        return pedidoActualizado;
    }
    async delete(id) {
        await this.findById(id);
        const eliminado = await this.pedidosRepository.delete(id);
        if (!eliminado) {
            throw new common_1.BadRequestException(`No se pudo eliminar el pedido con id ${id}`);
        }
        return { message: `Pedido ${id} eliminado correctamente` };
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [pedidos_repository_1.PedidosRepository,
        detalle_pedido_repository_1.DetallePedidoRepository])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map