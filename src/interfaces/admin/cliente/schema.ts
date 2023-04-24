import { TipoDispositivo } from "../auxiliares/tipoDispositivo";
import { IConfiguracionCliente } from "./configuracion";
import { IImagenCliente } from "./imagenes";

export interface ICliente {
  _id: string;
  activo?: boolean;
  fechaCreacion?: string;
  nombre?: string;
  tiposDispositivo?: TipoDispositivo[];
  imagenes?: IImagenCliente;
  configuracion?: IConfiguracionCliente;
}
