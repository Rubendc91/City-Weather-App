// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var cityInput = document.getElementById("searchInput");
var searchForm = document.getElementById("searchForm");

function fetchWeather(lat, lon, city,) {
    var apiURL = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`

   
    fetch(apiURL).then(function(response){
        return response.json()
        


}).then(function(data){

    var currentCity = document.getElementById("today")
    currentCity.textContent = city;

    var temp = data.current.temp;
    var wind = data.current.wind_speed;
    var humidity = data.current.humidity;
    var uvi = data.current.uvi;

    console.log(wind, temp, humidity, uvi);

    var currentTemp = document.createElement("p");
    var currentWeather = document.getElementById("todaysWeather");
    currentTemp.textContent = `Temp: ${temp} F`;
    currentWeather.appendChild(currentTemp);

    var currentWind = document.createElement("p");
    var currentWeather = document.getElementById("todaysWeather");
    currentWind.textContent = `Wind: ${wind} Mph`;
    currentWeather.appendChild(currentWind);

    var currentHumidity= document.createElement("p");
    var currentWeather = document.getElementById("todaysWeather");
    currentHumidity.textContent = `Humidity: ${humidity} `;
    currentWeather.appendChild(currentHumidity);

    var currentUvi= document.createElement("p");
    var currentWeather = document.getElementById("todaysWeather");
    currentUvi.textContent = `UVI: ${uvi} `;
    currentWeather.appendChild(currentUvi);

/////5day//////////////////////////////////////
   
    var dailyForecast = data.daily;
        
    console.log(dailyForecast)

    
    var forecast = document.createElement("h3")
    var ForecastContainer = document.getElementById("cityForecast");
    forecast.textContent = "5 day Forecast";
    ForecastContainer.appendChild(forecast);
//////need to add icons and date and stop repeting results//////


    // var forecastImg = document.createElement("img")
    // var ForecastImgContainer = document.getElementById("day1");
    // forecastImg.attr = `<img src="http://openweathermap.org/img/wn/02d@2x.png">`
    // ForecastImgContainer.append(forecastImg);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day1container");
    currentForecast.textContent = `Temp: ${dailyForecast[0].temp.day} F \n Wind: ${dailyForecast[0].wind_speed} Mph \n Humidity:  ${dailyForecast[0].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day2container");
    currentForecast.textContent = `Temp: ${dailyForecast[1].temp.day} F \n Wind: ${dailyForecast[1].wind_speed} Mph \n Humidity:  ${dailyForecast[1].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day3container");
    currentForecast.textContent = `Temp: ${dailyForecast[2].temp.day} F \n Wind: ${dailyForecast[2].wind_speed} Mph \n Humidity:  ${dailyForecast[2].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day4container");
    currentForecast.textContent = `Temp: ${dailyForecast[3].temp.day} F \n Wind: ${dailyForecast[3].wind_speed} Mph \n Humidity:  ${dailyForecast[3].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day5container");
    currentForecast.textContent = `Temp: ${dailyForecast[4].temp.day} F  Wind: ${dailyForecast[4].wind_speed} Mph  Humidity:  ${dailyForecast[4].humidity}` ;
    ForecastContainer.appendChild(currentForecast);


})
}

searchForm.addEventListener("submit", function(event){
    event.preventDefault();

    currentWeather.removeChild(currentTemp);

    var recentSearch= document.createElement("p");
    var history = document.getElementById("searchHistory");
    recentSearch.textContent = cityInput.value;
    history.appendChild(recentSearch);

    var search = cityInput.value.trim()

    var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`

    fetch(apiURL).then(function(response){
    return response.json()
}).then(function(data){
    if(!data.length){
        alert("Location not found")
    } else {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var city = data[0].name

        fetchWeather(lat, lon, city)
            // console.log(lat, lon, city);

    }
})

searchInput.value = "";


});