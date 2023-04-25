import { ITenantInfoGas } from "../../admin";
import { ICorrectora } from "../correctora";
import { ICromatografia } from "../cromatografia";

export interface IAplicacionCromatografia {
  _id?: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  //
  aplicada?: boolean;
  idCromatografia?: string;
  numeroSerieCorrectora?: number;
  // Virtual
  cromatografia?: ICromatografia;
  correctora?: ICorrectora;
}
