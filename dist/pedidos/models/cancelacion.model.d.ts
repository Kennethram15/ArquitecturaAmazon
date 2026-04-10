import { RazonCancelacion } from '../../common/enums/razon-cancelacion.enum';
export declare class Cancelacion {
    id: number;
    numeroPedido: number;
    montoTotal: number;
    razon: RazonCancelacion;
    fechaCancelacion: Date;
}
