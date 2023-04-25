import { ITenantInfoGas } from "../../admin";

export interface IGrupo {
  _id?: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  nombre: string;
}
