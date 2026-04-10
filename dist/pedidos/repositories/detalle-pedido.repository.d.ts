import { Repository } from 'typeorm';
import { DetallePedido } from '../models/detalle-pedido.model';
export declare class DetallePedidoRepository {
    private readonly detalleRepo;
    constructor(detalleRepo: Repository<DetallePedido>);
    findAll(): Promise<DetallePedido[]>;
    findById(id: number): Promise<DetallePedido | null>;
    findByPedidoId(pedido_id: number): Promise<DetallePedido[]>;
    findByProductoId(producto_id: number): Promise<DetallePedido[]>;
    findByPedidoAndProducto(pedido_id: number, producto_id: number): Promise<DetallePedido | null>;
    create(detalle: Partial<DetallePedido>): Promise<DetallePedido>;
    createMany(detalles: Partial<DetallePedido>[]): Promise<DetallePedido[]>;
    update(id: number, detalle: Partial<DetallePedido>): Promise<DetallePedido | null>;
    delete(id: number): Promise<boolean>;
    deleteByPedidoId(pedido_id: number): Promise<boolean>;
    sumSubtotalByPedidoId(pedido_id: number): Promise<number>;
}
