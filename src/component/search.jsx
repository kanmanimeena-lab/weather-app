import { Search as SearchIcon } from "lucide-react";
import { useState } from "react"
import axios from "axios"
import { useContext } from "react"
import WeatherContext from "./weathercontext"


function Search() {

 const { setweatherData, setforecast } = useContext(WeatherContext);


const [input , setinput] = useState("")

const [error, seterror] = useState("");

function handlinginput(event)
{
  setinput(event.target.value)
}

function searchhandling()
{

seterror("");

if(!input.trim())
{

  seterror("Enter the city name")
return
}

let data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)  

data.then(function(sucsess){

  setweatherData(sucsess.data)
  
}).catch(function(reject){

  seterror("city not found. Please try again")
  console.log("error")
})



let forecast = axios(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

forecast.then(function(sucess){

  setforecast(sucess.data)
  setinput("")

}).catch(function(error){

  seterror("city not found, please try again")
  console.log("error")
})

}

function handlingkey(event){

  if(event.key === "Enter"){
    searchhandling();
  }
}

  return (
    <>
    <div className="flex items-center">
      <div className="relative w-full">

        <input value = {input} onChange = {handlinginput} onKeyDown={handlingkey}
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

      {error && (

          <p className="bg-[#FFF0F0] text-[#B83240] rounded-xl p-2 mt-3">{error}</p>
        )}
  
        </>
  );
}

export default Search;