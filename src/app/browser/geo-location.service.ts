import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {
  private supportGeoLocation: boolean;

  constructor() {
    this.supportGeoLocation = 'geolocation' in navigator;
  }

  public getCurrentPosition(): Observable<GeolocationPosition> {
    return new Observable((subscriber: Subscriber<GeolocationPosition>) => {
      if (this.supportGeoLocation) {
        navigator.geolocation.getCurrentPosition((location: GeolocationPosition) => {
          subscriber.next(location);
          subscriber.complete();
        }, (error: any) => {
          subscriber.error(error)
        })
      } else {
        subscriber.error("geolocation not supported");
      }
    })
  }

  public watchPosition(): Observable<GeolocationPosition> {
    return new Observable((subscriber: Subscriber<GeolocationPosition>) => {
      let watchId: number;
      if(this.supportGeoLocation) {
        watchId = navigator.geolocation.watchPosition((location: GeolocationPosition) => {
          subscriber.next(location);
        })
      } else {
        subscriber.error("geolocation not supported");
      }

      return () => {
        if(!!watchId) {
          navigator.geolocation.clearWatch(watchId)
        }
      }
    });
  }
}
