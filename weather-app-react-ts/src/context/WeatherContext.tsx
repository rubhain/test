import axios from "axios";
import { createContext, SetStateAction, useEffect, useState } from "react";
import cities from "../cities_of_turkey.json";
import { usePosition } from "use-position";

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
  const watch = true;
  const { latitude, longitude } = usePosition(watch);
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState();
  const values = { city, setCity, weather };
  const cityData = cities.filter((prop) => prop.name === city);

  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?/&days=8&lat=${latitude}&lon=${longitude}&key=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((res: any) => {
      setWeather(res.data);
    });
  }, []);

  const getWeatherData = () => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?/&days=8&city=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((res: any) => {
      setWeather(res.data);
    });
  };

  useEffect(() => {
    console.log(city, cityData);
    getWeatherData();
  }, [city]);

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
function getCurrentCity(latitude: number, longitude: number) {
  throw new Error("Function not implemented.");
}
