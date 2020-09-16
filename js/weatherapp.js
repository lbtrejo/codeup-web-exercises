(function(){
    "use strict";

    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
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
            // resultCurrent.date = current.current.dt;
            console.log("inside: ", resultCurrent);
            return resultCurrent;
    }

    function getForecastData(){
        let forecastData = [];

        $.get(onecallURL, {
            lat: 29.42,
            lon: -98.49,
            appid: owmKey,
            units: "imperial",
            exclude: "minutely, hourly, current"
        }).done(function(forecast){
            for (let i = 1; i < 5; i++){
                let resultCurrent = {
                    date: forecast.daily[i].dt,
                    dew_point: forecast.daily[i].dew_point,
                    humidity: forecast.daily[i].humidity,
                    pressure: forecast.daily[i].pressure,
                    description: forecast.daily[i].weather[0].description,
                    icon_large: "http://openweathermap.org/img/wn/"+ forecast.daily[i].weather[0].icon +"@2x.png",
                    icon_small: "http://openweathermap.org/img/wn/"+ forecast.daily[i].weather[0].icon +".png",
                    maxtemp: forecast.daily[i].temp.max,
                    mintemp: forecast.daily[i].temp.min
                }
                forecastData.push(resultCurrent);
            }
            console.log(forecastData);
            return forecastData;
        })
    }

    function buildCurrentCard(currentObject){
        // $.get(weatherURL, {
        //         q: "San Antonio, Tx, US",
        //         appid: owmKey,
        //         units: "imperial"
        //     }).done(function(weather){
        //         console.log(weather);
            let cardHTML = "";
            // let iconURL = "http://openweathermap.org/img/wn/"+ weather.weather[0].icon +"@2x.png";
            cardHTML += "<div class='card m-2'>"
            cardHTML += "<div class='card-header bg-success'>Today's Weather</div>"
            cardHTML += "<img src='" + currentObject.icon_large + "' class='card-img-top img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center pb-3'>Currently: "+ parseInt(currentObject.temp) +" °F</h5>"
            cardHTML += "<p class='card-text'>Description: <span class='font-weight-bold'>"+ currentObject.description +"</span></p>"
            cardHTML += "<p class='card-text'>Feels like: <span class='font-weight-bold'>"+ parseInt(currentObject.feels) +" °F</span></p>"
            cardHTML += "<p class='card-text'>Humidity: <span class='font-weight-bold'>"+ currentObject.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#data-testing").append(cardHTML);
            // })
    }
    $(document).ready(function(){
        console.log("ready");
        getCurrentData()
            .then((data) => {
                let currentObject = formatCurrentData(data);
                // console.log("current object: ", currentObject);
                buildCurrentCard(currentObject);
            })

        // buildCurrentCard(currentData);
        // console.log("Run getCurrent Function: ")
        // getCurrentData();

        // console.log("Run getForecast Function: ")
        // getForecastData();

    //     $.get(onecallURL, {
    //         lat: 29.42,
    //         lon: -98.49,
    //         appid: owmKey,
    //         units: "imperial",
    //         exclude: "minutely, hourly"
    //     }).done(function(forecast){
    //         console.log(forecast);
    //     })
    })

})();





// <div class="card">
//     <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Card title</h5>
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
// </div>