import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngLiteral, Map, Polyline } from 'leaflet';
import { pairwise, switchMap, tap } from 'rxjs/operators';
import { GeoLocationService } from 'src/app/browser/geo-location.service';

@Component({
  selector: 'wlk-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapElementRef: ElementRef<any>;
  map: Map;

  constructor(
    private readonly geoLocationService: GeoLocationService
  ) { }

  ngOnInit(): void {
    this.geoLocationService.getCurrentPosition()
      .pipe(
        tap((position: GeolocationPosition) => {
          this.map = new Map(this.mapElementRef.nativeElement, {
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        }),
        switchMap(_ => this.geoLocationService.watchPosition()),
        pairwise(),
      )
      .subscribe(([prevPosition, currentPosition]: [GeolocationPosition, GeolocationPosition]) => {
        const prevLatLng: LatLngLiteral = {
          lat: prevPosition.coords.latitude,
          lng: prevPosition.coords.longitude,
        }
        const currentLatLng: LatLngLiteral = {
          lat: currentPosition.coords.latitude,
          lng: currentPosition.coords.longitude,
        }
        const line = new Polyline([prevLatLng, currentLatLng], {})

        this.map.panTo(currentLatLng);
      })
  }

}
