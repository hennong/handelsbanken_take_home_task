import { useWeatherData } from "../../../api";
import { ILocation } from "../../../types/location";
import BaseTile from "./BaseTile";

interface IDefaultLocationTile {
  location: ILocation;
}

function DefaultLocationTile({ location }: IDefaultLocationTile) {
  const { data: weatherData } = useWeatherData(location);
  const currentData =
    weatherData?.data.properties.timeseries[0].data.instant.details;

  return (
    <BaseTile className="flex justify-between hover:bg-[#e3f7fabb]">
      <h3 className="text-2xl">{location.name}</h3>
      <span className="text-xl text-[#b21002]">
        {currentData?.air_temperature}
      </span>
    </BaseTile>
  );
}

export default DefaultLocationTile;
