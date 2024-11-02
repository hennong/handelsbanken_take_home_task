export interface IGeolocation {
  lon: number;
  lat: number;
}

export interface ILocation {
  name: string;
  geolocation: IGeolocation;
}
