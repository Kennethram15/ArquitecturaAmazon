"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetallePedidoDto = exports.UpdatePedidoDto = exports.CreateDetalleItemDto = exports.CreatePedidoDto = void 0;
class CreatePedidoDto {
    items;
}
exports.CreatePedidoDto = CreatePedidoDto;
class CreateDetalleItemDto {
    producto_id;
    cantidad;
    descripcion;
    precio;
}
exports.CreateDetalleItemDto = CreateDetalleItemDto;
class UpdatePedidoDto {
    pedido_status;
}
exports.UpdatePedidoDto = UpdatePedidoDto;
class UpdateDetallePedidoDto {
    cantidad;
    descripcion;
    precio;
}
exports.UpdateDetallePedidoDto = UpdateDetallePedidoDto;
//# sourceMappingURL=pedido.dto.js.map