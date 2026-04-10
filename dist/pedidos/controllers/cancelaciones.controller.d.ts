import { CancelacionesService } from '../services/cancelaciones.service';
import { CrearCancelacionDto } from '../services/cancelacion.dto';
import { Cancelacion } from '../models/cancelacion.model';
export declare class CancelacionesController {
    private readonly cancelacionesService;
    constructor(cancelacionesService: CancelacionesService);
    crearCancelacion(dto: CrearCancelacionDto): Promise<Cancelacion>;
    obtenerCancelaciones(): Promise<Cancelacion[]>;
    obtenerCancelacionPorId(id: string): Promise<Cancelacion>;
    obtenerCancelacionesPorPedido(numeroPedido: string): Promise<Cancelacion[]>;
}
