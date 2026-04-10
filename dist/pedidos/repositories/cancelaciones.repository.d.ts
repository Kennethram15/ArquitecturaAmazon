import { Repository } from 'typeorm';
import { Cancelacion } from '../models/cancelacion.model';
export declare class CancelacionesRepository {
    private readonly cancelacionRepository;
    constructor(cancelacionRepository: Repository<Cancelacion>);
    crearCancelacion(cancelacion: Partial<Cancelacion>): Promise<Cancelacion>;
    obtenerCancelaciones(): Promise<Cancelacion[]>;
    obtenerCancelacionPorId(id: number): Promise<Cancelacion | null>;
    obtenerCancelacionesPorPedido(numeroPedido: number): Promise<Cancelacion[]>;
}
