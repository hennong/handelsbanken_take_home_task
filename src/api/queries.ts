import { useQuery } from "@tanstack/react-query";
import { IGeolocation, ILocation } from "../types/location";
import { api } from "../utils/api";
import { IWeatherDataResponse } from "../types/queries";

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
