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
exports.Cancelacion = void 0;
const typeorm_1 = require("typeorm");
const razon_cancelacion_enum_1 = require("../../common/enums/razon-cancelacion.enum");
let Cancelacion = class Cancelacion {
    id;
    numeroPedido;
    montoTotal;
    razon;
    fechaCancelacion;
};
exports.Cancelacion = Cancelacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cancelacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cancelacion.prototype, "numeroPedido", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Cancelacion.prototype, "montoTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: razon_cancelacion_enum_1.RazonCancelacion
    }),
    __metadata("design:type", Number)
], Cancelacion.prototype, "razon", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Cancelacion.prototype, "fechaCancelacion", void 0);
exports.Cancelacion = Cancelacion = __decorate([
    (0, typeorm_1.Entity)('cancelaciones')
], Cancelacion);
//# sourceMappingURL=cancelacion.model.js.map