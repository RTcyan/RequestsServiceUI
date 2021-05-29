import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map;

  constructor() { }

  ngOnInit() {
    this.map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    }).setView([51.505, -0.09], 13);
  }
}
