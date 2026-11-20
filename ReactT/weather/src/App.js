import bg from "./assets/bg.jpg";
import "./App.css";
import Header from "./component/header";
import Temperature from "./component/temp";
import Hourly from "./component/hourly";
import Sun from "./component/sun";
import { useState } from "react"
import WeatherContext from "./component/weathercontext"

function App() {

  const [weatherData,setweatherData] = useState(null);

const[dayforecast , setforecast] = useState(null)


  return (
    <div
      className="weather-background"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <WeatherContext.Provider value = {{weatherData,setweatherData, dayforecast , setforecast}}>
      <Header />
      <Temperature weatherData = {weatherData} />
      <Hourly dayforecast = {dayforecast} />
      <Sun />

      </WeatherContext.Provider>
    </div>
  );
}

export default App;