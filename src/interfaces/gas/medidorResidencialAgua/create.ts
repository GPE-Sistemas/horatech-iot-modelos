import { IReporte } from "../../admin";
import { ICoordenadas } from "../../auxiliares";

export interface ICreateMedidorResidencialAgua {
  deviceMeterNumber?: number;
  deveui: string;
  deviceName?: string;
  //
  ultimoReporte?: IReporte;
  //
  consumoInicial?: number;
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  corregido?: boolean;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}

export interface IUpdateMedidorResidencialAgua {
  deviceMeterNumber?: number;
  deveui?: string;
  deviceName?: string;
  //
  ultimoReporte?: IReporte;
  //
  consumoInicial?: number;
  ubicacionGps?: ICoordenadas;
  direccion?: string;
  localidad?: string;
  nombre?: string;
  descripcion?: string;
  corregido?: boolean;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  idsGrupos?: string[];
}
