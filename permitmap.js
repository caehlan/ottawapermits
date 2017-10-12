var beaches = [
  ["Bondi Beach", -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function initMap() {
  var infowindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: -33.9,
      lng: 151.2
    }
  });

  function placeMarker(loc) {
    var latLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.close();
      infowindow.setContent("<div id='infowindow'>" + loc[0] + "</div>");
      infowindow.open(map, marker);
    });
  }

  for (var i = 0; i < beaches.length; i++) {
    placeMarker(beaches[i]);
  }
}
