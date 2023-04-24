import { IUsuario } from "../";

export interface IAuditoria {
  _id: string;
  entidad: string;
  metodo: string;
  dato: Object;
  idUsuario: string;
  idCliente: string;
  fechaCreacion: string;
  // Populate
  usuario?: IUsuario;
}
