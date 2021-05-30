import { Component, Input, OnInit } from '@angular/core';
import { LatLng } from 'app/model-module/model/map/point';
import * as L from 'leaflet'
import { BehaviorSubject } from 'rxjs';

export interface LMarker {
  bindPopup: (message: string) => any;
  remove: () => void;
  getLatLng: () => LatLng;
  openPopup: () => void;
  closePopup: () => void;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;

  private isReadySubject = new BehaviorSubject<boolean>(false);

  @Input()
  public height: number;

  @Input()
  public width: number;

  public createdMarkers: LMarker[] = [];

  private icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: './assets/marker-icon.png',
      shadowUrl: './assets/marker-shadow.png'
   })
};

  private token = 'pk.eyJ1IjoicnRjeWFuIiwiYSI6ImNrcGIycHVkMDEwOWQybnA3b3p0cGwzOG0ifQ.9mYayXO28Ev2dabO8aJ-fA';

  public constructor() { }

  public ngOnInit() {
    this.map = L.map('map');

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 15,
      minZoom: 1,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: this.token,
    }).addTo(this.map);

    this.map.whenReady(() => {
      this.isReadySubject.next(true);
    }) 
  }

  public setMarker(point: LatLng, name?: string): LMarker {
    const marker: LMarker = L.marker([point.lat, point.lng], this.icon).addTo(this.map);
    if (name) {
      marker.bindPopup(name);
    }
    
    this.createdMarkers.push(marker);
    return marker;
  }

  public positionAtLastMarker(scale = 12): void {
    const marker = this.createdMarkers[this.createdMarkers.length - 1]
    this.positionAtMarker(marker, scale);
  }

  public positionAtAllMarkers(): void {
    var group = new L.featureGroup(this.createdMarkers);
    this.map.fitBounds(group.getBounds().pad(0.2));
  }

  public positionAtMarker(marker: LMarker, scale = 12): void {
    const point = marker.getLatLng();
    this.map.setView([point.lat, point.lng], scale);
  }

  public clearMap(): void {
    this.createdMarkers.forEach((marker) => {
      marker.remove();
    })
    this.createdMarkers = [];
  }
}
