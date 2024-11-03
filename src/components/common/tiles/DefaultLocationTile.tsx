import Skeleton from "react-loading-skeleton";
import { useWeatherData } from "../../../api";
import { ILocation } from "../../../types/location";
import BaseTile from "./BaseTile";
import { useNavigate } from "react-router-dom";

interface IDefaultLocationTile {
  location: ILocation;
}

function DefaultLocationTile({ location }: IDefaultLocationTile) {
  const navigate = useNavigate();

  const { data: weatherData } = useWeatherData(location);
  const currentData =
    weatherData?.data.properties.timeseries[0].data.instant.details;

  const goToDetails = () => {
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
          `${currentData?.air_temperature}°C`
        ) : (
          <Skeleton width={150} height={24} />
        )}
      </span>
    </BaseTile>
  );
}

export default DefaultLocationTile;
