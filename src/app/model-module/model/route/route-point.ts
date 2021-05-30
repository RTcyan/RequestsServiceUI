import { LatLng } from "../map/point";

export interface RoutePoint {
  id: number;
  name: string;
  description: string;
  path_to_img: string;
  latLng: LatLng;
}