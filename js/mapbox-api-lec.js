/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map

// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]

// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to Dallas area using the coordinates [-96.8057, 32.7787]
// USING SATX COORDS BC EXTRA

// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
//     center: [-98.4916, 29.4260], // starting position [lng, lat]; these coords are the codeup building in SATX
//     zoom: 10 // starting zoom
// });

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-96.8084, 32.7799]. This marker will mark the Sixth Floor Museum on our map.
// TODO TOGETHER: Change the color of the marker

// var markerColor = {
//     color: "#6de25b"
// }
//
// var marker = new mapboxgl.Marker(markerColor)
//     .setLngLat([-98.4916, 29.4260])
//     .addTo(map);




// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"

// var popup = new mapboxgl.Popup()
//     .setLngLat([-98.489615, 29.426827])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map)


// TODO TOGETHER: Comment out the popup we just added. Add a popup to the Sixth Floor Musume marker.

// var alamoPopup = new mapboxgl.Popup({anchor: "top-left"})
//     .setText("Remember The Alamo!")
//     .addTo(map)
//
// marker.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.

geocode('300 Alamo Plaza, San Antonio, Texas 78205', mapboxToken)
    .then(function(result){
        console.log(result);
        mapboxgl.accessToken = mapboxToken;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            // center: result, // starting position [lng, lat]; these coords are the codeup building in SATX
            zoom: 10 // starting zoom
        });
        //TODO: Using the geocode method above, add a marker at Codeup to the map
        var markerColor = {
            color: "#6de25b"
        };
        var marker = new mapboxgl.Marker(markerColor)
            .setLngLat(result)
            .addTo(map);

        //TODO: Instead of setCenter try using map.jumpTo()

        // map.jumpTo({center: result});

        //TODO: Instead of setCenter try using map.flyTo()

        map.flyTo({center: result});  // cool animation effect :)

    });

geocode('Mailgun San Antonio', mapboxToken)
    .then(function(result){
        console.log("Mailgun geocode: ", result);
    })


// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -96.8084, lat: 32.7799} to get a physical address for the Sixth Floor Musume

reverseGeocode({lng: -96.8084, lat: 32.7799}, mapboxToken)
    .then(function(result){
        console.log("Reverse Geocode: ", result);
    });

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method

reverseGeocode({lng: -98.4951, lat: 29.4246}, mapboxToken)
    .then(function(result){
        console.log("Reverse Mailgun Geocode: ", result);
    });