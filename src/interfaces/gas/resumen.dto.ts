// Resumen
import { ICliente } from "../admin";
import { ICentroOperativo } from "./centroOperativo";
import { ICorrectora } from "./correctora";
import { ICuenca } from "./cuenca";
import { IMedidorResidencialAgua } from "./medidorResidencialAgua";
import { IMedidorResidencialGas } from "./medidorResidencialGas";
import { IUnidadNegocio } from "./unidadNegocio";

export interface IResumenUnidadNegocio {
  unidadNegocio: IUnidadNegocio;
  centroOperativos: {
    cantReportesOkCorrectora: number;
    cantReportesOkMedidor: number;
    porcentajeReporteCorrectoras: number;
    porcentajeReporteMedidores: number;
    centroOperativo: ICentroOperativo;
    correctoras: ICorrectora[];
    medidores: IMedidorResidencialAgua[];
  }[];
  cuencas: {
    cantReportesOkCorrectora: number;
    cantReportesOkMedidor: number;
    porcentajeReporteCorrectoras: number;
    porcentajeReporteMedidores: number;
    cuenca: ICuenca;
    correctoras: ICorrectora[];
    medidores: IMedidorResidencialGas[];
  }[];
  cantidadCuencas: number;
  cantidadCentroOperativos: number;
  cantidadCorrectoras: number;
  cantidadMedidores: number;
  cantReportesOkCorrectora: number;
  cantReportesOkMedidor: number;
  porcentajeReporteCorrectoras: number;
  porcentajeReporteMedidores: number;
}

export interface IResumenCliente {
  cliente: ICliente;
  cantidadDispositivos: number;
}
