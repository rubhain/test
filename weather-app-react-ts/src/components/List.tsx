import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

function List(props: any) {
  const { weather } = useContext(WeatherContext);

  return (
    <div>
      {" "}
      {weather.city_name}
      <ul>
        {weather.data.map((item: any, i: any) => (
          <li key={i} className="weatherBox">
            <div>{item.datetime}</div>
            <img
              src={`../../icons/${item.weather.icon}.png`}
              alt={`${item.weather.description}`}
            />
            <div>
              <div>temp: {item.temp}°</div>

              <div>
                <span> max: {item.max_temp}°</span>
                <span> min:{item.min_temp}°</span>
              </div>
            </div>
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default List;
