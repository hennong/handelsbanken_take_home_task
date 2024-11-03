import { IWeatherDataResponse } from "../types/queries";

export const getCurrentData = (
  weatherDataResponse: IWeatherDataResponse | undefined
) => {
  if (!weatherDataResponse?.properties?.timeseries) {
    return;
  }

  const currentWeathertData =
    weatherDataResponse?.properties?.timeseries[0]?.data;
  return {
    ...currentWeathertData?.instant?.details,
    ...currentWeathertData?.next_6_hours?.details,
    ...currentWeathertData?.next_1_hours.summary,
  };
};
