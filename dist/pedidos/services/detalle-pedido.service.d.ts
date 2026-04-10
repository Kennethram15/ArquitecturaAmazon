import { DetallePedidoRepository } from '../repositories/detalle-pedido.repository';
import { PedidosRepository } from '../repositories/pedidos.repository';
import { DetallePedido } from '../models/detalle-pedido.model';
import { UpdateDetallePedidoDto, CreateDetalleItemDto } from './pedido.dto';
export declare class DetallePedidoService {
    private readonly detallePedidoRepository;
    private readonly pedidosRepository;
    constructor(detallePedidoRepository: DetallePedidoRepository, pedidosRepository: PedidosRepository);
    findAll(): Promise<DetallePedido[]>;
    findById(id: number): Promise<DetallePedido>;
    findByPedidoId(pedido_id: number): Promise<DetallePedido[]>;
    findByProductoId(producto_id: number): Promise<DetallePedido[]>;
    addItemToPedido(pedido_id: number, dto: CreateDetalleItemDto): Promise<DetallePedido>;
    update(id: number, dto: UpdateDetallePedidoDto): Promise<DetallePedido>;
    delete(id: number): Promise<{
        message: string;
    }>;
    deleteByPedidoId(pedido_id: number): Promise<{
        message: string;
    }>;
    private validarPedidoExiste;
    private recalcularTotalPedido;
}
