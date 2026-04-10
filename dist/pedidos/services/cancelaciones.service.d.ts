import { CancelacionesRepository } from '../repositories/cancelaciones.repository';
import { Cancelacion } from '../models/cancelacion.model';
import { CrearCancelacionDto } from '../services/cancelacion.dto';
export declare class CancelacionesService {
    private readonly cancelacionesRepository;
    constructor(cancelacionesRepository: CancelacionesRepository);
    crearCancelacion(dto: CrearCancelacionDto): Promise<Cancelacion>;
    obtenerCancelaciones(): Promise<Cancelacion[]>;
    obtenerCancelacionPorId(id: number): Promise<Cancelacion>;
    obtenerCancelacionesPorPedido(numeroPedido: number): Promise<Cancelacion[]>;
}
