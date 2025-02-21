const apiKey = "585eb628298fe4e954236df450a330ad";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found. Please try again.");
            }
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred. Please try again.");
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <img src="${iconUrl}" alt="${data.weather[0].description}">
    `;
}
