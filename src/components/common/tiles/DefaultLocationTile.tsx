import Skeleton from "react-loading-skeleton";
import { useWeatherData } from "../../../api";
import { ILocation } from "../../../types/location";
import BaseTile from "./BaseTile";
import { useNavigate } from "react-router-dom";
import { useWeatherDataStore } from "../../../store/dataStore";
import { useLocationStore } from "../../../store/locationStore";
import { getCurrentData, getTemperature } from "../../../utils/functions";

interface IDefaultLocationTile {
  location: ILocation;
}

function DefaultLocationTile({ location }: IDefaultLocationTile) {
  const navigate = useNavigate();
  const { useFahrenheit, setWeatherData } = useWeatherDataStore(
    (state) => state
  );
  const setLocationStore = useLocationStore((state) => state.setCustomLocation);

  const { data: weatherData } = useWeatherData(location);
  const currentWeathertData = weatherData;

  const currentData = getCurrentData(currentWeathertData?.data);

  const goToDetails = () => {
    if (!currentData) return;

    setWeatherData(currentData);
    setLocationStore(location);
    navigate({
      pathname: "/details",
    });
  };

  return (
    <BaseTile
      testId="default-location-tile"
      className="flex justify-between hover:bg-[#e3f7fabb] h-[50px] text-2xl"
      onClick={goToDetails}
    >
      <h3>{location.name}</h3>
      <span className="text-[#b21002]">
        {currentData ? (
          getTemperature(currentData.air_temperature, useFahrenheit)
        ) : (
          <Skeleton width={150} height={24} />
        )}
      </span>
    </BaseTile>
  );
}

export default DefaultLocationTile;
