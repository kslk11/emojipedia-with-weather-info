var btnTranslate = document.querySelector("#btn-data");
var cityInput = document.querySelector("#city-input");
var currentTemperature = document.querySelector("#current-temperature");
var feelsLike = document.querySelector("#temp-feels-like");
var cloudDescription = document.querySelector("#cloud-description");
var humidityLevel = document.querySelector("#humidity");
var displayError = document.querySelector("#display-error");

    

var serverURL = "https://api.openweathermap.org/data/2.5/weather"

function getTranslationURL(city) {
    return serverURL + "?" + "q=" + city + "&units=metric&appid=b8192e87371ef413c693f463a53946f7"
}

function errorHandler(error) {
    console.log("Data Not Found", error);
    displayError.innerHTML = "Data Not Found!"; 
}

function hideError() {
    displayError.innerHTML = null;
}

function clickHandler() {

    var inputCity = cityInput.value;

    // calling server
    fetch(getTranslationURL(inputCity))
        .then(response => response.json())
        .then(json => {
            var temperature = json.main.temp;
            
            var tempFeelsLike = json.main.feels_like;
            var clouds = json.clouds.all;
            var humidity = json.main.humidity;
            currentTemperature.innerHTML = temperature + "°C";
            feelsLike.innerHTML = tempFeelsLike + "°C";
            cloudDescription.innerHTML = clouds + "%";
            humidityLevel.innerHTML = humidity + "%";
        })
        .catch(errorHandler);
};


btnTranslate.addEventListener("click", clickHandler)