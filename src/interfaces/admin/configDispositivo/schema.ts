import { ITenantInfo } from "../auxiliares";

export interface IConfigDispositivo {
  _id: string;
  fechaCreacion: string;
  // Tentant
  tenant?: ITenantInfo;
  // Info de carga
  deveui: string;
  config: configDispositivo;
}

type configDispositivo = IConfigDispositivoNUC4G;

export interface IConfigDispositivoNUC4G {
  horaInicio: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  modoOperacion:
    | "REG1_DIARIO"
    | "REG1_1HORA"
    | "REG2_2HORAS"
    | "REG3_3HORAS"
    | "REG4_4HORAS"
    | "REG6_6HORAS"
    | "REG8_8HORAS"
    | "REG12_12HORAS"
    | "REG24_DIARIO";
  modoEnv: "TEST" | "PROD";
  claveMercury: string;
}
