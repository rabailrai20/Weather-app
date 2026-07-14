import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import WeatherApi from "./services/WeatherApi";
import WeatherCard from "./Components/WeatherCard";
import ForecastList from "./Components/ForecastList";
import { useState, useEffect } from "react";

function App() {
  const [City, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [loaded, setLoaded] = useState(false); // NEW

  async function handlesearch(city) {
    try {
      const { latitude, longitude } = await WeatherApi.getCoordinates(city);

      setCity(city);

      const weatherData = await WeatherApi.getWeather(latitude, longitude);

      setWeather(weatherData);
    } catch (error) {
      console.error(error);
    }
  }

  const addFavourite = async () => {
    if (!City) return;

    const exists = favourites.some(
      (fav) => fav.city.toLowerCase() === City.toLowerCase()
    );

    if (exists) {
      alert("City already added!");
      return;
    }

    try {
      const { latitude, longitude } = await WeatherApi.getCoordinates(City);
      const weatherData = await WeatherApi.getWeather(latitude, longitude);

      setFavourites((prev) => [
        ...prev,
        {
          city: City,
          weather: weatherData,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("favourites");

    if (saved) {
      setFavourites(JSON.parse(saved));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites, loaded]);

  return (
    <>
      <Navbar />

      <SearchBar onSearch={handlesearch} />

      <WeatherCard
        city={City}
        weather={weather}
        onFavourite={addFavourite}
      />

      <ForecastList daily={weather?.daily} />

      {favourites.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Favourite Cities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {favourites.map((fav) => (
              <WeatherCard
                key={fav.city}
                city={fav.city}
                weather={fav.weather}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;