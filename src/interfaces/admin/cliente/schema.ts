import { TipoDispositivo } from "../auxiliares/tipoDispositivo";
import { IConfiguracionCliente } from "./configuracion";
import { IImagenCliente } from "./imagenes";

export interface ICliente {
  _id: string;
  fechaCreacion?: string;
  //
  activo?: boolean;
  nombre?: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenCliente;
  configuracion?: IConfiguracionCliente;
}
