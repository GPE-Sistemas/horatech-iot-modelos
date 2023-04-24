import { TipoDispositivo } from "../auxiliares";
import { IConfigLora } from "./configLora";

export interface IUpdateTipoDispositivo {
  nombre?: TipoDispositivo;
  integrationUrl?: string;
  loraServers?: IConfigLora[];
}
