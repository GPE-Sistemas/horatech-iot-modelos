import { ITenantInfoGas, IUsuario } from "../../admin";
import { IElementos } from "./elementos";

export interface ICromatografia {
  _id: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  //
  idUsuario?: string;
  fechaAplicacion: string;
  fechaVencimiento: string;
  elementos: IElementos;
  // Virtual
  usuario?: IUsuario;
}
