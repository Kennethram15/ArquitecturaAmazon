import { PedidosService } from '../services/pedidos.service';
import { CreatePedidoDto, UpdatePedidoDto } from '../services/pedido.dto';
import { Pedido } from '../models/pedidos.model';
import { Status } from '../../common/enums/status.enum';
export declare class DetallePedidoController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    findAll(): Promise<Pedido[]>;
    findById(id: number): Promise<Pedido>;
    findByStatus(status: Status): Promise<Pedido[]>;
    create(dto: CreatePedidoDto): Promise<Pedido>;
    updateStatus(id: number, dto: UpdatePedidoDto): Promise<Pedido>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
