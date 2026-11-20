import { Search as SearchIcon } from "lucide-react";
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import WeatherContext from "./weathercontext"


function Search() {

 const { setweatherData, setforecast } = useContext(WeatherContext);


const [input , setinput] = useState("")



function handlinginput(event)
{
  setinput(event.target.value)
}

function searchhandling()
{

let data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d4934bf785de130f17aa0ab7734f22e9`)  

data.then(function(sucsess){

  setweatherData(sucsess.data)
  
})

let forecast = axios(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=d4934bf785de130f17aa0ab7734f22e9`)

forecast.then(function(sucess){

  setforecast(sucess.data)
  setinput("")
})

}

  return (
    <div className="flex items-center">
      <div className="relative w-full">

        <input value = {input} onChange = {handlinginput}
          className="w-full rounded-2xl p-2 bg-[#E8C9F0] border border-white text-[#24123D] focus:outline-none focus:ring-2 focus:ring-[#A77BCE]"
          placeholder="Search for a city"
        />

     <button onClick = {searchhandling}>
        <SearchIcon 
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#593477]"
        />
        </button>

      </div>
  
  </div>
  );
}

export default Search;