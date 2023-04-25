import { IEstablecimiento } from "../../agro";
import { ICentroOperativo, ICuenca, IUnidadNegocio } from "../../gas";
import { ICliente } from "../cliente";

export type ITenantInfo = ITenantInfoAgro | ITenantInfoGas;

export interface ITenantInfoAgro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}

export interface ITenantInfoGas {
  idCliente?: string;
  idUnidadNegocio?: string;
  idCentroOperativo?: string;
  idCuenca?: string;
  // Virtual
  cliente?: ICliente;
  unidadNegocio?: IUnidadNegocio;
  centroOperativo?: ICentroOperativo;
  cuenca?: ICuenca;
}
