import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import cities from "../cities_of_turkey.json";

function CityDropdown(props: any) {
  const { city, setCity, weather } = useContext(WeatherContext);
  const handleChange = (e: any) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <div className="dropdown">
        <select onChange={handleChange} className="selectStyle">
          {cities.map((props) => (
            <option key={props.id} value={props.name} defaultValue={city}>
              {props.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CityDropdown;
