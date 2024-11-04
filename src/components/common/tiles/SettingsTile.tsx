import { Fragment, useEffect, useState } from "react";
import BaseTile from "./BaseTile";
import { useWeatherDataStore } from "../../../store/dataStore";
import { Checkbox } from "../../ui/checkboxes";
import { useLocationStore } from "../../../store/locationStore";
import { Button } from "../../ui/buttons";
import { TextInput } from "../../ui/textInput";

function SettingsTile() {
  const { useFahrenheit, setUseFahrenheit } = useWeatherDataStore(
    (state) => state
  );

  const { useCustomLocation, setUseCustomLocation, setCustomLocation } =
    useLocationStore((state) => state);

  const [lat, setLat] = useState<string>("");
  const [lon, setLon] = useState<string>("");

  useEffect(() => {
    const storeUseFahrenheitStore =
      localStorage.getItem("useFahrenheit") === "true";
    setUseFahrenheit(storeUseFahrenheitStore);

    const storeUseCustomLocation =
      localStorage.getItem("useCustomLocation") === "true";
    setUseCustomLocation(storeUseCustomLocation);

    const storeLocationString = localStorage.getItem("lastLocation");

    if (storeLocationString) {
      const lastLocation = JSON.parse(storeLocationString);
      setLat(lastLocation.geolocation.lat);
      setLon(lastLocation.geolocation.lon);
    }
  }, [setUseCustomLocation, setUseFahrenheit]);

  const handleUseFahrenheitToggle = () => {
    setUseFahrenheit(!useFahrenheit);
    localStorage.setItem("useFahrenheit", (!useFahrenheit).toString());
  };

  const isNumber = (value: string) => {
    return !isNaN(parseFloat(value));
  };

  const invalidInput =
    !isNumber(lon) ||
    Number(lon) > 180 ||
    -180 > Number(lon) ||
    !isNumber(lat) ||
    Number(lat) > 90 ||
    -90 > Number(lat);

  const handleSearchClick = () => {
    const newCustomLocation = {
      name: "Custom location",
      geolocation: {
        lat: Number(lat).toFixed(2),
        lon: Number(lon).toFixed(2),
      },
    };

    localStorage.setItem("lastLocation", JSON.stringify(newCustomLocation));
    setCustomLocation(newCustomLocation);
  };

  const handleUseCustomLocationToggle = () => {
    setUseCustomLocation(!useCustomLocation);

    localStorage.setItem("useCustomLocation", (!useCustomLocation).toString());
  };

  return (
    <BaseTile
      className="hover:bg-[#e3f7fabb] gap-2" //
      testId="settings-tile"
    >
      <h3 className="mb-2 text-2xl">Settings</h3>
      <div className="flex flex-col divide-y divide-solid divide-[#4b595e] gap-2">
        <div className="flex justify-between">
          <span>Use Fahrenheit</span>
          <Checkbox
            checked={useFahrenheit}
            onToggle={handleUseFahrenheitToggle}
          />
        </div>
        <div className="flex flex-col pt-2 gap-1">
          <div className="flex justify-between">
            <span className="pb-1">Use custom location</span>
            <Checkbox
              checked={useCustomLocation}
              onToggle={handleUseCustomLocationToggle}
            />
          </div>
          {useCustomLocation && (
            <Fragment>
              <div className="flex justify-between">
                <span>Lat:</span>
                <TextInput
                  className="w-30 text-right"
                  value={lat}
                  onChange={(event) => {
                    setLat(event.target.value);
                  }}
                  placeholder="00.00"
                />
              </div>
              <div className="flex justify-between">
                <span>Lon:</span>
                <TextInput
                  className="w-30 text-right"
                  value={lon}
                  onChange={(event) => {
                    setLon(event.target.value);
                  }}
                  placeholder="00.00"
                />
              </div>
              <div className="flex justify-end gap-2">
                {invalidInput && //
                  lon.length !== 0 &&
                  lat.length !== 0 && (
                    <span className="text-[#b21002] text-sm">
                      Invalid input.
                    </span>
                  )}
                <Button
                  className="w-20 h-[30px]"
                  onClick={handleSearchClick}
                  disabled={invalidInput}
                >
                  Search
                </Button>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </BaseTile>
  );
}

export default SettingsTile;
