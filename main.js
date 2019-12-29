// var geo = document.getElementById('geo');
// function getLocation(){
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else {
//         x.innerHTML = "Geolocation not supported by this browser.";      
//         }
// }


var map;
var lat, lng;


function searchIP{
    
    // get ip to be used from form
    // get ipinfo using ip http request
    // get lat & lng from http response 

    lat = document;
    lng = document;

    initMap(lat, lng);
}

function initMap(lat, lng){
    navigator.geolocation.getCurrentPosition(function(position){
    lat = Number(position.coords.latitude.toFixed(2));
    lng = Number(position.coords.longitude.toFixed(2));

    if (lat && lng){
            map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 10,
            mapTypeId: 'satellite'
        });
    }
    else{
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.26, lng: -72.06},
            zoom: 10,
            mapTypeId: 'satellite'
        });
    }
})};
