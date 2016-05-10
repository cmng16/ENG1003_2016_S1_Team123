// Code for the Add Location page.
if (!document.getElementById("mapsapi"))
{
    // Only create the Google Maps API script tag if we haven't already 
    // added it to the page.
    var script = document.createElement("script");
    script.setAttribute("src", "https://maps.googleapis.com/maps/api/js?v=3");
    script.setAttribute("id", "mapsapi");
    var bodyNode = document.getElementsByTagName("body")[0];
    bodyNode.appendChild(script);
}
 
function initMap()
{
    // Display a map, centred on Monash Clayton.
    var monashClaytonPosition = {lat: -37.912, lng: 145.131};
    var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: monashClaytonPosition
    });
 
    // Display an overlay with a location pin and label.
    var newHorizonsPosition = {lat: -37.908042, lng: 145.1325757};
    var infowindow = new google.maps.InfoWindow;
    var marker = new google.maps.Marker({
            position: newHorizonsPosition,
            map: map
    });
    infowindow.setContent("ENG1003 Clayton prac classes");
    infowindow.open(map, marker);
}
 
document.getElementById("outputArea").innerHTML = '<div id="map" style="height:  600px; width: 100%;">Loading map...</div>';
 
// Give maps API time to load, then initialise map.
setTimeout(initMap, 1000);
