import { ILocation } from "../../auxiliares";
import { IAlerta, IReporte, ITenantInfoGas } from "../../admin";

export interface ICreateMedidorResidencialGas {
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
