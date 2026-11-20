import { Thermometer, Droplets, Wind, Gauge } from "lucide-react";
import { useContext } from "react"
import WeatherContext from "./weathercontext"


function Humid() {

  const { weatherData  } = useContext(WeatherContext)
  return (
<div className="grid grid-cols-2 gap-4 mt-6 lg:mt-0  lg:mr-32">

      <div className="bg-purple-900/40 rounded-3xl border border-white/40 w-full lg:w-52 px-4 py-4">
      
        <div className="flex items-center gap-3">
          <Thermometer size={30} color="white" />
          <p className="text-white">Feels Like</p>
        </div>
        <h3 className="text-center font-bold text-lg text-white mt-2">{weatherData?.main?.feels_like != null ? (weatherData.main.feels_like - 283.25).toFixed(1) + "°C" : ""}</h3>
      </div>

      <div className="bg-purple-900/40 rounded-3xl border border-white/40 w-full lg:w-52 px-4 py-4">
        <div className="flex items-center gap-3">
          <Droplets size={30} color="white" />
          <p className="text-white">Humidity</p>
        </div>
       <h3 className="text-center font-bold text-lg text-white mt-2">
  {weatherData?.main?.humidity != null
    ? weatherData.main.humidity + "%"
    : ""}
</h3>
      </div>

      <div className="bg-purple-900/40 rounded-3xl border border-white/40 w-full lg:w-52 px-4 py-4">
        <div className="flex items-center gap-3">
          <Wind size={30} color="white" />
          <p className="text-white">Wind</p>
        </div>
        <h3 className="text-center font-bold text-lg text-white mt-2">
  {weatherData?.wind?.speed != null
    ? (weatherData.wind.speed * 3.6).toFixed(1) + " km/h"
    : ""}
</h3>
      </div>

      <div className="bg-purple-900/40 rounded-3xl border border-white/40 w-full lg:w-52 px-4 py-4">
        <div className="flex items-center gap-3">
          <Gauge size={30} color="white" />
          <p className="text-white">Pressure</p>
        </div>
        <h3 className="text-center font-bold text-lg text-white mt-2">{weatherData?.main?.pressure !=null ? weatherData?.main.pressure + "hPa" : ""}</h3>
      </div>

    </div>
  );
}

export default Humid;