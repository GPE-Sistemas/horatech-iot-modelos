import { IAlerta, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";
import { ICromatografia } from "../cromatografia";

export interface IUpdateCorrectora {
  tenant?: ITenantInfoGas;
  //
  numeroSerie?: number;
  modelo?: string;
  nombre?: string;
  descripcion?: string;
  codigoSimec?: string;
  firmware?: string;
  bateria?: number;
  location?: ILocation;
  //
  deveui?: string;
  idsGrupos?: string[];
  //
  ultimoRegistro?: IReporte;
  ultimaAlerta?: IAlerta;
  ultimaCromatografia?: ICromatografia;
  fechaUltimaCromatografia?: string;
}
