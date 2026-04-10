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
exports.CancelacionesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cancelacion_model_1 = require("../models/cancelacion.model");
let CancelacionesRepository = class CancelacionesRepository {
    cancelacionRepository;
    constructor(cancelacionRepository) {
        this.cancelacionRepository = cancelacionRepository;
    }
    async crearCancelacion(cancelacion) {
        const nuevaCancelacion = this.cancelacionRepository.create(cancelacion);
        return await this.cancelacionRepository.save(nuevaCancelacion);
    }
    async obtenerCancelaciones() {
        return await this.cancelacionRepository.find();
    }
    async obtenerCancelacionPorId(id) {
        return await this.cancelacionRepository.findOne({ where: { id } });
    }
    async obtenerCancelacionesPorPedido(numeroPedido) {
        return await this.cancelacionRepository.find({ where: { numeroPedido } });
    }
};
exports.CancelacionesRepository = CancelacionesRepository;
exports.CancelacionesRepository = CancelacionesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cancelacion_model_1.Cancelacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CancelacionesRepository);
//# sourceMappingURL=cancelaciones.repository.js.map