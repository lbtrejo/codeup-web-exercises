(function(){
    "use strict";

    const onecallURL = 'https://api.openweathermap.org/data/2.5/onecall';

    function getCurrentData(){
        return new Promise((resolve) => {
            $.ajax({
                url: onecallURL,
                type: 'GET',
                data: {
                    lat: 29.42,
                    lon: -98.49,
                    appid: owmKey,
                    units: "imperial",
                    exclude: "minutely, hourly, daily"
                },
                success: function(data) {
                    resolve(data)
                }
            })
        })
    }

    function formatCurrentData (data){
        let resultCurrent = {};
            resultCurrent = {
                date: data.current.dt,
                dew_point: data.current.dew_point,
                humidity: data.current.humidity,
                pressure: data.current.pressure,
                description: data.current.weather[0].description,
                icon_large: "http://openweathermap.org/img/wn/"+ data.current.weather[0].icon +"@2x.png",
                icon_small: "http://openweathermap.org/img/wn/"+ data.current.weather[0].icon +".png",
                feels: data.current.feels_like,
                temp: data.current.temp
            };
            return resultCurrent;
    }

    function getForecastData(){
        return new Promise((resolve) => {
            $.ajax({
                url: onecallURL,
                type: 'GET',
                data: {
                    lat: 29.42,
                    lon: -98.49,
                    appid: owmKey,
                    units: "imperial",
                    exclude: "minutely, hourly, current"
                },
                success: function(data) {
                    resolve(data)
                }
            })
        })
    }

    function formatForecastData (data){
        let resultForecast = [];
        for (let i = 1; i<= 4; i++){
            let dailyForecast = {
                date: new Date(data.daily[i].dt * 1000).toDateString(),
                dew_point: data.daily[i].dew_point,
                humidity: data.daily[i].humidity,
                pressure: data.daily[i].pressure,
                description: data.daily[i].weather[0].description,
                icon_large: "http://openweathermap.org/img/wn/"+ data.daily[i].weather[0].icon + "@2x.png",
                icon_small: "http://openweathermap.org/img/wn/"+ data.daily[i].weather[0].icon + ".png",
                maxtemp: data.daily[i].temp.max,
                mintemp: data.daily[i].temp.min
            }
            resultForecast.push(dailyForecast);
        }

        return resultForecast;
    }

    function buildCurrentCard(currentObject){
            let cardHTML = "";
            cardHTML += "<div class='card m-2'>"
            cardHTML += "<div class='card-header bg-success'>Today's Weather</div>"
            cardHTML += "<img src='" + currentObject.icon_large + "' class='card-img-top img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center pb-3'>Currently: "+ parseInt(currentObject.temp) +" °F</h5>"
            cardHTML += "<p class='card-text'>Description: <span class='font-weight-bold'>"+ currentObject.description +"</span></p>"
            cardHTML += "<p class='card-text'>Feels like: <span class='font-weight-bold'>"+ parseInt(currentObject.feels) +" °F</span></p>"
            cardHTML += "<p class='card-text'>Humidity: <span class='font-weight-bold'>"+ currentObject.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#data-testing").append(cardHTML)
    }

    function buildForecastCards(forecastArray){
        forecastArray.forEach(function(forecastObject){
            let cardHTML = "";
            cardHTML += "<div class='card m-2'>"
            cardHTML += "<div class='card-header bg-success'>"+ forecastObject.date +"</div>"
            cardHTML += "<img src='" + forecastObject.icon_large + "' class='card-img-top img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center pb-3'>Low: "+ parseInt(forecastObject.mintemp) +" °F / High: " + parseInt(forecastObject.maxtemp) + " °F</h5>"
            cardHTML += "<p class='card-text'>Description: <span class='font-weight-bold'>"+ forecastObject.description +"</span></p>"
            cardHTML += "<p class='card-text'>Pressure: <span class='font-weight-bold'>"+ parseInt(forecastObject.pressure) + "</span></p>"
            cardHTML += "<p class='card-text'>Humidity: <span class='font-weight-bold'>"+ forecastObject.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#data-testing").append(cardHTML)
        })
    }

    $(document).ready(function(){
        console.log("ready");
        getCurrentData()
            .then((data) => {
                let currentObject = formatCurrentData(data);
                buildCurrentCard(currentObject);
            })
        // TODO Current weather may load in after forecast, fix placement in HTML
        getForecastData()
            .then((data) => {
                let forecastArray = formatForecastData(data);
                console.log("Forecast Array: ", forecastArray);
                buildForecastCards(forecastArray);
            })
    })
})();
