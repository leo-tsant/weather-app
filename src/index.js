import "./styles/index.css";
import displayWeather from "./components/displayWeather";
import getWeather from "./components/getWeather";

const form = document.getElementById("getCityForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;

    try {
        const weatherData = await getWeather(city);
        displayWeather(weatherData, true);

        const weatherContainer = document.getElementById("weatherContainer");
        weatherContainer.classList.remove("hidden");
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
});
