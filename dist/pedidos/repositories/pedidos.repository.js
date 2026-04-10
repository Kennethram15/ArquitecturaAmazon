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
exports.PedidosRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pedidos_model_1 = require("../models/pedidos.model");
let PedidosRepository = class PedidosRepository {
    pedidoRepo;
    constructor(pedidoRepo) {
        this.pedidoRepo = pedidoRepo;
    }
    async findAll() {
        return await this.pedidoRepo.find();
    }
    async findById(id) {
        return await this.pedidoRepo.findOne({
            where: { id }
        });
    }
    async findByStatus(status) {
        return await this.pedidoRepo.find({
            where: { pedido_status: status }
        });
    }
    async create(pedido) {
        const nuevoPedido = this.pedidoRepo.create(pedido);
        return await this.pedidoRepo.save(nuevoPedido);
    }
    async update(id, pedido) {
        await this.pedidoRepo.update(id, pedido);
        return await this.findById(id);
    }
    async delete(id) {
        const result = await this.pedidoRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
    async updateTotal(id, total) {
        await this.pedidoRepo.update(id, { pedido_total: total });
        return await this.findById(id);
    }
    async updateStatus(id, status) {
        await this.pedidoRepo.update(id, { pedido_status: status });
        return await this.findById(id);
    }
};
exports.PedidosRepository = PedidosRepository;
exports.PedidosRepository = PedidosRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedidos_model_1.Pedido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PedidosRepository);
//# sourceMappingURL=pedidos.repository.js.map