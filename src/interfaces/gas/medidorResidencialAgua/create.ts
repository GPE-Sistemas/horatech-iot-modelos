import { IAlerta, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";

export interface ICreateMedidorResidencialAgua {
  tenant?: ITenantInfoGas;
  //
  numeroSerie?: number;
  modelo?: string;
  nombre?: string;
  descripcion?: string;
  firmware?: string;
  bateria?: number;
  location?: ILocation;
  consumoInicial?: number;
  //
  ultimoReporte?: IReporte;
  ultaimaAlerta?: IAlerta;
  //
  deveui: string;
  idsGrupos?: string[];
}
