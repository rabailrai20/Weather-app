import ForecastCard from "./ForecastCard"
const ForecastList = ({daily}) => {
    if (!daily) return null;
  return (
    <div className="flex gap-4 overflow-x-auto ">
    {daily.time.map((time,index) => (
        <div key ={time}>
<ForecastCard
  date={time}
  maxTemp={daily.temperature_2m_max[index]}
  minTemp={daily.temperature_2m_min[index]}
  weatherCode={daily.weather_code[index]}
/>
        </div>
        ))
    }  

        </div>  )
}

export default ForecastList