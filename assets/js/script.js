// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

var cityInput = document.getElementById("searchInput");
var searchForm =document.getElementById("search");

function fetchWeather( lat, lon, city){
    var apiURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`

    
    fetch(apiURL).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
};
