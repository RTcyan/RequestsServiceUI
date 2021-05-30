import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'app/model-module/model/route/route';
import { RoutePoint } from 'app/model-module/model/route/route-point';
import { MapComponent } from 'app/shared-module/components/map/map.component';

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.scss']
})
export class RouteViewComponent implements OnInit, AfterViewInit {
  public selectedRoute: Route;

  @ViewChild(MapComponent, {static: false})
  private map: MapComponent;

  public constructor(
    public route: ActivatedRoute,
  ) { }

  public ngOnInit() {
    this.route.data.subscribe((data) => {
      this.selectedRoute = data.data;
    })
  }

  public ngAfterViewInit() {
    this.selectedRoute.points.forEach((point) => {
      this.map.setMarker(point.latLng, point.name);
    })
    this.map.positionAtAllMarkers();
  }

  public omMapResetClick(): void {
    this.map.createdMarkers.forEach((marker) => {
      marker.closePopup();
    })
    this.map.positionAtAllMarkers();
  }

  public onViewClick(point: RoutePoint): void {
    const selectedMarker = this.map.createdMarkers.find((marker) => {
      const latlng = marker.getLatLng();
      return point.latLng.lat === latlng.lat && point.latLng.lng === latlng.lng;
    });
    this.map.positionAtMarker(selectedMarker);
    selectedMarker.openPopup();
  }

  public getAvarageRating(route: Route): number {
    return Math.round((route.ratings.reduce( ( p, c ) => p + c.mark, 0 ) / route.ratings.length) * 100) / 100;
   }

  public onHideClick(): void {
    //TODO 
  }

}
