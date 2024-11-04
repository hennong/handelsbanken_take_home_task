export interface IGeolocation {
  lon: number | string;
  lat: number | string;
}

export interface ILocation {
  name: string;
  geolocation: IGeolocation;
}
