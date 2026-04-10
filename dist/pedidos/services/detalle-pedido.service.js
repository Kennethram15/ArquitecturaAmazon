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
exports.DetallePedidoService = void 0;
const common_1 = require("@nestjs/common");
const detalle_pedido_repository_1 = require("../repositories/detalle-pedido.repository");
const pedidos_repository_1 = require("../repositories/pedidos.repository");
let DetallePedidoService = class DetallePedidoService {
    detallePedidoRepository;
    pedidosRepository;
    constructor(detallePedidoRepository, pedidosRepository) {
        this.detallePedidoRepository = detallePedidoRepository;
        this.pedidosRepository = pedidosRepository;
    }
    async findAll() {
        return await this.detallePedidoRepository.findAll();
    }
    async findById(id) {
        const detalle = await this.detallePedidoRepository.findById(id);
        if (!detalle) {
            throw new common_1.NotFoundException(`Detalle con id ${id} no encontrado`);
        }
        return detalle;
    }
    async findByPedidoId(pedido_id) {
        await this.validarPedidoExiste(pedido_id);
        return await this.detallePedidoRepository.findByPedidoId(pedido_id);
    }
    async findByProductoId(producto_id) {
        const detalles = await this.detallePedidoRepository.findByProductoId(producto_id);
        if (detalles.length === 0) {
            throw new common_1.NotFoundException(`No se encontraron detalles para el producto con id ${producto_id}`);
        }
        return detalles;
    }
    async addItemToPedido(pedido_id, dto) {
        await this.validarPedidoExiste(pedido_id);
        const itemExistente = await this.detallePedidoRepository.findByPedidoAndProducto(pedido_id, dto.producto_id);
        if (itemExistente) {
            throw new common_1.BadRequestException(`El producto ${dto.producto_id} ya existe en el pedido ${pedido_id}. Use el endpoint de actualización para modificar la cantidad`);
        }
        if (dto.cantidad <= 0) {
            throw new common_1.BadRequestException('La cantidad debe ser mayor a 0');
        }
        if (dto.precio <= 0) {
            throw new common_1.BadRequestException('El precio debe ser mayor a 0');
        }
        const nuevoDetalle = await this.detallePedidoRepository.create({
            pedido_id,
            producto_id: dto.producto_id,
            cantidad: dto.cantidad,
            description: dto.descripcion,
            precio: dto.precio,
            subtotal: dto.cantidad * dto.precio
        });
        await this.recalcularTotalPedido(pedido_id);
        return nuevoDetalle;
    }
    async update(id, dto) {
        const detalleActual = await this.findById(id);
        if (dto.cantidad !== undefined && dto.cantidad <= 0) {
            throw new common_1.BadRequestException('La cantidad debe ser mayor a 0');
        }
        if (dto.precio !== undefined && dto.precio <= 0) {
            throw new common_1.BadRequestException('El precio debe ser mayor a 0');
        }
        const nuevaCantidad = dto.cantidad ?? detalleActual.cantidad;
        const nuevoPrecio = dto.precio ?? detalleActual.precio;
        const nuevoSubtotal = nuevaCantidad * nuevoPrecio;
        const detalleActualizado = await this.detallePedidoRepository.update(id, {
            ...dto,
            subtotal: nuevoSubtotal
        });
        await this.recalcularTotalPedido(detalleActual.pedido_id);
        return detalleActualizado;
    }
    async delete(id) {
        const detalle = await this.findById(id);
        const pedido_id = detalle.pedido_id;
        const eliminado = await this.detallePedidoRepository.delete(id);
        if (!eliminado) {
            throw new common_1.BadRequestException(`No se pudo eliminar el detalle con id ${id}`);
        }
        await this.recalcularTotalPedido(pedido_id);
        return { message: `Detalle ${id} eliminado correctamente` };
    }
    async deleteByPedidoId(pedido_id) {
        await this.validarPedidoExiste(pedido_id);
        await this.detallePedidoRepository.deleteByPedidoId(pedido_id);
        await this.pedidosRepository.updateTotal(pedido_id, 0);
        return { message: `Todos los items del pedido ${pedido_id} fueron eliminados` };
    }
    async validarPedidoExiste(pedido_id) {
        const pedido = await this.pedidosRepository.findById(pedido_id);
        if (!pedido) {
            throw new common_1.NotFoundException(`Pedido con id ${pedido_id} no encontrado`);
        }
    }
    async recalcularTotalPedido(pedido_id) {
        const nuevoTotal = await this.detallePedidoRepository.sumSubtotalByPedidoId(pedido_id);
        await this.pedidosRepository.updateTotal(pedido_id, nuevoTotal);
    }
};
exports.DetallePedidoService = DetallePedidoService;
exports.DetallePedidoService = DetallePedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [detalle_pedido_repository_1.DetallePedidoRepository,
        pedidos_repository_1.PedidosRepository])
], DetallePedidoService);
//# sourceMappingURL=detalle-pedido.service.js.map