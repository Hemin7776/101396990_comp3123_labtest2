import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [city, setCity] = useState("Berlin");
  const [searchCity, setSearchCity] = useState("");

  const fetchWeatherData = async () => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      setForecastData(forecastResponse.data.list.slice(0, 5));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  const handleSearch = () => {
    if (searchCity.trim() !== "") {
      setCity(searchCity);
    }
  };

  return (
    <div className="weather-app">
      <div className="header">
        <input
          type="text"
          placeholder="Search city"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="weather-container">
        {/* Left Section */}
        {weatherData && (
          <div className="left-section">
            <div className="overlay">
              <h1>
                {new Date().toLocaleDateString("en-US", { weekday: "long" })}
              </h1>
              <h3>{new Date().toLocaleDateString()}</h3>
              <h2>{weatherData.name}</h2>
              <h1>{Math.round(weatherData.main.temp)}°C</h1>
              <p>{weatherData.weather[0].description}</p>
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="right-section">
          <h2 className="section-title">Weather Forecast</h2>
          <div className="details">
            <p>Predictability: 71% (Mock)</p>
            <p>Humidity: {weatherData?.main.humidity}%</p>
            <p>Wind: {weatherData?.wind.speed} km/h</p>
            <p>Air Pressure: {weatherData?.main.pressure} mb</p>
            <p>Max Temp: {weatherData?.main.temp_max}°C</p>
            <p>Min Temp: {weatherData?.main.temp_min}°C</p>
          </div>

          <div className="forecast-container">
            {forecastData.map((day) => (
              <div className="forecast-card" key={day.dt}>
                <p className="forecast-day">
                  {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                />
                <p className="temp">{Math.round(day.main.temp)}°C</p>
                <p>{day.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
