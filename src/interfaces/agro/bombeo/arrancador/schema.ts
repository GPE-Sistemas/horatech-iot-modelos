import { ICliente, IDispositivo, IReporte } from "../../../admin";
import { IEstablecimiento } from "../../establecimiento";

export interface IBombeoArrancador {
  _id?: string;
  nombre?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string; colorIconoAlerta: string };
  //
  deveuiCentral: string;
  numero: number;
  canalEntrada?: number;
  canalSalida?: number;
  estadoActual?: "Encendido" | "Apagado" | "Manual";
  fechaUltimaComunicacion?: string;
  ultimoReporte?: IReporte;
  tipo?: "Arrancador" | "Variador";
  modelo?: string;
  velocidad?: number;
  // Virtual
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
