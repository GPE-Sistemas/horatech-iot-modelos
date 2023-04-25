import { IUsuario } from "../";

export interface IAuditoria {
  _id: string;
  fechaCreacion: string;
  //
  entidad: string;
  metodo: string;
  dato: Object;
  idUsuario: string;
  idCliente: string;
  // Populate
  usuario?: IUsuario;
}
