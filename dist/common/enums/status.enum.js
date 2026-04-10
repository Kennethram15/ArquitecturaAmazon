"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialStatus = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["CANCELADO"] = 0] = "CANCELADO";
    Status[Status["ACTIVO"] = 1] = "ACTIVO";
    Status[Status["PENDIENTE_PAGO"] = 2] = "PENDIENTE_PAGO";
    Status[Status["NO_EXISTECIA_DISPONIBLE"] = 3] = "NO_EXISTECIA_DISPONIBLE";
    Status[Status["PAGADO"] = 4] = "PAGADO";
    Status[Status["ENVIADO"] = 5] = "ENVIADO";
    Status[Status["PERDIDO"] = 6] = "PERDIDO";
})(Status || (exports.Status = Status = {}));
var SpecialStatus;
(function (SpecialStatus) {
    SpecialStatus[SpecialStatus["PARA_EL_JEFE"] = 101] = "PARA_EL_JEFE";
    SpecialStatus[SpecialStatus["CONVIVIO"] = 102] = "CONVIVIO";
    SpecialStatus[SpecialStatus["CUMPLE"] = 103] = "CUMPLE";
})(SpecialStatus || (exports.SpecialStatus = SpecialStatus = {}));
//# sourceMappingURL=status.enum.js.map