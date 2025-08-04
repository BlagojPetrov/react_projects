import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=3fb2778302a52d2188caae94db4c52cf&units=metric`
      );
      const data = await response.json();

      console.log(data);
      if (data && data.cod === 200) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.log("Error fetching weather:", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    if (search.trim() !== "") {
      fetchWeatherData(search);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Kavadarci");
  }, []);

  return (
    <div className="weather-wrapper">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div>Loading...</div>
      ) : weatherData ? (
        <div className="weather-info-box">
          <div className="city-name">
            <h2>
              {weatherData.name}, <span>{weatherData.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            Temperature: {weatherData.main?.temp ?? "N/A"}°C
          </div>
          <p className="description">
            {weatherData.weather?.[0]?.description ?? "No description"}
          </p>
          <div className="weather-info">
            <div className="column">
              <p className="wind">
                Wind Speed: {weatherData.wind?.speed ?? "N/A"} m/s
              </p>
            </div>
            <div className="column">
              <p className="humidity">
                Humidity: {weatherData.main?.humidity ?? "N/A"}%
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>No weather data found.</div>
      )}
    </div>
  );
}
