const searchWeather = document.getElementById("search_weather")
const weatherApi = "07bf25e18154556e16eeeec035e33eb0"

async function getWeather() {
    console.log('getWeather');
   const weatherResult = `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.value}&appid=${weatherApi}`;
   console.log(weatherResult);
    const result = await fetch(weatherResult);
    const json = await result.json();
    console.log(json);

    document.getElementById("city").innerHTML = json.name;
    document.getElementById("temperature").innerHTML = json.main.temp;
    document.getElementById("description").innerHTML = json.weather[0].description;

    const quoteResult = `https://api.gameofthronesquotes.xyz/v1/random`;

    const resultq = await fetch(quoteResult);
    const jsonq = await resultq.json();

    document.getElementById("sentence").innerHTML = jsonq.sentence;
    document.getElementById("name").innerHTML = jsonq.character.name;

    const weatherDisplay = document.getElementById("weather_display");
    weatherDisplay.style.visibility = "visible";
}


const searchButton = document.getElementById("search_button");
searchButton.addEventListener("click", getWeather)