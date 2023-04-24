import { ICorrectora } from "../correctora";
import { ICromatografia } from "../cromatografia";
import { ICuenca } from "../cuenca";
import { IUnidadNegocio } from "../unidadNegocio";

export interface IAplicacionCromatografia {
  _id: string;
  aplicada: boolean;
  idCromatografia: string;
  numeroSerieCorrectora: number;
  fechaCreacion: string;
  //
  idCliente?: string;
  idUnidadNegocio?: string;
  idCuenca?: string;
  // Virtual
  correctora?: ICorrectora;
  cromatografia?: ICromatografia;
  unidadNegocio?: IUnidadNegocio;
  cuenca?: ICuenca;
}
