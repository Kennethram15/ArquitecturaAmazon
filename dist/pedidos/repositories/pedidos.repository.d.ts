import { Repository } from 'typeorm';
import { Pedido } from '../models/pedidos.model';
export declare class PedidosRepository {
    private readonly pedidoRepo;
    constructor(pedidoRepo: Repository<Pedido>);
    findAll(): Promise<Pedido[]>;
    findById(id: number): Promise<Pedido | null>;
    findByStatus(status: number): Promise<Pedido[]>;
    create(pedido: Partial<Pedido>): Promise<Pedido>;
    update(id: number, pedido: Partial<Pedido>): Promise<Pedido | null>;
    delete(id: number): Promise<boolean>;
    updateTotal(id: number, total: number): Promise<Pedido | null>;
    updateStatus(id: number, status: number): Promise<Pedido | null>;
}
