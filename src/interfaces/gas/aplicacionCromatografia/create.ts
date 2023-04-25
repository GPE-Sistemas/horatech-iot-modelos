import { ITenantInfoGas } from "../../admin";

export interface ICreateAplicacionCromatografia {
  tenant?: ITenantInfoGas;
  //
  aplicada?: boolean;
  idCromatografia?: string;
  numeroSerieCorrectora?: number;
}
