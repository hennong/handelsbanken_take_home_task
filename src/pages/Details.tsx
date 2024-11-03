import { Fragment } from "react";
import { Header, BaseTile } from "../components/common";
import { useWeatherDataStore } from "../store/dataStore";
import { useLocationStore } from "../store/locationStore";
import { useSunrise } from "../api";

function Details() {
  const weatherData = useWeatherDataStore((state) => state.weatherData);
  const location = useLocationStore((state) => state.location)!;

  const today = new Date();
  const todayAsISOString = today.toISOString().split("T")[0];

  const { data: sunriseData } = useSunrise(
    {
      lon: location?.geolocation.lon,
      lat: location?.geolocation.lat,
      date: todayAsISOString,
      //TODO: Add calculation for offset
      offset: "+01:00",
    },
    location?.name,
    location !== undefined
  );

  const sunrise = sunriseData?.data?.properties?.sunrise?.time;
  const sunset = sunriseData?.data?.properties?.sunset?.time;

  const getTime = (TimeWithDate: string | undefined) => {
    if (!TimeWithDate) return;

    const timeWithOffset = TimeWithDate.split("T")[1];
    const time = timeWithOffset.split("+")[0];

    return time;
  };

  const title = `Details ${location?.name ?? ""}`;

  return (
    <Fragment>
      <Header title={title} showReturnButton />
      {weatherData !== undefined ? (
        <Fragment>
          <BaseTile testId="temperature-tile">
            <div className="flex flex-col items-center">
              <span className="mb-4 text-xl">Temperature</span>
              <span className="text-lg">
                {weatherData.symbol_code.split("_")[0]}{" "}
              </span>
              <div className="text-2xl pt-2">
                {weatherData.air_temperature}°C
              </div>
              <div className="flex gap-4 text-lg">
                <span>H: {weatherData.air_temperature_max}°C</span>
                <span>L: {weatherData.air_temperature_min}°C</span>
              </div>
            </div>
          </BaseTile>
          <BaseTile
            className="flex flex-col col-span-2"
            testId="additional-information-tile"
          >
            <span className="mb-4 text-xl">Additional information</span>
            <div className="divide-y divide-solid divide-[#4b595e] gap-2 text-lg">
              <div className="flex justify-between">
                <span>Sunrise</span>
                <span>{getTime(sunrise)}</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset</span>
                <span>{getTime(sunset)}</span>
              </div>
              <div className="flex justify-between">
                <span>Wind speed</span>
                <span>{weatherData?.wind_speed}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Humidity</span>
                <span>{weatherData?.relative_humidity}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span>Ultraviolet index</span>
                <span>{weatherData?.ultraviolet_index_clear_sky}</span>
              </div>
            </div>
          </BaseTile>
        </Fragment>
      ) : (
        <div test-id="no-data-selected">No data selected</div>
      )}
    </Fragment>
  );
}

export default Details;
