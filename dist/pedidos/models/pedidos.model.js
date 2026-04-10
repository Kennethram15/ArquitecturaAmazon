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
exports.Pedido = void 0;
const typeorm_1 = require("typeorm");
const status_enum_1 = require("../../common/enums/status.enum");
const detalle_pedido_model_1 = require("./detalle-pedido.model");
let Pedido = class Pedido {
    id;
    pedido_status;
    pedido_total;
    createdAt;
    udpatedAt;
    Items;
};
exports.Pedido = Pedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: status_enum_1.Status.PENDIENTE_PAGO
    }),
    __metadata("design:type", Number)
], Pedido.prototype, "pedido_status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 2,
        scale: 2,
        default: 0.00
    }),
    __metadata("design:type", Number)
], Pedido.prototype, "pedido_total", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pedido.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Pedido.prototype, "udpatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detalle_pedido_model_1.DetallePedido, (item) => item.pedido, {
        cascade: true,
        eager: true
    }),
    __metadata("design:type", Array)
], Pedido.prototype, "Items", void 0);
exports.Pedido = Pedido = __decorate([
    (0, typeorm_1.Entity)('pedidos')
], Pedido);
//# sourceMappingURL=pedidos.model.js.map