import { useEffect, useState } from "react";
import { useWeatherData } from "../../../api";
import BaseTile from "./BaseTile";
import { ILocation } from "../../../types/location";
import Skeleton from "react-loading-skeleton";

function MyLocationTile() {
  const [userLocation, setUserLocation] = useState<ILocation | undefined>(
    undefined
  );
  const [errorCode, setErrorCode] = useState<number>(0);

  const { data: weatherData } = useWeatherData(
    userLocation!,
    userLocation !== undefined
  );

  const currentData =
    weatherData?.data.properties.timeseries[0].data.instant.details;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          setUserLocation({
            name: "My location",
            geolocation: {
              lat,
              lon,
            },
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
          setErrorCode(error.code);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setErrorCode(4);
    }
  }, []);

  const getLocationInfo = (errorCode: number) => {
    switch (errorCode) {
      case 1:
        return "Location access denied.";
      case 2:
        return "Postion unavailable.";
      case 3:
        return "Location request timed out.";
      case 4:
        return "Geolocation is not supported.";
      default:
        return null;
    }
  };

  return (
    <BaseTile //
      className="hover:bg-[#e3f7fabb]"
      testId="my-location-tile"
    >
      <div className="flex justify-between w-full items-center text-2xl">
        <h3 className="">My location</h3>
        <span className="text-[#b21002]">
          {currentData ? (
            `${currentData?.air_temperature}°C`
          ) : (
            <Skeleton width={100} height={24} />
          )}
        </span>
      </div>
      {errorCode != 0 && (
        <span
          className="text text-[#b21002]" //
        >
          {getLocationInfo(errorCode)}
        </span>
      )}
    </BaseTile>
  );
}

export default MyLocationTile;
