import { Position } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LatLngLiteral, Map, Polyline, TileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoLocationService } from 'src/app/browser/geo-location.service';

@Component({
  selector: 'wlk-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') mapElementRef: ElementRef<any>;
  map: Map;
  line: Polyline;
  points: LatLngLiteral[];
  trackSubscription: Subscription;

  tracking = false;

  constructor(
    private readonly geoLocationService: GeoLocationService
  ) { }

  ngAfterViewInit(): void {
    this.points = [];
    const tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    this.line = new Polyline([], {
      fill: true,
      fillOpacity: 0.8,
      color: 'red',
      smoothFactor: 3

    });
    this.map = new Map(this.mapElementRef.nativeElement, {
      zoom: 17
    });

    tileLayer.addTo(this.map);

    this.geoLocationService.getCurrentPosition()
      .subscribe(position => {
        this.map.panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      });
  }

  public trackPosition(): void {
    this.tracking = true;
    this.trackSubscription = this.geoLocationService.watchPosition()
      .pipe(
        map(pos => ({lat: pos.coords.latitude,lng: pos.coords.longitude}))
      ).subscribe((currentPosition: LatLngLiteral) => {
          this.map.panTo(currentPosition);
          this.points.push(currentPosition);
          this.line.addLatLng(currentPosition);
      });
  }

  public stopTracking(): LatLngLiteral[] {
    this.trackSubscription?.unsubscribe();
    this.tracking = false;
    return this.points;
  }

  public ngOnDestroy(): void {
    this.stopTracking();
  }
}
