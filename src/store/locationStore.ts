import { create } from "zustand";
import { ILocation } from "../types/location";

type TLocationState = {
  detailsLocation: ILocation | undefined;
  customLocation: ILocation | undefined;
  useCustomLocation: boolean;
};

type TAction = {
  setDetailsLocation: (
    detailsLocation: TLocationState["detailsLocation"]
  ) => void;
  setCustomLocation: (customLocation: TLocationState["customLocation"]) => void;
  setUseCustomLocation: (
    useCustomLocation: TLocationState["useCustomLocation"]
  ) => void;
};

export const useLocationStore = create<TLocationState & TAction>((set) => ({
  detailsLocation: undefined,
  useCustomLocation: true,
  customLocation: undefined,
  setDetailsLocation: (detailsLocation) => set(() => ({ detailsLocation })),
  setCustomLocation: (customLocation) => set(() => ({ customLocation })),
  setUseCustomLocation: (useCustomLocation) =>
    set(() => ({ useCustomLocation })),
}));
