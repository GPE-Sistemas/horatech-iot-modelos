import { IAlerta, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";

export interface ICreatePuntoMedicion {
  tenant?: ITenantInfoGas;
  //
  nombre?: string;
  codigoSimec?: string;
  location?: ILocation;
  //
  ultimoReporte?: IReporte;
  ultaimaAlerta?: IAlerta;
  //
  idCorrectora?: string;
  idMedidorResidencialGas?: string;
  idMedidorResidencialAgua?: string;
  idsGrupos?: string[];
}
