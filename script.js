document.getElementById('search').addEventListener('click', function() {
  const city = document.getElementById('city').value;
  fetchWeather(city);
});

document.getElementById('geolocate').addEventListener('click', function() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherByCoordinates(lat, lon);
      });
  } else {
      alert('Geolocation is not supported by this browser.');
  }
});

document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

function fetchWeather(city) {
  const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  displayLoading();

  fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
              displayWeather(data);
              return fetch(forecastUrl);
          } else {
              throw new Error('City not found');
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.cod === "200") {
              displayForecast(data);
          } else {
              throw new Error('Error fetching forecast data');
          }
      })
      .catch(error => {
          displayError(error.message);
      })
      .finally(() => {
          hideLoading();
      });
}

function fetchWeatherByCoordinates(lat, lon) {
  const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  displayLoading();

  fetch(weatherUrl)
      .then(response => response.json())
      .then(data => {
          if (data.cod === 200) {
              displayWeather(data);
              return fetch(forecastUrl);
          } else {
              throw new Error('Location not found');
          }
      })
      .then(response => response.json())
      .then(data => {
          if (data.cod === "200") {
              displayForecast(data);
          } else {
              throw new Error('Error fetching forecast data');
          }
      })
      .catch(error => {
          displayError(error.message);
      })
      .finally(() => {
          hideLoading();
      });
}

function displayWeather(data) {
  const weatherDiv = document.getElementById('weather');
  const weatherDescription = data.weather[0].description;
  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  weatherDiv.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${weatherIcon}" alt="${weatherDescription}" class="weather-icon">
      <p>${weatherDescription}</p>
      <p>Temperature: ${data.main.temp} &deg;C</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}

function displayForecast(data) {
  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = '';
  const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  forecastList.forEach(item => {
      const forecastDate = new Date(item.dt_txt).toDateString();
      const forecastIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
      forecastDiv.innerHTML += `
          <div class="forecast-item">
              <span>${forecastDate}</span>
              <img src="${forecastIcon}" alt="${item.weather[0].description}" class="weather-icon">
              <span>${item.main.temp} &deg;C</span>
          </div>
      `;
  });
}

function displayLoading() {
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('weather').innerHTML = '';
  document.getElementById('forecast').innerHTML = '';
}

function hideLoading() {
  document.getElementById('loading').classList.add('hidden');
}

function displayError(message) {
  const weatherDiv = document.getElementById('weather');
  weatherDiv.innerHTML = `<p>${message}</p>`;
}
