import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'app/model-module/model/route/route';
import { RoutePoint } from 'app/model-module/model/route/route-point';
import { MapComponent } from 'app/shared-module/components/map/map.component';

interface RouteUpdateDialogData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.scss']
})
export class RouteViewComponent implements OnInit, AfterViewInit {
  public selectedRoute: Route;

  @ViewChild(MapComponent, {static: false})
  private map: MapComponent;

  @ViewChild('routeUpdateDialogContent', {static: false})
  private dialogContent: TemplateRef<unknown>;

  public form = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  public dialogRef: MatDialogRef<unknown>;

  public constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private fb: FormBuilder,
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
    this.selectedRoute.isHide = !this.selectedRoute.isHide;
  }

  public onRouteUpdateClick(): void {
    this.form.controls['name'].setValue(this.selectedRoute.name);
    this.form.controls['description'].setValue(this.selectedRoute.description);
    this.dialogRef = this.dialog.open<unknown, RouteUpdateDialogData>(this.dialogContent, {
      height: '200px',
      width: '300px',
    });
    this.dialogRef.afterClosed().subscribe((data: RouteUpdateDialogData) => {
      if (data) {
        this.selectedRoute.description = data.description;
        this.selectedRoute.name = data.name;
      }
    });
  }

  public onPointUpdateClick(point: RoutePoint): void {
    this.form.controls['name'].setValue(point.name);
    this.form.controls['description'].setValue(point.description);
    this.dialogRef = this.dialog.open<unknown, RouteUpdateDialogData>(this.dialogContent, {
      height: '200px',
      width: '300px',
    });
    this.dialogRef.afterClosed().subscribe((data: RouteUpdateDialogData) => {
      if (data) {
        point.description = data.description;
        point.name = data.name;
      }
    });
  }

  public onAcceptClick(): void {
    this.dialogRef.close(this.form.value);
  }  

  public onCloseClick(): void {
    this.dialogRef.close();
  }    
}
