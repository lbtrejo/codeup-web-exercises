(function(){
    "use strict";

    const onecallURL = 'https://api.openweathermap.org/data/2.5/onecall';
    const homeCoords = [-98.4951, 29.4246];

    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v9",
        zoom: 10,
        center: [homeCoords[0], homeCoords[1]]
    })

    function getCurrentData(lon, lat){
        return new Promise((resolve) => {
            $.ajax({
                url: onecallURL,
                type: 'GET',
                data: {
                    lat: lat,
                    lon: lon,
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

    function getForecastData(lon, lat){
        return new Promise((resolve) => {
            $.ajax({
                url: onecallURL,
                type: 'GET',
                data: {
                    lat: lat,
                    lon: lon,
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
            cardHTML += "<div class='card m-2 col-12'>"
            cardHTML += "<div class='card-header bg-success'>Today's Weather</div>"
            cardHTML += "<img src='" + currentObject.icon_large + "' class='card-img-top img-thumbnail img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center pb-3'>Currently: "+ parseInt(currentObject.temp) +" °F</h5>"
            cardHTML += "<p class='card-text'>Description: <span class='font-weight-bold'>"+ currentObject.description +"</span></p>"
            cardHTML += "<p class='card-text'>Feels like: <span class='font-weight-bold'>"+ parseInt(currentObject.feels) +" °F</span></p>"
            cardHTML += "<p class='card-text'>Humidity: <span class='font-weight-bold'>"+ currentObject.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#current-row").append(cardHTML)
    }

    function buildForecastCards(forecastArray){
        forecastArray.forEach(function(forecastObject){
            let cardHTML = "";
            cardHTML += "<div class='card m-2 col-12 col-md-5'>"
            cardHTML += "<div class='card-header bg-success'>"+ forecastObject.date +"</div>"
            cardHTML += "<img src='" + forecastObject.icon_large + "' class='card-img-top img-thumbnail img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center pb-3'>Low: "+ parseInt(forecastObject.mintemp) +" °F / High: " + parseInt(forecastObject.maxtemp) + " °F</h5>"
            cardHTML += "<p class='card-text'>Description: <span class='font-weight-bold'>"+ forecastObject.description +"</span></p>"
            cardHTML += "<p class='card-text'>Pressure: <span class='font-weight-bold'>"+ parseInt(forecastObject.pressure) + "</span></p>"
            cardHTML += "<p class='card-text'>Humidity: <span class='font-weight-bold'>"+ forecastObject.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#forecast-row").append(cardHTML)
        })
    }

    function setMarker(lon, lat){
        let marker = new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .addTo(map);
    }

    function mapFly(lon, lat){
        console.log("lon, lat: ", lon + ", " + lat);
        map.flyTo({center: [lon, lat], zoom: 9});
    }


    $("#search-btn").click(function(event){
        event.preventDefault();
        let userInput = $("#search-input").val();

        geocode(userInput, mapboxToken)
            .then(function(result){
                $("#current-city").empty().text(result[1])
                setMarker(result[0][0], result[0][1]);
                mapFly(result[0][0], result[0][1])
                getCurrentData(result[0][0], result[0][1])
                    .then((data) => {
                        let currentObject = formatCurrentData(data);
                        $("#current-row").empty();
                        buildCurrentCard(currentObject);
                    })
                getForecastData(result[0][0], result[0][1])
                    .then((data) => {
                        let forecastArray = formatForecastData(data);
                        $("#forecast-row").empty();
                        buildForecastCards(forecastArray);
                    })
            })
    })

    $(document).ready(function(){
        console.log("ready");
        getCurrentData(homeCoords[0], homeCoords[1])
            .then((data) => {
                let currentObject = formatCurrentData(data);
                buildCurrentCard(currentObject);
            })
        // TODO Current weather may load in after forecast, fix placement in HTML
        getForecastData(homeCoords[0], homeCoords[1])
            .then((data) => {
                let forecastArray = formatForecastData(data);
                console.log("Forecast Array: ", forecastArray);
                buildForecastCards(forecastArray);
            })
        setMarker(homeCoords[0], homeCoords[1]);

        map.on('click', function(e) {
// The event object (e) contains information like the
// coordinates of the point on the map that was clicked.
            console.log('A click event has occurred at ' + e.lngLat);
        });
    })
})();
