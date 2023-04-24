import { ICliente } from "../../admin";

export interface IEstablecimiento {
  _id: string;
  nombre: string;
  // ubicacion?: IUbicacion[];
  idCliente: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  // Populate
  cliente?: ICliente;
}
