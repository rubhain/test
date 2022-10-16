import axios from "axios";
import React, { useEffect, useState } from "react";

function List() {
  const [weather, setWeather] = useState();
  const lat = 38.734802;
  const lon = 35.467987;
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
    )
      .then((res: any) => setWeather(res.data.list))
      .catch((e: any) => console.log(e));
  }, []);
  console.log(weather);
  return <div>List</div>;
}

export default List;
