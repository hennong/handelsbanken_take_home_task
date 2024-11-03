import { Fragment } from "react";
import { Header, BaseTile } from "../components/common";
import { useWeatherDataStore } from "../store/dataStore";
import { useLocationStore } from "../store/locationStore";

function Details() {
  const weatherData = useWeatherDataStore((state) => state.weatherData);
  const location = useLocationStore((state) => state.location);

  const title = `Details ${location?.name ?? ""}`;
  return (
    <Fragment>
      <Header title={title} showReturnButton />
      {weatherData !== undefined ? (
        <Fragment>
          <BaseTile testId="temperature-tile">
            <div className="flex flex-col items-center">
              <span className="mb-4 text-xl">Temperature</span>
              <span className="text-lg">Sunny</span>
              <div className="text-2xl">{weatherData.air_temperature}</div>
              <div className="flex gap-4 text-lg">
                <span>H: 10C</span>
                <span>L: 10C</span>
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
                <span>8:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunset</span>
                <span>21:00</span>
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
