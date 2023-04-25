import { IAlerta, IDispositivo, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";
import { IGrupo } from "../grupo";

export interface IMedidorResidencialGas {
  _id?: string;
  fechaCreacion?: string;
  //
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
  // Populate
  dispositivo?: IDispositivo;
  grupos?: IGrupo[];
}
