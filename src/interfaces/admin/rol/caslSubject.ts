// Admin

export type ICaslSubjectAdmin =
  | "all"
  | "Alerta"
  | "Apikey"
  | "Auditoria"
  | "Cliente"
  | "Comando"
  | "ConfigDispositivo"
  | "Dispositivo"
  | "Gateway"
  | "Integracion"
  | "LoraServer"
  | "LoteDispositivo"
  | "MensajeLora"
  | "Notificacion"
  | "Reenvio"
  | "Reporte"
  | "Perfil"
  | "Permiso"
  | "Rol"
  | "RolUsuario"
  | "TipoDispositivo"
  | "Usuario";

export const caslSubjectsAdmin: ICaslSubjectAdmin[] = [
  "all",
  "Alerta",
  "Apikey",
  "Auditoria",
  "Cliente",
  "Comando",
  "ConfigDispositivo",
  "Dispositivo",
  "Gateway",
  "Integracion",
  "LoraServer",
  "LoteDispositivo",
  "MensajeLora",
  "Notificacion",
  "Reenvio",
  "Reporte",
  "Perfil",
  "Permiso",
  "Rol",
  "RolUsuario",
  "TipoDispositivo",
  "Usuario",
];

// Gas

export type ICaslSubjectGas =
  | "all"
  | "AplicacionCromatografia"
  | "CentroOperativo"
  | "Correctora"
  | "Cromatografia"
  | "Cuenca"
  | "Grupo"
  | "MedidorResidencialGas"
  | "MedidorResidencialAgua"
  | "PuntoMedicion"
  | "UnidadNegocio";

export const caslSubjectsGas: ICaslSubjectGas[] = [
  "all",
  "AplicacionCromatografia",
  "CentroOperativo",
  "Correctora",
  "Cromatografia",
  "Cuenca",
  "Grupo",
  "MedidorResidencialGas",
  "MedidorResidencialAgua",
  "PuntoMedicion",
  "UnidadNegocio",
];

// Agro

export type ICaslSubjectAgro =
  | "all"
  | "Animal"
  | "BombeoArrancador"
  | "BombeoCanal"
  | "Canal"
  | "Cisterna"
  | "Comedero"
  | "Establecimiento"
  | "Lamina"
  | "Lote"
  | "Silobolsa"
  | "Zona";

export const caslSubjectsAgro: ICaslSubjectAgro[] = [
  "all",
  "Animal",
  "BombeoArrancador",
  "BombeoCanal",
  "Canal",
  "Cisterna",
  "Comedero",
  "Establecimiento",
  "Lamina",
  "Lote",
  "Silobolsa",
  "Zona",
];

//

export type ICaslSubject =
  | ICaslSubjectAdmin
  | ICaslSubjectGas
  | ICaslSubjectAgro;
