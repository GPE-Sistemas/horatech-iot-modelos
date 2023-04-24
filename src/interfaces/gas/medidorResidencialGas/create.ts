import { ICoordenadas } from "../../auxiliares";
import { IReporte } from "../../admin";

export interface ICreateMedidorResidencialGas {
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

export interface IUpdateMedidorResidencialGas {
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
