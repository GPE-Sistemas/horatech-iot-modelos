type LocationType =
  | "Point"
  | "Polygon"
  | "LineString"
  | "MultiPoint"
  | "MultiPolygon"
  | "MultiLineString";

type PointCoordinates = [number, number];
type PolygonCoordinates = PointCoordinates[];
type LineStringCoordinates = PointCoordinates[];
type MultiPointCoordinates = PointCoordinates[];
type MultiPolygonCoordinates = PolygonCoordinates[];
type MultiLineStringCoordinates = LineStringCoordinates[];

type LocationCoordinates =
  | PointCoordinates
  | PolygonCoordinates
  | LineStringCoordinates
  | MultiPointCoordinates
  | MultiPolygonCoordinates
  | MultiLineStringCoordinates;

export interface ILocation {
  type?: LocationType;
  coordinates?: LocationCoordinates;
  //
  center?: PointCoordinates;
  area?: number;
  //
  codigoPostal?: string;
  localidad?: string;
  partido?: string;
  provincia?: string;
  pais?: string;
  // Solo direcciones
  direccion?: string;
  calle?: string;
  numero?: string;
  piso?: string;
  departamento?: string;
}
