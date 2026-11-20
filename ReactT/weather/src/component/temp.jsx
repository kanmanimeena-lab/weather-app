import { MapPin } from "lucide-react"
import  sunny from "../assets/Sunny.png" 
import Humid from "./humid"
import { useContext } from "react"
import WeatherContext from "./weathercontext"
import partly from "../assets/partly.gif"
import fog from "../assets/fog.gif"
import dark from "../assets/dark.gif"
import storm from "../assets/lightling.gif"
import moonclouds from "../assets/moonclouds.gif"
import  moonstar from "../assets/moonstar.gif"




function Temperature()
{

const {weatherData} = useContext(WeatherContext)

const weatherCondition = weatherData?.weather?.[0]?.main
const weatherDescription = weatherData?.weather?.[0]?.description;
const weatherIcon = weatherData?.weather?.[0]?.icon;

const isNight = weatherIcon?.endsWith("n");

let weatherImage;

if (weatherCondition === "Clouds" && weatherIcon?.endsWith("d")) {
  weatherImage = partly;

} else if (weatherCondition === "Clouds" && weatherIcon?.endsWith("n"))
{
  weatherImage = moonclouds;

}else if(weatherCondition === "Rain" || weatherCondition === "Drizzle"){

  weatherImage = dark
}else if(weatherCondition === "Clear" && "isNight"){

  weatherImage = moonstar
  

  }else if(weatherCondition === "Clear" && "!isNignt"){

  weatherImage = sunny

}else if(weatherCondition === "Thunderstorm"){

  weatherImage = storm

}else if(weatherCondition === "Fog" || weatherCondition === "Mist" || weatherCondition === "Haze"){

  weatherImage = fog
}

const localDate = weatherData
  ? new Date((weatherData.dt + weatherData.timezone) * 1000)
  : null;

const dayName = localDate?.toLocaleDateString("en-IE", {
  weekday: "long",
  timeZone: "UTC"
});

const dateName = localDate?.toLocaleDateString("en-IE", {
  day: "numeric",
  month: "long",
  timeZone: "UTC"
});

const timeName = localDate?.toLocaleTimeString("en-IE", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "UTC"
});

console.log(weatherCondition, weatherDescription, weatherIcon, isNight);
return(

<div className="lg:flex lg:flex-row lg:justify-between lg:items-center mt-3 lg:mx-24 mx-5">

<div className="relative w-full max-w-md h-56 
  rounded-3xl border border-white/40
  bg-purple-900/40 
  shadow-lg p-5 text-white">

  {/* Left content */}
  <div className="max-w-[65%]">
    <div className="flex items-center gap-2">
      <MapPin size={25} />
      <h1 className="text-2xl font-bold">City : {weatherData?.name} </h1>
    </div>

    <p className="ml-8 text-sm mt-1">{dayName} {dateName} · {timeName}</p>

    <div className="ml-8 mt-3">
    <h1 className="font-bold text-xl text-[#F5EAF8]">
  {weatherData?.main?.temp != null
    ? (weatherData.main.temp - 273.15).toFixed(1) + " °C"
    : ""}
</h1>
      <p className="font-semibold">{weatherData?.weather[0].description}</p>
    </div>
  </div>

  {/* Right-side PNG */}

  {
    weatherImage != null ?
  
<img
  src={weatherImage}
  alt="Weather condition"
  className="absolute right-3 top-1/2 -translate-y-1/2 w-36 object-contain"
/> : "" 
}
  
  <div className = "border border-purple-50/40 mt-5"></div>

  <div className = "flex justify-between items-center mt-1">
   <p>
  {weatherData?.main?.temp_max != null
    ? "↑ " + Math.round(weatherData.main.temp_max - 273.15) + "°C"
    : ""}
</p>
      <p>
        {weatherData?.main?.temp_min != null ? " ↓"
        + Math.round(weatherData?.main?.temp_min - 273.15) + "°C" : ""}</p>
  </div>

</div>

<Humid />


    </div>


)

}

export default Temperature