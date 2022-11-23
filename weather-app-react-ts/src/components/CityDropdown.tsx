import axios from "axios";
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
      <select onChange={handleChange}>
        {cities.map((props) => (
          <option key={props.id} value={props.name}>
            {props.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CityDropdown;
