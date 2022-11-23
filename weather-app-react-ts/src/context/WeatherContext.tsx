import axios from "axios";
import { createContext, SetStateAction, useEffect, useState } from "react";
import cities from "../cities_of_turkey.json";
//https://api.weatherbit.io/v2.0/forecast/daily?/&days=7&lat=38.123&lon=-78.543&key=67c2dbf8ee214aaab7980865a6c4fb32
type WeatherContextType = {
  city: any;
  setCity: React.Dispatch<React.SetStateAction<{}>>;
  weather: any;
};

const WeatherContext = createContext<WeatherContextType>({
  weather: {},
  city: {},
  setCity: function (value: SetStateAction<{}>): void {
    throw new Error("Function not implemented.");
  },
});

export const WeatherProvider = ({ children }: { children: any }) => {
  //set with usePosition
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState();
  const values = { city, setCity, weather };
  const cityData = cities.filter((prop) => prop.name === city);

  const getWeatherData = () => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?/&days=7&city=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((res: any) => {
      setWeather(res.data);
    });
  };

  useEffect(() => {
    getWeatherData();
    console.log(city, cityData, weather);
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
