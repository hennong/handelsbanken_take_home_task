import { useEffect } from "react";
import BaseTile from "./BaseTile";
import { useWeatherDataStore } from "../../../store/dataStore";
import { Checkbox } from "../../ui/checkboxes";

function SettingsTile() {
  const { useFahrenheit, setUseFahrenheit } = useWeatherDataStore(
    (state) => state
  );

  useEffect(() => {
    const storeUseFahrenheitStore =
      localStorage.getItem("useFahrenheit") === "true";

    setUseFahrenheit(storeUseFahrenheitStore);
  }, [setUseFahrenheit]);

  const handleUseFahrenheitToggle = () => {
    setUseFahrenheit(!useFahrenheit);
    localStorage.setItem("useFahrenheit", (!useFahrenheit).toString());
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
      </div>
    </BaseTile>
  );
}

export default SettingsTile;
