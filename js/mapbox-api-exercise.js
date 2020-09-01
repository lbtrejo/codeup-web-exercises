"use strict";

let restaurants = [
    {
        // name: "Smashing Crab " + String.fromCodePoint(0x1F980),
        address: "8910 Bandera Rd #305, San Antonio, TX 78250",
        color: '#FFC5A7',
        description: '<h3>Smashin Crab &#x1F980</h3><p>Delicious seafood boils! <a href="https://www.smashincrab.com/" target="_blank" title="Opens in a new window">Visit their site</a></p>'
    },
    {
        // name: "El Torito " + String.fromCodePoint(0x1F32E),
        address: "5314 S Presa St, San Antonio, TX 78223",
        color: '#C5A7FF',
        description: '<h3>El Torito &#x1F32E</h3><p>No frills homestyle Mexican comfort food! <a href="https://www.yelp.com/biz/torito-mexican-restaurant-san-antonio" target="_blank" title="Opens in a new window">See their Yelp reviews!</a></p>'
    },
    {
        // name: "Cured " + String.fromCodePoint(0x1F969),
        address: "306 Pearl Pkwy, San Antonio, TX 78215",
        color: '#A7FFC5',
        description: '<h3>Cured &#x1F969</h3><p>Wonderful charcuterie! <a href="https://curedatpearl.com/" target="_blank" title="Opens in a new window">Visit their site</a></p>'
    }
    ];

mapboxgl.accessToken = mapboxToken;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-98.491142, 29.424349],
    zoom: 10
});

restaurants.forEach(function(restaurant){
    geocode(restaurant.address, mapboxToken)
        .then(function(result){
            let marker = new mapboxgl.Marker({color: restaurant.color})
                .setLngLat(result)
                .addTo(map);
            let popup = new mapboxgl.Popup({anchor: 'top'})
                // .setLngLat(result)
                // .setText(restaurant.name)
                .setHTML(restaurant.description)
                .addTo(map);

            marker.setPopup(popup);
            marker.togglePopup(popup);
        });
});

let zoomSelect = document.getElementById("zoom-select");

zoomSelect.addEventListener('change', function(event){
    map.setZoom(event.target.value);
});

const mapThis = (event)=>{
    event.preventDefault(); // stop the browser from refreshing the page on form submit
    let userAddress = document.getElementById('userAddress').value;
    geocode(userAddress, mapboxToken)
        .then(function(result){
            let map2 = new mapboxgl.Map({
                container: 'map2',
                style: 'mapbox://styles/mapbox/dark-v10',
                center: result,
                zoom: 13
            });
            let marker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map2);
            let popup = new mapboxgl.Popup({anchor: 'top'})
                .setText(userAddress.toString())
                .addTo(map2);
            marker.setPopup(popup);
            marker.togglePopup(popup);
        });
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("formSubmit").addEventListener('click', mapThis);
})
