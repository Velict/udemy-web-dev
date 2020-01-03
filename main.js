var map;
var marker;
var lat, lng;
var latLon;
var IP;
var coords;

// var geo = document.getElementById('geo');
// function getLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         x.innerHTML = "Geolocation not supported by this browser.";      
//         }
// }

// get ip 
// save json response

function doLookup(){
   // IP = document.getElementById('ip').value;
   // var url='ipinfo.io/8.8.8.8/?token=7fcba63eeb5f7a';

    $.getJSON('https://ipinfo.io/geo', function(response) {
        var loc = response.loc.split(',');
        var coords = {
            latitude: loc[0],
            longitude: loc[1]
        };
        console.log(coords);
    });
};
// parse response
// // if enabled 
// //     navigator.geolocation.getCurrentPosition(function(position){ 
//     lat = Number(position.coords.latitude.toFixed(2));
//     lng = Number(position.coords.longitude.toFixed(2));
    
// recreate map
function initMap(){
    coords = {lat: 42.2626, lng: -71.8023};
    map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: coords});
    marker = new google.maps.Marker({position: coords, map: map});
};
