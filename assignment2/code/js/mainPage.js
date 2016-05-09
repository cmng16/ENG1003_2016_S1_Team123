// Code for the main app page (locations list).
  
// This is sample code to demonstrate navigation.
// You need not use it for final app.
//We can push a location which is added through the 'add location' page into this array.
//This also needs to be saved in localStorage
var savedLocations = []

function viewLocation(locationName)
{
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // And load the view location page.
    location.href = 'viewlocation.html';
}
