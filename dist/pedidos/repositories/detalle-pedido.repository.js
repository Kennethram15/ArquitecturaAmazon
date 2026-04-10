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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallePedidoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const detalle_pedido_model_1 = require("../models/detalle-pedido.model");
let DetallePedidoRepository = class DetallePedidoRepository {
    detalleRepo;
    constructor(detalleRepo) {
        this.detalleRepo = detalleRepo;
    }
    async findAll() {
        return await this.detalleRepo.find();
    }
    async findById(id) {
        return await this.detalleRepo.findOne({
            where: { id }
        });
    }
    async findByPedidoId(pedido_id) {
        return await this.detalleRepo.find({
            where: { pedido_id }
        });
    }
    async findByProductoId(producto_id) {
        return await this.detalleRepo.find({
            where: { producto_id }
        });
    }
    async findByPedidoAndProducto(pedido_id, producto_id) {
        return await this.detalleRepo.findOne({
            where: { pedido_id, producto_id }
        });
    }
    async create(detalle) {
        const nuevoDetalle = this.detalleRepo.create(detalle);
        return await this.detalleRepo.save(nuevoDetalle);
    }
    async createMany(detalles) {
        const nuevosDetalles = this.detalleRepo.create(detalles);
        return await this.detalleRepo.save(nuevosDetalles);
    }
    async update(id, detalle) {
        await this.detalleRepo.update(id, detalle);
        return await this.findById(id);
    }
    async delete(id) {
        const result = await this.detalleRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
    async deleteByPedidoId(pedido_id) {
        const result = await this.detalleRepo.delete({ pedido_id });
        return (result.affected ?? 0) > 0;
    }
    async sumSubtotalByPedidoId(pedido_id) {
        const result = await this.detalleRepo
            .createQueryBuilder('detalle')
            .select('SUM(detalle.subtotal)', 'total')
            .where('detalle.pedido_id = :pedido_id', { pedido_id })
            .getRawOne();
        return parseFloat(result?.total ?? '0');
    }
};
exports.DetallePedidoRepository = DetallePedidoRepository;
exports.DetallePedidoRepository = DetallePedidoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detalle_pedido_model_1.DetallePedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetallePedidoRepository);
//# sourceMappingURL=detalle-pedido.repository.js.map