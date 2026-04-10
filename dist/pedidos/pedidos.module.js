"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedidos_model_1 = require("./models/pedidos.model");
const detalle_pedido_model_1 = require("./models/detalle-pedido.model");
const cancelacion_model_1 = require("./models/cancelacion.model");
const pedidos_repository_1 = require("./repositories/pedidos.repository");
const detalle_pedido_repository_1 = require("./repositories/detalle-pedido.repository");
const cancelaciones_repository_1 = require("./repositories/cancelaciones.repository");
const pedidos_service_1 = require("./services/pedidos.service");
const detalle_pedido_service_1 = require("./services/detalle-pedido.service");
const cancelaciones_service_1 = require("./services/cancelaciones.service");
const pedidos_controller_1 = require("./controllers/pedidos.controller");
const detalle_pedido_controller_1 = require("./controllers/detalle-pedido.controller");
const cancelaciones_controller_1 = require("./controllers/cancelaciones.controller");
let PedidosModule = class PedidosModule {
};
exports.PedidosModule = PedidosModule;
exports.PedidosModule = PedidosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pedidos_model_1.Pedido, detalle_pedido_model_1.DetallePedido, cancelacion_model_1.Cancelacion])
        ],
        controllers: [
            pedidos_controller_1.PedidosController,
            detalle_pedido_controller_1.DetallePedidoController,
            cancelaciones_controller_1.CancelacionesController,
        ],
        providers: [
            pedidos_repository_1.PedidosRepository,
            detalle_pedido_repository_1.DetallePedidoRepository,
            cancelaciones_repository_1.CancelacionesRepository,
            pedidos_service_1.PedidosService,
            detalle_pedido_service_1.DetallePedidoService,
            cancelaciones_service_1.CancelacionesService,
        ],
        exports: [
            pedidos_service_1.PedidosService,
            detalle_pedido_service_1.DetallePedidoService,
            cancelaciones_service_1.CancelacionesService,
        ],
    })
], PedidosModule);
//# sourceMappingURL=pedidos.module.js.map