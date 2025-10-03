const apiKey = "e6857fe9413fabe50edaddbe3551d850";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    else{

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else{
        document.querySelector(".weather-icon").src = "images/weather.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    checkWeather(city);
});


