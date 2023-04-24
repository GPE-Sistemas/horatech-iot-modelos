import {
  ConfiguracionLamina,
  IAlerta,
  ICliente,
  IDispositivo,
  IReporte,
} from "../../admin";
import { IEstablecimiento } from "../establecimiento";
import { ILote } from "../lote";

export interface ILamina {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del SLA
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionLamina;
  cota?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
}
