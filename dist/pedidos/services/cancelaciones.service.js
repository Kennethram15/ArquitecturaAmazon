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
exports.CancelacionesService = void 0;
const common_1 = require("@nestjs/common");
const cancelaciones_repository_1 = require("../repositories/cancelaciones.repository");
let CancelacionesService = class CancelacionesService {
    cancelacionesRepository;
    constructor(cancelacionesRepository) {
        this.cancelacionesRepository = cancelacionesRepository;
    }
    async crearCancelacion(dto) {
        return await this.cancelacionesRepository.crearCancelacion(dto);
    }
    async obtenerCancelaciones() {
        return await this.cancelacionesRepository.obtenerCancelaciones();
    }
    async obtenerCancelacionPorId(id) {
        const cancelacion = await this.cancelacionesRepository.obtenerCancelacionPorId(id);
        if (!cancelacion) {
            throw new common_1.NotFoundException(`Cancelacion con id ${id} no encontrada`);
        }
        return cancelacion;
    }
    async obtenerCancelacionesPorPedido(numeroPedido) {
        return await this.cancelacionesRepository.obtenerCancelacionesPorPedido(numeroPedido);
    }
};
exports.CancelacionesService = CancelacionesService;
exports.CancelacionesService = CancelacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cancelaciones_repository_1.CancelacionesRepository])
], CancelacionesService);
//# sourceMappingURL=cancelaciones.service.js.map