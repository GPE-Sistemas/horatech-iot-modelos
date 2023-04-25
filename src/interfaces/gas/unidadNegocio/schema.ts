import { ITenantInfoGas } from "../../admin";

export interface IUnidadNegocio {
  _id?: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  nombre: string;
}
