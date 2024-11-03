import { useEffect, useState } from "react";
import { useWeatherData } from "../../../api";
import BaseTile from "./BaseTile";
import { ILocation } from "../../../types/location";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { useWeatherDataStore } from "../../../store/dataStore";
import { useLocationStore } from "../../../store/locationStore";
import { getCurrentData } from "../../../utils/functions";

function MyLocationTile() {
  const navigate = useNavigate();
  const setWeatherDataStore = useWeatherDataStore(
    (state) => state.setWeatherData
  );
  const setLocationStore = useLocationStore((state) => state.setLocation);

  const [userLocation, setUserLocation] = useState<ILocation | undefined>(
    undefined
  );
  const [errorCode, setErrorCode] = useState<number | undefined>(undefined);

  const { data: weathertData } = useWeatherData(
    userLocation!,
    userLocation !== undefined
  );

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
          setErrorCode(0);
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

  const getLocationInfo = (errorCode: number | undefined) => {
    switch (errorCode) {
      case 1:
        return "Location access was denied.";
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

  const currentData = getCurrentData(weathertData?.data);

  const goToDetails = () => {
    if (!errorCode && currentData) {
      setLocationStore(userLocation);
      setWeatherDataStore(currentData);
      navigate({
        pathname: "/details",
      });
    }
  };

  return (
    <BaseTile //
      className="hover:bg-[#e3f7fabb]"
      testId="my-location-tile"
      onClick={goToDetails}
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
