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
var marker;
var lat, lng;
var latLon;
var IP;
var coords;

// get ip to be used from form
function validate(){
    var input = document.forms["ipForm"]["ip"].value;
    console.log(input);
    if (form == "" || input == null){
        alert("Please enter an ip address.")
        return false;
    }
    else{
        doLookup(input);
    }
}

// save json response
function doLookup(IP){
    console.log(IP);
    if (IP==null){
        IP = '8.8.8.8'
    }
    else{
        IP = document.getElementById('ip').ip;
    }
    console.log(IP);

    const url='https://www.ipinfo.io/' + IP + '?token=secret';
    
    fetch(url)
    .then(data=>{return data.json()})
    .then(res=>{ console.log(res)})
    .catch (error=>{console.log(error)})

}
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