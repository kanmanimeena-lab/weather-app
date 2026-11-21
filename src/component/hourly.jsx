import { Clock5 } from "lucide-react";
import Day from "./day";
import { useContext } from "react";
import WeatherContext from "./weathercontext";

function Hourly() {


const { dayforecast } = useContext(WeatherContext);


  return (
    <div className="lg:flex lg:flex-row lg:justify-between items-center gap-4 mx-5 lg:mt-8">

      <div className="bg-purple-900/40 rounded-3xl border border-white/40 mt-5 w-full min-h-40 pb-3">

        <div className="flex gap-2 m-3 items-center">
          <Clock5 size={20} color="white" />
          <h1 className="text-white font-semibold">Hourly Forecast</h1>
        </div>

        <div className="flex gap-3 items-center mx-4 overflow-x-auto pb-2 lg:justify-between">

          {
            dayforecast?.list?.slice(0,8).map((hour)=> (

      
          <div  key = {hour.dt}className="bg-purple-800/40 rounded-3xl border border-white/40 w-24 shrink-0 p-4">
         <p className="text-white text-center whitespace-nowrap">
          {new Date(hour.dt_txt.replace(" ", "T")).toLocaleTimeString("en-US", {
         hour: "numeric",
          hour12: true
          })}
         </p>

<img
  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
  alt={hour.weather[0].description}
/>

  <p className="text-white text-center font-bold">{hour.main.temp}°</p>
          </div>

            ))
          }

        </div>
      </div>

      <Day />

    </div>
  
  );
}

export default Hourly;