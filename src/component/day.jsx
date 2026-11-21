
import { Calendar } from "lucide-react";
import { useContext } from "react";
import WeatherContext from "./weathercontext";

function Day() {
  const { dayforecast } = useContext(WeatherContext);

  const groupedDays = dayforecast?.list?.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];

    const dayName = new Date(date).toLocaleDateString("en-IE", {
      weekday: "short"
    });

    if (!acc[date]) {
      acc[date] = {
        dayName: dayName,
        items: []
      };
    }

    acc[date].items.push(item);
    return acc;
  }, {});

  return (
    <>
      <div className="bg-purple-900/40 rounded-3xl border border-white/40 mt-5 w-full min-h-40 h-auto pb-3">

        <div className="flex gap-2 m-3 items-center">
          <Calendar size={20} color="white" />
          <h1 className="text-white font-semibold">
            5-Days Forecast
          </h1>
        </div>

        <div className="flex gap-3 items-center mx-4 overflow-x-auto pb-2 lg:justify-between">

          {Object.entries(groupedDays || {}).slice(0, 5).map(([date, day]) => {

            const tempmax = day.items.reduce((acc, item) => {
              return acc > item.main.temp_max
                ? acc
                : item.main.temp_max;
            }, -Infinity);

            const tempmin = day.items.reduce((acc, item) => {
              return acc < item.main.temp_min
                ? acc
                : item.main.temp_min;
            }, Infinity);

            const dailyWeather = day.items[0]?.weather?.[0];

            return (
              <div
                key={date}
                className="bg-purple-800/40 rounded-3xl border border-white/40 w-24 shrink-0 p-4"
              >

                <p className="text-white text-center mt-3">
                  {day.dayName}
                </p>

                {dailyWeather && (
                  <img
                    src={`https://openweathermap.org/img/wn/${dailyWeather.icon}@2x.png`}
                    alt={dailyWeather.description}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                )}

                <p className="text-white text-center">
                  {Math.round(tempmax)}° / {Math.round(tempmin)}°
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default Day;
