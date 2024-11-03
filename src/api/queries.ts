import { useQuery } from "@tanstack/react-query";
import { IGeolocation, ILocation } from "../types/location";
import { api } from "../utils/api";
import {
  ISunriseParams,
  ISunriseResponse,
  IWeatherDataResponse,
} from "../types/queries";

const getWeatherData = async (params: IGeolocation) => {
  const response = await api.get<IWeatherDataResponse>(
    "/locationforecast/2.0/complete",
    {
      params,
    }
  );
  return response;
};

export const useWeatherData = (params: ILocation, enabled: boolean = true) => {
  return useQuery({
    queryKey: [params?.name],
    queryFn: () => getWeatherData(params?.geolocation),
    enabled,
  });
};

const getSunrise = async (params: ISunriseParams) => {
  const response = await api.get<ISunriseResponse>("/sunrise/3.0/sun", {
    params,
  });
  return response;
};

export const useSunrise = (
  params: ISunriseParams,
  name: string,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: [name],
    queryFn: () => getSunrise(params),
    enabled,
  });
};
