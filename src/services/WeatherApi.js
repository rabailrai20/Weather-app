
async function getCoordinates(city) 
{
    try{
const response  = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
if(!response.ok){
    throw new error('Failed to fetch coordinates');
}
const data = await response.json();
console.log(data);

const latitude = data?.results?.[0]?.latitude;
const longitude = data?.results?.[0]?.longitude;

if (latitude === undefined || longitude === undefined) {
    throw new Error("City not found");
}

return {latitude,longitude};
    }
catch (error) {
    console.error(error);
    throw error;

}
}

async function getWeather(latitude,longitude)
{
    try{
   const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto`)
   if (!response.ok) {
    throw new Error("Failed to fetch Weather");
}
   const weatherData = await response.json();

    return weatherData;
    }
catch (error){
        console.error(error);
        throw error;

}
} 

export default {
    getCoordinates,
    getWeather}