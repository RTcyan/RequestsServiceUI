import { User } from "../user/user";
import { RoutePoint } from "./route-point";
import { RouteRating } from "./route-rating";

export interface Route {
  id: number;
  name: string;
  description: string;
  path_to_img: string;
  creator: User;
  points: RoutePoint[];
  ratings: RouteRating[];
  isHide: boolean;
}