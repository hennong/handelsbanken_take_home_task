import { IWeatherData } from "./data";

interface ITimeseries {
  time: string;
  data: {
    instant: {
      details: IWeatherData;
    };
  };
}

export interface IWeatherDataResponse {
  properties: {
    timeseries: ITimeseries[];
  };
}
