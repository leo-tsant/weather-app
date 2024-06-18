const displayWeather = (weatherData) => {
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = "";

    const location = document.createElement("div");
    location.id = "location";
    location.classList.add("weatherText");
    location.innerText = `${weatherData.name}, ${weatherData.region}, ${weatherData.country}`;
    weatherContainer.appendChild(location);

    const condition = document.createElement("div");
    condition.id = "condition";
    const conditionIcon = document.createElement("img");
    conditionIcon.id = "conditionIcon";
    conditionIcon.src = weatherData.condition.icon;
    conditionIcon.alt = weatherData.condition.text;
    condition.appendChild(conditionIcon);
    const conditionText = document.createElement("div");
    conditionText.classList.add("weatherText");
    conditionText.innerText = weatherData.condition.text;
    condition.appendChild(conditionText);
    weatherContainer.appendChild(condition);

    const temp = document.createElement("div");
    temp.id = "temp";
    temp.classList.add("weatherText");
    temp.innerText = ` ${weatherData.temp_c}°C`;
    weatherContainer.appendChild(temp);

    const feelsLike = document.createElement("div");
    feelsLike.classList.add("weatherText");
    feelsLike.innerText = `Feels like: ${weatherData.feelslike_c}°C`;
    weatherContainer.appendChild(feelsLike);

    const time = document.createElement("div");

    time.classList.add("weatherText");
    time.innerText = weatherData.localtime;
    weatherContainer.appendChild(time);

    const wind = document.createElement("div");
    wind.classList.add("weatherText");
    wind.innerText = `Wind: ${weatherData.wind_kph} kph / ${weatherData.wind_mph} mph`;
    weatherContainer.appendChild(wind);

    const humidity = document.createElement("div");
    humidity.classList.add("weatherText");
    humidity.innerText = `Humidity: ${weatherData.humidity}%`;
    weatherContainer.appendChild(humidity);

    const toggleUnitSlider = document.createElement("div");
    toggleUnitSlider.id = "toggleUnitSlider";
    toggleUnitSlider.innerHTML = ` <div class="toggle-button-cover">
      <div class="button r" id="button-1">
        <input type="checkbox" id="checkboxInput" class="checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
  </div>`;
    weatherContainer.appendChild(toggleUnitSlider);

    const toggleunit = document.getElementById("checkboxInput");
    toggleunit.addEventListener("change", () => {
        if (toggleunit.checked) {
            temp.innerText = ` ${weatherData.temp_f}°F`;
            feelsLike.innerText = `Feels like: ${weatherData.feelslike_f}°F`;
        } else {
            temp.innerText = ` ${weatherData.temp_c}°C`;
            feelsLike.innerText = `Feels like: ${weatherData.feelslike_c}°C`;
        }
    });
};

export default displayWeather;
