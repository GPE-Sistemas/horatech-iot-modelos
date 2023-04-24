import { ConfiguracionCisterna, ICliente, IDispositivo } from "../../admin";
import { ICoordenadas } from "../../auxiliares";
import { IEstablecimiento } from "../establecimiento";
import { ILote } from "../lote";

export interface ICisterna {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: ConfiguracionCisterna;
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
