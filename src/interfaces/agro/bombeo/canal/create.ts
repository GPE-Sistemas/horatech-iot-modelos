import { IReporte } from "../../../admin";
import { IConfigCanal } from "./config";

export interface ICreateBombeoCanal {
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
}
