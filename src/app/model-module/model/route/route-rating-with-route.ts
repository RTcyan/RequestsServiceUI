import { RouteRating } from "./route-rating";

export interface RouteRatingWithRoute extends RouteRating {
    routeId: number;
}