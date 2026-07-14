import formatting from "../utils/Formatting";
import {
  FaTemperatureHigh,
  FaWind,
  FaTint,
  FaCloudSun,
  FaHeart
} from "react-icons/fa";

const WeatherCard = ({ weather, city, onFavourite }) => {
  if (!weather) return null;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {city || "Current Weather"}
        </h2>

        {onFavourite && (
          <button
            onClick={onFavourite}
            className="text-red-500 hover:text-red-600 transition"
          >
            <FaHeart size={24} />
          </button>
        )}
      </div>

      <div className="text-center">
        <p className="text-6xl font-bold text-indigo-700">
          {weather.current.temperature_2m}°
        </p>

        <p className="text-gray-500 mt-2">
          Current Temperature
        </p>
      </div>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaTemperatureHigh className="text-orange-500" />
            Feels Like
          </span>

          <span>{weather.current.apparent_temperature}°C</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaTint className="text-blue-500" />
            Humidity
          </span>

          <span>{weather.current.relative_humidity_2m}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaWind className="text-gray-500" />
            Wind
          </span>

          <span>{weather.current.wind_speed_10m} km/h</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaCloudSun className="text-yellow-500" />
            Condition
          </span>

          <span>{formatting.formatCode(weather.current.weather_code)}</span>
        </div>

      </div>

    </div>
  );
};

export default WeatherCard;