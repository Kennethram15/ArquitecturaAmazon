import { DetallePedido } from './detalle-pedido.model';
export declare class Pedido {
    id: number;
    pedido_status: number;
    pedido_total: number;
    createdAt: Date;
    udpatedAt: Date;
    Items: DetallePedido[];
}
