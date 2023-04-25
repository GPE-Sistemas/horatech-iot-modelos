export interface IDatosPersonales {
  nombre?: string;
  email?: string;
  [key: string]: string | undefined;
}

export interface IUsuario {
  _id: string;
  fechaCreacion: string;
  //
  activo: boolean;
  username: string;
  hash?: string;
  datosPersonales?: IDatosPersonales;
}
