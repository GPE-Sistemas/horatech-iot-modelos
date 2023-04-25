import { IAlerta, IDispositivo, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";
import { IGrupo } from "../grupo";

export interface IPuntoMedicion {
  _id?: string;
  fechaCreacion?: string;
  //
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
  // Populate
  dispositivo?: IDispositivo;
  grupos?: IGrupo[];
}
