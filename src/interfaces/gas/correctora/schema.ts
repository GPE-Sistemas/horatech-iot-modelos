import { IAlerta, IDispositivo, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";
import { ICromatografia } from "../cromatografia";
import { IGrupo } from "../grupo";

export interface ICorrectora {
  _id?: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  //
  numeroSerie?: number;
  modelo?: string;
  nombre?: string;
  descripcion?: string;
  firmware?: string;
  bateria?: number;
  location?: ILocation;
  //
  deveui?: string;
  idsGrupos?: string[];
  //
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
  // Populate
  dispositivo?: IDispositivo;
  grupos?: IGrupo[];
}
