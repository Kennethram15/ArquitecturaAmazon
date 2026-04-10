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
exports.CancelacionesController = void 0;
const common_1 = require("@nestjs/common");
const cancelaciones_service_1 = require("../services/cancelaciones.service");
const cancelacion_dto_1 = require("../services/cancelacion.dto");
let CancelacionesController = class CancelacionesController {
    cancelacionesService;
    constructor(cancelacionesService) {
        this.cancelacionesService = cancelacionesService;
    }
    async crearCancelacion(dto) {
        return await this.cancelacionesService.crearCancelacion(dto);
    }
    async obtenerCancelaciones() {
        return await this.cancelacionesService.obtenerCancelaciones();
    }
    async obtenerCancelacionPorId(id) {
        return await this.cancelacionesService.obtenerCancelacionPorId(+id);
    }
    async obtenerCancelacionesPorPedido(numeroPedido) {
        return await this.cancelacionesService.obtenerCancelacionesPorPedido(+numeroPedido);
    }
};
exports.CancelacionesController = CancelacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cancelacion_dto_1.CrearCancelacionDto]),
    __metadata("design:returntype", Promise)
], CancelacionesController.prototype, "crearCancelacion", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CancelacionesController.prototype, "obtenerCancelaciones", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CancelacionesController.prototype, "obtenerCancelacionPorId", null);
__decorate([
    (0, common_1.Get)('pedido/:numeroPedido'),
    __param(0, (0, common_1.Param)('numeroPedido')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CancelacionesController.prototype, "obtenerCancelacionesPorPedido", null);
exports.CancelacionesController = CancelacionesController = __decorate([
    (0, common_1.Controller)('cancelaciones'),
    __metadata("design:paramtypes", [cancelaciones_service_1.CancelacionesService])
], CancelacionesController);
//# sourceMappingURL=cancelaciones.controller.js.map