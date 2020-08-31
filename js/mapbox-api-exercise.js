"use strict";

let restaurants = [
    {
        name: "Smashing Crab " + String.fromCodePoint(0x1F980),
        address: "8910 Bandera Rd #305, San Antonio, TX 78250",
        color: '#FFC5A7'
    },
    {
        name: "El Torito " + String.fromCodePoint(0x1F32E),
        address: "5314 S Presa St, San Antonio, TX 78223",
        color: '#C5A7FF'
    },
    {
        name: "Cured " + String.fromCodePoint(0x1F969),
        address: "306 Pearl Pkwy, San Antonio, TX 78215",
        color: '#A7FFC5'
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
                .setText(restaurant.name)
                .addTo(map);

            marker.setPopup(popup);
            marker.togglePopup(popup);
        });
});
