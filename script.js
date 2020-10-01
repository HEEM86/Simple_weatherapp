function createLocationList(locationList) {
    $("#location-list").empty();
  
    var keys = Object.keys(locationList);
    for (var i = 0; i < keys.length; i++) {
      var LocationEntry = $("<button>");
      locationListEntry.addClass("list-group-item list-group-item-action");
  
      var splitStr = keys[i].toLowerCase().split(" ");
      for (var j = 0; j < splitStr.length; j++) {
        splitStr[j] =
          splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
      }
      var titleCasedCity = splitStr.join(" ");
      locationListEntry.text(titleCasedCity);
  
      $("#location-list").append(locationListEntry);
    }
  }