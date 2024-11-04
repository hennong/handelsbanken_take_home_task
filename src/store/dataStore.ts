import { create } from "zustand";
import { IWeatherData } from "../types/data";

type TWeatherDataState = {
  weatherData: IWeatherData | undefined;
  useFahrenheit: boolean;
};

type TAction = {
  setWeatherData: (weatherData: TWeatherDataState["weatherData"]) => void;
  setUseFahrenheit: (useFahrenheit: TWeatherDataState["useFahrenheit"]) => void;
};

export const useWeatherDataStore = create<TWeatherDataState & TAction>(
  (set) => ({
    weatherData: undefined,
    useFahrenheit: false,
    setWeatherData: (weatherData) => set(() => ({ weatherData })),
    setUseFahrenheit: (useFahrenheit) => set(() => ({ useFahrenheit })),
  })
);
