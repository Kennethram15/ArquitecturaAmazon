import { Status } from '../../common/enums/status.enum';
export declare class CreatePedidoDto {
    items: CreateDetalleItemDto[];
}
export declare class CreateDetalleItemDto {
    producto_id: number;
    cantidad: number;
    descripcion: string;
    precio: number;
}
export declare class UpdatePedidoDto {
    pedido_status?: Status;
}
export declare class UpdateDetallePedidoDto {
    cantidad?: number;
    descripcion?: string;
    precio?: number;
}
