import formatting from "../utils/Formatting";
const ForecastCard = ({
  date,
  maxTemp,
  minTemp,
  weatherCode
}) =>  {
  return (
    
    <div className="w-60 mt-10 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {formatting.formatDate(date)}
      </h2>

       <div className="mt-8 space-y-3">
        <div className="flex justify-between">
          <span>Maximum Temperature</span>
          <span>{maxTemp}°C</span>
        </div>

        <div className="flex justify-between">
          <span>Minimum Temperature</span>
          <span>{minTemp}°C</span>
        </div>

        <div className="flex justify-between">
          <span>Condition</span>
          <span>{formatting.formatCode(weatherCode)}</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;