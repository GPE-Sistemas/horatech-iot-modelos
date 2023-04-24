import { IUsuario } from "../../admin";
import { ICuenca } from "../cuenca";
import { IUnidadNegocio } from "../unidadNegocio";
import { IElementos } from "./create";

export interface ICromatografia {
  _id: string;
  idUsuario?: string;
  idCuenca: string;
  idCliente: string;
  idUnidadNegocio: string;
  fechaAplicacion: string;
  fechaVencimiento: string;
  elementos: IElementos;
  //
  fechaCreacion: string;
  // Virtual
  cuenca?: ICuenca;
  unidadNegocio?: IUnidadNegocio;
  usuario?: IUsuario;
}
