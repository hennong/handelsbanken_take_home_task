import { create } from "zustand";
import { IWeatherData } from "../types/data";

type TWeatherDataState = {
  weatherData: IWeatherData | undefined;
};

type TAction = {
  setWeatherData: (weatherData: TWeatherDataState["weatherData"]) => void;
};

export const useWeatherDataStore = create<TWeatherDataState & TAction>(
  (set) => ({
    weatherData: undefined,
    setWeatherData: (weatherData) => set(() => ({ weatherData })),
  })
);
