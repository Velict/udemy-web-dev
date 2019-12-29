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
var latLon;
var IP;

function doLookup(IP){
    if (IP==null){
        IP = '8.8.8.8'
    }
    else{
        IP = document.getElementById('ip');
    }
    const url='https://www.ipinfo.io/' + IP + '?token=7fcba63eeb5f7a';
    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{ console.log(res)})
    .catch (error=>console.log(error);
}

    // get ip to be used from form
    // get ipinfo using ip http request
    // get lat & lng from http response

    // initMap(lat, lng);


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
