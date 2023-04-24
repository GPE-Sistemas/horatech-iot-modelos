import { TipoDispositivo } from "../auxiliares";
import { IConfigLora } from "./configLora";

export interface ICreateTipoDispositivo {
  nombre: TipoDispositivo;
  /**
   * URL donde llegan los mensajes de los dispositivos
   */
  integrationUrl?: string;
  loraServers?: IConfigLora[];
}
