export interface INotificacion {
  _id?: string;
  fechaCreacion: string;
  //
  idUsuario: string;
  titulo: string;
  mensaje: string;
  leido: boolean;
  fechaLeido?: string;
  //
}
