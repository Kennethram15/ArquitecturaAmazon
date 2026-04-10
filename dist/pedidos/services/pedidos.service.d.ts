import { PedidosRepository } from '../repositories/pedidos.repository';
import { DetallePedidoRepository } from '../repositories/detalle-pedido.repository';
import { Pedido } from '../models/pedidos.model';
import { Status } from '../../common/enums/status.enum';
import { CreatePedidoDto, UpdatePedidoDto } from '../services/pedido.dto';
export declare class PedidosService {
    private readonly pedidosRepository;
    private readonly detallePedidoRepository;
    constructor(pedidosRepository: PedidosRepository, detallePedidoRepository: DetallePedidoRepository);
    findAll(): Promise<Pedido[]>;
    findById(id: number): Promise<Pedido>;
    findByStatus(status: Status): Promise<Pedido[]>;
    create(dto: CreatePedidoDto): Promise<Pedido>;
    updateStatus(id: number, dto: UpdatePedidoDto): Promise<Pedido>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
