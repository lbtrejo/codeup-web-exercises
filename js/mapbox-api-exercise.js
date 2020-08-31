"use strict";

geocode("8910 Bandera Rd #305, San Antonio, TX 78250", mapboxToken)
    .then(function(result){
        console.log(result);
        mapboxgl.accessToken = mapboxToken;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v10',
            zoom: 8
        });
        map.flyTo({center: result});
        let marker = new mapboxgl.Marker({color: '#6edf7a'})
            .setLngLat(result)
            .addTo(map);
        let popup = new mapboxgl.Popup({anchor: 'top'})
            // .setLngLat(result)
            .setText("Smashin' Crab " + String.fromCodePoint(0x1F980))
            .addTo(map);

        marker.setPopup(popup);
        marker.togglePopup(popup);
    });