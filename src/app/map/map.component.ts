import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LatLngLiteral, Map, Polyline } from 'leaflet';
import { Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { GeoLocationService } from 'src/app/browser/geo-location.service';

@Component({
  selector: 'wlk-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map') mapElementRef: ElementRef<any>;
  map: Map;
  line: Polyline;
  points: LatLngLiteral[];
  trackSubscription: Subscription;

  tracking = false;

  constructor(
    private readonly geoLocationService: GeoLocationService
  ) { }

  ngOnInit(): void {
    this.points = [];
    this.line = new Polyline([], {
      fill: true,
      fillOpacity: 0.8,
      color: 'red',
      smoothFactor: 3

    });
    this.map = new Map(this.mapElementRef.nativeElement, {
      zoom: 19
    });

    this.geoLocationService.getCurrentPosition()
      .subscribe((position: GeolocationPosition) => {
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
        map((pos: GeolocationPosition) => ({lat: pos.coords.latitude,lng: pos.coords.longitude}))
      ).subscribe((currentPosition: LatLngLiteral) => {
          this.map.panTo(currentPosition);
          this.points.push(currentPosition);
          this.line.addLatLng(currentPosition);
      });
  }

  public stopTracking(): void {
    this.trackSubscription?.unsubscribe();
    this.tracking = false;
  }

  public ngOnDestroy(): void {
    this.stopTracking();
  }
}
