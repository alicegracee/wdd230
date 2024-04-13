/* current weather */
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=55.72&lon=21.11&units=metric&appid=8d4aedfc1e40229d9c70ca208f671c5f'

async function apiFetch() {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp | 0}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `Conditions: ${desc}`;
}

apiFetch();

/* 3-day forecast */
const forecast1 = document.querySelector('#forecast-1');
const forecast2 = document.querySelector('#forecast-2');
const forecast3 = document.querySelector('#forecast-3');

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=55.72&lon=21.11&units=metric&appid=8d4aedfc1e40229d9c70ca208f671c5f'

async function forecastApiFetch() {
    const response = await fetch(forecastURL);
    const data = await response.json();
    displayForecastResults(data);
}

function displayForecastResults(data) {

    forecast1.innerHTML = `${data.list[4].dt_txt.slice(0, 10)}: ${data.list[4].weather[0].main},   ${data.list[4].main.temp | 0}&deg;C`;

    forecast2.innerHTML = `${data.list[12].dt_txt.slice(0, 10)}: ${data.list[12].weather[0].main},   ${data.list[12].main.temp | 0}&deg;C`;

    forecast3.innerHTML = `${data.list[20].dt_txt.slice(0, 10)}: ${data.list[20].weather[0].main},   ${data.list[20].main.temp | 0}&deg;C`;
}

forecastApiFetch();