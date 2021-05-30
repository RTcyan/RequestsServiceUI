import { User } from "../user/user";

export interface RouteRating {
  user: User;
  mark: number;
  comment: string;
}