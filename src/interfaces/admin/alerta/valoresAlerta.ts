export type TipoAlerta =
  | "Seguridad"
  | "Operacional"
  | "Calidad"
  | "Técnica"
  | "Otros";
export type NivelAlerta = "Alto" | "Medio" | "Bajo";

export interface IValoresAlerta {
  tipo?: TipoAlerta;
  nivel?: NivelAlerta;
  descripcion?: string;
}
