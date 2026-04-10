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
exports.DetallePedido = void 0;
const typeorm_1 = require("typeorm");
const pedidos_model_1 = require("./pedidos.model");
let DetallePedido = class DetallePedido {
    id;
    pedido_id;
    producto_id;
    cantidad;
    description;
    precio;
    subtotal;
    pedido;
};
exports.DetallePedido = DetallePedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "pedido_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "producto_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetallePedido.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DetallePedido.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 2,
        scale: 2,
        default: 0.00
    }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        precision: 2,
        scale: 2,
        default: 0.00
    }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedidos_model_1.Pedido, (pedido) => pedido.Items, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'pedido_id' }),
    __metadata("design:type", pedidos_model_1.Pedido)
], DetallePedido.prototype, "pedido", void 0);
exports.DetallePedido = DetallePedido = __decorate([
    (0, typeorm_1.Entity)('detalle_pedidos')
], DetallePedido);
//# sourceMappingURL=detalle-pedido.model.js.map