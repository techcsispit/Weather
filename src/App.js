import React, { useState } from "react";
import Search from "./components/Search"
import Tempdata from "./components/Tempdata";
import Footer from "./components/Footer";
import logo from "./images/weather-logo.png";

function App() {
  const [city, setCity] = useState("");

  function setCityInput(cityinput) {
    setCity(cityinput);
  }
  return (
    <>
      <div className="out-container">

        <div className="main-container" id="main-container">
          <div className="logo-container">
            <img src={logo} id="logo" alt="Icon"></img>
            <h2>WeatherWand</h2>
          </div>
          <Search sendCity={setCityInput}></Search>
          <Tempdata city={city}></Tempdata>
          <div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
