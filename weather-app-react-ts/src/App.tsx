import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CityDropdown from "./components/CityDropdown";
import List from "./components/List";

import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <CityDropdown />
        <List />
      </WeatherProvider>
    </div>
  );
}

export default App;
