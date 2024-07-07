const prevCity = "Kolkata";
const apiId = ...........;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humid = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async(cityName) => {
    const API_URL = `${BASE_URL}${cityName}${apiId}`;
    const response = await fetch(API_URL);

    if (response.status == 404) {
        alert("Invalid City Name");
        document.querySelector(".weather").style.display = "none";
    }
    const data = await response.json();

    console.log(data);
    city.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    temp.innerHTML = Math.round(data.main.temp/10) + "°c";
    wind.innerHTML = data.wind.speed + "km/h";
    humid.innerHTML = data.main.humidity + "%";

    if (data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main === "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main === "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    document.querySelector(".weather").style.display = "block";

}

btn.addEventListener("click", () => {
    let newCity = inp.value.toLowerCase();
    checkWeather(newCity);
})


