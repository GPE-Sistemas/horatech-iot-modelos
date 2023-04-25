import { TipoDispositivo } from "../auxiliares";
import { ILoraServer } from "../loraServer";
import { ILoteDispositivo } from "../loteDispositivo";
import { ITipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "./tipoConectividad";

export interface IDevice {
  deveui: string;
  deviceName: string;
  appkey: string;
  conectividad: TipoConectividad;
  tipo?: TipoDispositivo;
  idTipoDispositivo: string;
  idLoteDispositivo?: string;
  idLoraServer?: string;
  deviceProfileID?: string;
  // Virtuals
  tipoDispositivo?: ITipoDispositivo;
  loteDispositivo?: ILoteDispositivo;
  loraServer?: ILoraServer;
}
