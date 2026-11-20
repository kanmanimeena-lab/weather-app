import sunsetImg from "../assets/sunset.png";
import sunriseImg  from "../assets/sunrise.png";
import mountain from "../assets/mountain (2).png"
import { useContext } from "react";
import WeatherContext from "./weathercontext";

function Sun()
{

    const { weatherData } = useContext(WeatherContext);

  const formatSunTime = (timestamp, timezone) => {
  const date = new Date((timestamp + timezone) * 1000);

  return date.toLocaleTimeString("en-IE", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC"
  });

  }

const sunrise = weatherData
  ? formatSunTime(weatherData.sys.sunrise, weatherData.timezone)
  : "";


const sunset = weatherData
  ? formatSunTime(weatherData.sys.sunset, weatherData.timezone)
  : "";

  return(

    <>
    <div className = "bg-purple-900/40 rounded-3xl border border-white/40 mt-10 w-11/12 h-40 m-auto lg:w-10/12 xl:w-9/12 ">

   <div className="flex justify-between items-center h-full px-2 sm:px-4">

  {/* Sunrise */}
  <div className="flex items-center">
    <img className="w-16 sm:w-20" src={sunriseImg} alt="Sunrise" />

    <div className="flex flex-col mx-1">
      <h1 className="text-white font-medium">Sunrise</h1>
      <p className="text-white">{sunrise}</p>
    </div>
  </div>

  {/* Mountain */}
  <div className="flex justify-center">
 <img
  className="w-20 sm:w-28 lg:w-48 xl:w-72 object-contain"
  src={mountain}
  alt="Sun path"
/>
  </div>

  {/* Sunset */}
  <div className="flex items-center">
    <img className="w-16 sm:w-20" src={sunsetImg} alt="Sunset" />

    <div className="flex flex-col mx-1">
      <h1 className="text-white font-medium">Sunset</h1>
      <p className="text-white">{sunset}</p>
    </div>
  </div>

</div>


    </div>
    
    
    </>
  )
}

export default Sun