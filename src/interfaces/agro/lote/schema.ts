import { ICliente } from "../../admin";
import { IEstablecimiento } from "../establecimiento";

export interface ILote {
  _id: string;
  nombre: string;
  // ubicacion?: IUbicacion;
  idEstablecimiento: string;
  idCliente: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  // Populate
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
}
