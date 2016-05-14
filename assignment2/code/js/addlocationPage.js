// Code for the Add Location page.

function addLocation()
{
    var address = document.getElementById("location")
    var nicknameRef = document.getElementById("nickname")
     geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location;
            });
        } 
     else 
     {
        alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

//Adds current location to the page
function addCurrentLocation()
{
    if (navigator.geolocation)
    {     
        positionOptions = {
            enableHighAccuracy: true,
            timeout: Infinity, 
            maximumAge: 0
        }; 

        displayElementsWithClass("gpsError", false);
        navigator.geolocation.watchPosition(showCurrentLocation, errorHandler, positionOptions);
    }
    else
    {
        displayElementsWithClass("gpsValue", false);
    }

    function errorHandler(error)
    {
        if (error.code == 1)
        {
           alert("Location access denied by user.");
        }
        else if (error.code == 2)
        {
           alert("Location unavailable.");
        }
        else if (error.code == 3)
        {
           alert("Location access timed out");
        }
        else
        {
           alert("Unknown error getting location.");
        }
    }

    function showCurrentLocation(position)
    {
        // Demonstrate the current latitude and longitude:
        document.getElementById("latValue").innerHTML = Number(position.coords.latitude).toFixed(4);
        document.getElementById("longValue").innerHTML = Number(position.coords.longitude).toFixed(4);
        document.getElementById("accuracyValue").innerHTML = Number(position.coords.accuracy).toFixed(2);  
    }
  
};
 
// Give maps API time to load, then initialise map.
setTimeout(initMap, 1000);
