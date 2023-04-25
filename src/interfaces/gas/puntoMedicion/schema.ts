import { IAlerta, IDispositivo, IReporte, ITenantInfoGas } from "../../admin";
import { ILocation } from "../../auxiliares";
import { ICorrectora } from "../correctora";
import { IGrupo } from "../grupo";
import { IMedidorResidencialAgua } from "../medidorResidencialAgua";
import { IMedidorResidencialGas } from "../medidorResidencialGas";

export interface IPuntoMedicion {
  _id?: string;
  fechaCreacion?: string;
  //
  tenant?: ITenantInfoGas;
  //
  nombre?: string;
  codigoSimec?: string;
  location?: ILocation;
  //
  ultimoReporte?: IReporte;
  ultaimaAlerta?: IAlerta;
  //
  idCorrectora?: string;
  idMedidorResidencialGas?: string;
  idMedidorResidencialAgua?: string;
  idsGrupos?: string[];
  // Populate
  correctora?: ICorrectora;
  medidorResidencialGas?: IMedidorResidencialGas;
  medidorResidencialAgua?: IMedidorResidencialAgua;
  grupos?: IGrupo[];
}
