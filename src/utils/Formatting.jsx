const formatCode = (weatherCode) => {
switch(weatherCode)
{

case 0:
    return "Clear sky"


case 1:
    return "Mainly Clear"


case 2:
    return "Partly cloudy"


case 3:
    return "Overcast"

 case 45:
    return "Fog";

case 48:
    return "Depositing rime fog";

case 51:
    return "Light drizzle";

case 53:
    return "Moderate drizzle";

case 55:
    return "Dense drizzle";

case 61:
    return "Slight rain";

case 63:
    return "Moderate rain";

case 65:
    return "Heavy rain";

case 71:
    return "Slight snow";

case 73:
    return "Moderate snow";

case 75:
    return "Heavy snow";

case 80:
    return "Rain showers";

case 81:
    return "Moderate rain showers";

case 82:
    return "Violent rain showers";

case 95:
    return "Thunderstorm";

default:
    return "Unknown Weather"
}
}


const formatDate = (date) => {
    const newDate =  new Date(date);
    return newDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    
});

}

export default { formatCode,formatDate};
