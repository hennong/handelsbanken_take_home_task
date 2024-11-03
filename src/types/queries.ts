interface ITimeseries {
  time: string;
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        cloud_area_fraction_high: number;
        cloud_area_fraction_low: number;
        cloud_area_fraction_medium: number;
        dew_point_temperature: number;
        fog_area_fraction: number;
        relative_humidity: number;
        ultraviolet_index_clear_sky: number;
        wind_from_direction: number;
        wind_speed: number;
      };
    };
    next_1_hours: {
      summary: { symbol_code: string };
    };
    next_6_hours: {
      details: {
        air_temperature_max: number;
        air_temperature_min: number;
        precipitation_amount: number;
      };
    };
  };
}

export interface IWeatherDataResponse {
  properties: {
    timeseries: ITimeseries[];
  };
}

export interface ISunriseParams {
  lon: number;
  lat: number;
  date: string;
  offset: string;
}

export interface ISunriseResponse {
  properties: {
    sunrise: {
      time: string;
    };
    sunset: {
      time: string;
    };
  };
}
