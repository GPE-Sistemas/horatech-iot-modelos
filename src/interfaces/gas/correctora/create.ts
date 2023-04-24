import { IAlerta, IReporte } from "../../admin";
import { ICoordenadas } from "../../auxiliares";
import { ICromatografia } from "../cromatografia";

export interface ICreateCorrectora {
  firmware?: string;
  numeroSerie: number;
  deveui: string;
  deviceName?: string;
  modelo?: string;
  bateria?: number;
  //
  ultimoRegistro?: IReporte;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
  //
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  codigoSimec?: string;
  //
  idCliente: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}

export interface IUpdateCorrectora {
  firmware?: string;
  numeroSerie?: number;
  deveui?: string;
  deviceName?: string;
  modelo?: string;
  bateria?: number;
  //
  ultimoRegistro?: IReporte;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
  //
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  codigoSimec?: string;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}
