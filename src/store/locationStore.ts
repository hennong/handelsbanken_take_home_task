import { create } from "zustand";
import { ILocation } from "../types/location";

type TLocationState = {
  location: ILocation | undefined;
};

type TAction = {
  setLocation: (location: TLocationState["location"]) => void;
};

export const useLocationStore = create<TLocationState & TAction>((set) => ({
  location: undefined,
  setLocation: (location) => set(() => ({ location })),
}));
