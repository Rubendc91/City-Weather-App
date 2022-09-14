// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var cityInput = document.getElementById("searchInput");
var searchForm = document.getElementById("searchForm");
var searchHistory = document.getElementById("searchHistory")

var Date = moment().format("MMM Do, YYYY HH:MM");
console.log(Date);

function fetchWeather(lat, lon, city) {

///fecthing weather info///
    var apiURL = `http://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`


    fetch(apiURL).then(function(response){
        return response.json()
        


}).then(function(data){


///variables for weather data///
    var icon = data.current.weather[0].icon;
    var temp = data.current.temp;
    var wind = data.current.wind_speed;
    var humidity = data.current.humidity;
    var uvi = data.current.uvi;

    console.log(wind, temp, humidity, uvi, icon);
    // var img = document.createElement("img");
    // img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;${img}

    document.getElementById('todayIcon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    var currentCity = document.getElementById("today")
    currentCity.textContent = `${city} ${Date} `;


///append data to the page///
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

/////5day//////
       var dailyForecast = data.daily;
    var forecast = document.createElement("h3");
    var ForecastContainer = document.getElementById("cityForecast");
    forecast.textContent = "5 day Forecast";
    ForecastContainer.appendChild(forecast);
///////////////////need to add icons//////////////////////


// var dailyIcon = dailyForecast.weather[0].icon;
// console.log(dailyForecast);
// console.log(dailyIcon);

//     document.getElementById('day1img').src = `http://openweathermap.org/img/wn/${dailyIcon}@2x.png`;

/////////////////////////////

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day1container");
    currentForecast.textContent = `\n\ Temp: ${dailyForecast[0].temp.day} F \n\ Wind: ${dailyForecast[0].wind_speed} Mph \n\ Humidity:  ${dailyForecast[0].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    // document.getElementById('day1img').src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day2container");
    currentForecast.textContent = `Temp: ${dailyForecast[1].temp.day} F \n\ Wind: ${dailyForecast[1].wind_speed} Mph \n\ Humidity:  ${dailyForecast[1].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day3container");
    currentForecast.textContent = `Temp: ${dailyForecast[2].temp.day} F \n\ Wind: ${dailyForecast[2].wind_speed} Mph \n\ Humidity:  ${dailyForecast[2].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day4container");
    currentForecast.textContent = `Temp: ${dailyForecast[3].temp.day} F \n\ Wind: ${dailyForecast[3].wind_speed} Mph \n\ Humidity:  ${dailyForecast[3].humidity}` ;
    ForecastContainer.appendChild(currentForecast);

    var currentForecast = document.createElement("p");
    var ForecastContainer = document.getElementById("day5container");
    currentForecast.textContent = `Temp: ${dailyForecast[4].temp.day} F \n\ Wind: ${dailyForecast[4].wind_speed} Mph \n\ Humidity:  ${dailyForecast[4].humidity}` ;
    ForecastContainer.appendChild(currentForecast);


})

}


searchHistory.addEventListener("click", function(event){
    event.preventDefault()
    
    let clearTodaysWeather = document.getElementById("todaysWeather");
    while (clearTodaysWeather.firstChild) {
      clearTodaysWeather.removeChild(clearTodaysWeather.firstChild);
    }

    let clear5day = document.getElementById("cityForecast");
    while (clear5day.firstChild) {
        clear5day.removeChild(clear5day.firstChild);
    }

    let clearDay1 = document.getElementById("day1container");
    while (clearDay1.firstChild) {
        clearDay1.removeChild(clearDay1.firstChild);
    }

    let clearDay2 = document.getElementById("day2container");
    while (clearDay2.firstChild) {
        clearDay2.removeChild(clearDay2.firstChild);
    }

    let clearDay3 = document.getElementById("day3container");
    while (clearDay3.firstChild) {
        clearDay3.removeChild(clearDay3.firstChild);
    }

    let clearDay4 = document.getElementById("day4container");
    while (clearDay4.firstChild) {
        clearDay4.removeChild(clearDay4.firstChild);
    }

    let clearDay5 = document.getElementById("day5container");
    while (clearDay5.firstChild) {
        clearDay5.removeChild(clearDay5.firstChild);
    }

    var search = event.target.textContent;
    var currentCity = document.getElementById("today")

    var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${API_KEY}`

    fetch(apiURL).then(function(response){
    return response.json()
}).then(function(data){
        lat = data[0].lat;
        lon = data[0].lon;
        city = data[0].city;

        console.log('hello');




        fetchWeather(lat, lon, city)
            console.log(lat, lon, city);
        

});



});


searchForm.addEventListener("submit", function(event){
    event.preventDefault();
    // document.getElementsByTagName("main").attribute.visibility = "hidden";

    let clearTodaysWeather = document.getElementById("todaysWeather");
    while (clearTodaysWeather.firstChild) {
      clearTodaysWeather.removeChild(clearTodaysWeather.firstChild);
    }

    let clear5day = document.getElementById("cityForecast");
    while (clear5day.firstChild) {
        clear5day.removeChild(clear5day.firstChild);
    }

    let clearDay1 = document.getElementById("day1container");
    while (clearDay1.firstChild) {
        clearDay1.removeChild(clearDay1.firstChild);
    }

    let clearDay2 = document.getElementById("day2container");
    while (clearDay2.firstChild) {
        clearDay2.removeChild(clearDay2.firstChild);
    }

    let clearDay3 = document.getElementById("day3container");
    while (clearDay3.firstChild) {
        clearDay3.removeChild(clearDay3.firstChild);
    }

    let clearDay4 = document.getElementById("day4container");
    while (clearDay4.firstChild) {
        clearDay4.removeChild(clearDay4.firstChild);
    }

    let clearDay5 = document.getElementById("day5container");
    while (clearDay5.firstChild) {
        clearDay5.removeChild(clearDay5.firstChild);
    }

    var search = searchInput.value.trim()

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
            console.log(lat, lon, city);
    }    
})
var history = document.createElement("p");
var historySect = document.getElementById("searchHistory");
history.textContent = cityInput.value;
historySect.appendChild(history);
searchInput.value = "";


});