import { ILocation } from "../../auxiliares";

export interface IGateway {
  _id: string;
  gatewayEui: string;
  location: ILocation;
}
