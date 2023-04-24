import { ICliente, IDispositivo, IReporte } from "../../../admin";
import { IEstablecimiento } from "../../establecimiento";
import { IConfigCanal } from "./config";

export interface IBombeoCanal {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // configuraciones?: IConfiguracionBombeoCanal;
  asignado?: boolean;
  //
  deveuiCentral: string;
  numero: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
  configuracion?: IConfigCanal;
  ultimoReporte?: IReporte;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
