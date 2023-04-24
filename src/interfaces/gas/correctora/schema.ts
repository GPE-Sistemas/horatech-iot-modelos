import { IAlerta, IDispositivo, IReporte } from "../../admin";
import { ICoordenadas } from "../../auxiliares";
import { ICentroOperativo } from "../centroOperativo";
import { ICromatografia } from "../cromatografia";
import { ICuenca } from "../cuenca";
import { IGrupo } from "../grupo";
import { IUnidadNegocio } from "../unidadNegocio";

export interface ICorrectora {
  _id: string;
  //
  firmware: string;
  numeroSerie: number;
  deveui: string;
  deviceName?: string;
  modelo: string;
  fechaCreacion: string;
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
  // Populate
  unidadNegocio?: IUnidadNegocio;
  centroOperativo?: ICentroOperativo;
  cuenca?: ICuenca;
  grupos?: IGrupo[];
  dispositivo?: IDispositivo;
}
