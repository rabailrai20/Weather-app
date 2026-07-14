# 🌤️ Weather Dashboard

A responsive weather dashboard built with **React**, **Vite**, and **Tailwind CSS** that allows users to search for weather conditions by city, view a 5-day forecast, and save favourite cities for quick access.

---

## 📌 Features

- 🔍 Search weather by city
- 🌡️ Display current weather information
- 📅 View a 5-day weather forecast
- ❤️ Add cities to favourites
- 💾 Favourite cities are saved using Local Storage
- 🚫 Prevent duplicate favourite cities
- 🎨 Clean and minimal user interface
- 📱 Responsive design for desktop and mobile
- 🌤️ Weather icons using React Icons (Font Awesome)

---

## 🛠️ Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Open-Meteo Weather API
- Open-Meteo Geocoding API
- React Icons (Font Awesome)

---

## 📂 Project Structure

```
src
│
├── Components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   └── ForecastList.jsx
│
├── services
│   └── WeatherApi.js
│
├── utils
│   └── Formatting.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd weather-dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🌐 APIs Used

### Geocoding API

Converts a city name into latitude and longitude coordinates.

```
https://geocoding-api.open-meteo.com/v1/search
```

### Weather Forecast API

Returns current weather and a 5-day forecast.

```
https://api.open-meteo.com/v1/forecast
```

---

## 📋 Application Workflow

1. User enters a city name.
2. The Geocoding API retrieves the city's latitude and longitude.
3. The Weather API fetches the current weather and 5-day forecast.
4. Weather data is displayed on the screen.
5. Users can add cities to their favourites.
6. Favourite cities are stored in Local Storage.
7. Saved favourites are restored when the application reloads.

---

## 🚀 React Concepts Used

- Functional Components
- Props
- useState
- useEffect
- Event Handling
- Conditional Rendering
- List Rendering using `map()`
- Optional Chaining
- Local Storage
- API Integration using Fetch
- Component Reusability

---

## 📸 User Interface

The application provides:

- Current Weather Card
- 5-Day Forecast
- Favourite Cities Section
- Responsive Search Bar
- Minimal UI with Font Awesome Icons

---

## 🔮 Future Improvements

- Remove favourite cities
- Refresh favourite cities with the latest weather
- Dark Mode
- Loading Spinner
- Better Error Handling
- Search History
- Weather by Current Location
- Hourly Forecast
- Temperature Unit Toggle (°C / °F)

---

## 👩‍💻 Author

**Rabail Rai**

BS Computer Science  
University of Lahore

---

## 📄 License

This project was developed for learning and internship purposes.