import { ITenantInfoGas } from "../../admin";
import { IElementos } from "./elementos";

export interface IUpdateCromatografia {
  tenant?: ITenantInfoGas;
  //
  idUsuario?: string;
  fechaAplicacion: string;
  fechaVencimiento: string;
  elementos: IElementos;
}
