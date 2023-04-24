import { ConfiguracionSilobolsa, IAlerta, IReporte } from "../../..";

export interface ICreateSilobolsa {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  //
  deveuisCo2?: string[];
  nombre?: string;
  // ubicacion?: IUbicacionV2 | null;
  metros?: number;
  especie?: string;
  cosecha?: string;
  producto?: string;
  fechaConfeccion?: Date;
  humedadConfeccion?: number;
  activa?: boolean;
  fechaDesmantelacion?: Date;
  tas?: number;
  configuraciones?: ConfiguracionSilobolsa;
  //
}
