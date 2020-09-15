(function(){
    "use strict";

    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';

    $(document).ready(function(){
        console.log("ready");

        $.get(weatherURL, {
            q: "San Antonio, Tx, US",
            appid: owmKey,
            units: "imperial"
        }).done(function(weather){
            console.log(weather);
            let cardHTML = "";
            let iconURL = "http://openweathermap.org/img/wn/"+ weather.weather[0].icon +"@2x.png";
            console.log("iconURL: ", iconURL);
            cardHTML += "<div class='card m-2'>"
            cardHTML += "<div class='card-header bg-success'>Today's Weather</div>"
            cardHTML += "<img src='" + iconURL + "' class='card-img-top img-fluid mx-auto' style='max-width: 50%; height: auto;' alt='weather icon'>";
            cardHTML += "<div class='card-body'>";
            cardHTML += "<h5 class='text-center'>Currently: "+ parseInt(weather.main.temp) +" °F</h5>"
            cardHTML += "<p class='card-text text-center'>Description: <span class='font-weight-bold'>"+ weather.weather[0].description +"</span></p>"
            cardHTML += "<p class='card-text text-center'>Feels like: <span class='font-weight-bold'>"+ parseInt(weather.main.feels_like) +" °F</span></p>"
            cardHTML += "<p class='card-text text-center'>Humidity: <span class='font-weight-bold'>"+ weather.main.humidity +"%</span></p>"
            cardHTML += "</div>"

            $("#data-testing").append(cardHTML);
        })
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