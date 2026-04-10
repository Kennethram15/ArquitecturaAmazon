import { Pedido } from './pedidos.model';
export declare class DetallePedido {
    id: number;
    pedido_id: number;
    producto_id: number;
    cantidad: number;
    description: string;
    precio: number;
    subtotal: number;
    pedido: Pedido;
}
