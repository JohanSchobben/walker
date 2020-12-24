export type GeolocationPosition = {
   coords: GeoLocationCoordinates;
   timestamp: DOMTimeStamp;
}

type GeoLocationCoordinates = {
  latitude: number;
  longitude: number;
  altitude: number;
  accuracy: number;
  altitudeAccuracy: number;
  heading: number;
  speed: number;
}
