import { IAlerta, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";

export interface IUpdateMedidorResidencialAgua {
  tenant?: ITenantInfoGas;
  //
  nombre?: string;
  codigoSimec?: string;
  location?: ILocation;
  //
  ultimoReporte?: IReporte;
  ultaimaAlerta?: IAlerta;
  //
  deveui: string;
  idsGrupos?: string[];
}
