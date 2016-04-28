/** mLocator mental health hospital locator app
  * 1. gps location asked from user
  * 2. user sees table list of nearest 5 hospitals
  * 3. markers placed on google map
  * 4.
*/

  /* function callback on successful load of google Maps */
var myLatLong;
function googleSuccess() {
  /* constructor for ko observable list */
  $('#gps').click(function() {
  });

  function Placed(name, address, tel, info, lat, long, miles) {
    var self = this;
    self.name = ko.observable(name);
    self.address = ko.observable(address);
    self.tel = ko.observable(tel);
    self.info = ko.observable(info);
    self.lat = ko.observable(lat);
    self.long = ko.observable(long);
    self.miles = ko.observable(miles);
  }

  function appViewModel() {
    var self = this;
    self.messageBox = ko.observable(); // error message
    self.placeTitle = ko.observable(); // modal title
    self.placeBody = ko.observable(); // modal body
    self.placeVal = ko.observable(); // input value
    self.places = ko.observableArray([]); // places array
    self.visibleTable = ko.observable(true);
    self.placeWikiUrl = ko.observable();

    self.hideTable = function() {
      self.showListButton(true);
      self.hideListButton(false);
      self.visibleTable(false);
    };

    self.showTable = function() {
      self.showButton(false);
      self.showListButton(false);
      self.hideListButton(true);
      self.visibleTable(true);
    };

    self.searchWord = ko.observable();
    self.showButton = ko.observable(false);
    self.showListButton = ko.observable(false);
    self.hideListButton = ko.observable(true);

    /* generates initial ko.observable array places */
    function placeDestinations() {
      for (var i = 0; i < locations.length ; i++ ) {
        self.places.push(new Placed(locations[i].name, locations[i].address, locations[i].tel, locations[i].info, locations[i].lat, locations[i].long));
      }
    }

    /* filters displayed table list */
    self.filterList = function() {
      var searchReg = new RegExp(self.searchWord(), 'i');
      self.places().length = 0;
      locations.forEach(function(data) {
        var str = data.name.toLowerCase();
        var test = searchReg.test(str);
        if (test) {
          self.places.push(new Placed(data.name, data.address, data.tel, data.info, data.lat, data.long));
        }
      });
      markers.forEach(function(placedMarker) {
        placedMarker.setMap(null);
      });
      self.updateMarkers();
    };

    var infowindowArr = [];
    var markers = [];
    var markersPlaces = [];
    var map;
    var service;
    var infowindow;
    var losAngeles = new google.maps.LatLng(34.052,-118.243);

    /* Initializes google Map first */
    function initialize() {
      map = new google.maps.Map(document.getElementById('map'), {
          center: losAngeles,
          zoom: 10
        });
      console.log(map);
    }

    /* Sets the boundaries of the map based on pin locations */
    window.mapBounds = new google.maps.LatLngBounds();

    window.addEventListener('resize', function(e) {
      /* Makes sure the map bounds get updated on page resize */
      map.fitBounds(mapBounds);
      map.setZoom(10);
      map.setCenter(losAngeles);
    });

    initialize();

    /* Zoom out button */
    self.zoomOut = function() {
      map.setZoom(10);
      map.setCenter(losAngeles);
    };

    /* Adds a marker to the map by query */
    self.addMark = function(name, address, tel, info, lati, long) {

      var request = {
        location: losAngeles,
        radius: '1000',
        query: name
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, callback);


      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            addMarker(results[i]);
          }
        }
      }

      function addMarker(results) {
        var contentArea = '<strong>' + name + '</strong><br>' + info + '<br><em>' + address + '</em><br><a href="tel:' + tel +
          '">Call +' + tel + '</a>"';
        var infowindow = new google.maps.InfoWindow({
          content: contentArea,
          maxWidth: 200
        });
        var myLatLng = {lat: lati, lng: long};
        var marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'images/hospital-building.png',
          position: myLatLng
        });

        markers.push(marker);
        markersPlaces.push(name);
        infowindowArr.push(infowindow);

        marker.addListener('click', function() {
          /* Closes all infowindows first */
          var closeInfoWindow = function() {
            self.showButton(false);
            infowindowArr.forEach(function(x) {
             x.close();
            });
          };
          closeInfoWindow();
          /* Clicking anywhere in the map also calls closeInfoWindow */
          google.maps.event.addListener(map, 'click', closeInfoWindow);

          infowindow.open(map, marker);
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            markers.forEach(function(x, y) {
              x.setAnimation(null);
            });
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
          self.showButton(false);
        });
      } // end addMarker

      /* Gets wiki info displays it in hidden modal, closes other infoWindows and bounces current marker */
      self.viewIt = function(name) {
        var ind = markersPlaces.indexOf(name);
        map.setCenter(markers[ind].getPosition());
        map.setZoom(15);
        infowindowArr.forEach(function(x) {
          x.close();
        });
        infowindowArr[ind].open(map, markers[ind]);
        markers.forEach(function(x) {
          x.setAnimation(null);
        });
        markers[ind].setAnimation(google.maps.Animation.BOUNCE);
      };

      /* clicking place name on the table list cell invokes this function */
      self.viewMarker = function() {
        if (screenWidth < 600) {
          self.placeTitle(this.name());
          $('#modBody').html(this.info() + '<br><br>' + this.address() + '<br><br><a href="tel:' + this.tel() + '">Call ' + this.tel() + '</a>');
          $('#info').trigger('click');
        }
        self.viewIt(this.name());
        //self.showListButton(true);
        //self.hideListButton(false);
        //self.visibleTable(false);
        //self.showButton(true);
      };

      self.inputSearch = function() { // use value of input to search and view marker and wiki info

      };

    }; // end self.mark

    /* Adds all items in attractions array to self.places ko.observable(array)
     * by default
    */
    placeDestinations();

    /* Places markers on map based on current self.places ko.observable(array) */
    self.updateMarkers = function() {
      self.places().forEach(function(data, index) {
          self.addMark(data.name(), data.address(), data.tel(), data.info(), data.lat(), data.long());
      });
    };

    var sortedLocVal = [];
    var sortedVal = [];
    var sortedName = [];
    var sortedLocVal2 = [];
    var sortedArr = [];
    var sortedMiles = [];
    var sortedMiles2 = [];

    self.checkDistance = function(lat, lng, dest, nme) {
      var directionsService = new google.maps.DirectionsService();
      var latlng = {lat: lat, lng: lng};
      var request = {
        origin      : latlng,
        destination : dest,
        travelMode  : google.maps.DirectionsTravelMode.DRIVING
      };

      directionsService.route(request, function(response, status) {
        if ( status == google.maps.DirectionsStatus.OK ) {
          console.log( response.routes[0].legs[0].distance.value + ' : ' + response.routes[0].legs[0].distance.text + ' : ' + dest); // the distance in metres
          sortedVal.push( { name: nme, val: response.routes[0].legs[0].distance.text} );
          sortedLocVal.push(response.routes[0].legs[0].distance.value);
          sortedLocVal2.push(response.routes[0].legs[0].distance.value);
          sortedMiles.push(response.routes[0].legs[0].distance.text);
          sortedName.push(nme);
        }
        else {
          // oops, there's no route between these two locations
          // every time this happens, a kitten dies
          // so please, ensure your address is formatted properly
        }
      });
    };

    self.addGeo = function() {
      $('.loading').css('display', 'inline');
      if (navigator.geolocation) {
        // ask for gps coordinates
        navigator.geolocation.getCurrentPosition(function(position) {
          var long = position.coords.longitude;
          var lati = position.coords.latitude;
          for (var i = 0; i < locations.length; i++) {
            self.checkDistance(lati, long, locations[i].address, locations[i].name);
          }
          setTimeout(function()
            {
              sortedLocVal.sort(function(a, b){return a-b;});
              console.log(sortedLocVal);
              console.log(sortedLocVal2);
              console.log(sortedName);
              for (var j = 0; j < 5; j++) {
                var indexed = sortedLocVal2.indexOf(sortedLocVal[j]);
                console.log(indexed);
                sortedArr.push(sortedName[indexed]);
                sortedMiles2.push(sortedMiles[indexed]);
              }
              console.log(sortedArr);
              self.places().length = 0;
              locations.forEach(function(data) {
                var check = sortedArr.indexOf(data.name);
                if (check != -1) {
                  var miles = sortedMiles2[check];
                  self.places.push(new Placed(data.name, data.address, data.tel, data.info, data.lat, data.long, miles));
                }
              });
              markers.forEach(function(placedMarker) {
                placedMarker.setMap(null);
              });
              self.updateMarkers();
              $('.loading').css('display', 'none');
            }, 3000);

          });
        } else {
          alert('No geolocation available in your device');
        }
      };
        self.updateMarkers();
    }
    /* by default place all markers */
      ko.applyBindings(new appViewModel()); // start app
}


function googleError() {
  function errorViewModel() {
    this.titleMsg = ko.observable('Sorry, Error loading Map !');
  }

  ko.applyBindings(new errorViewModel());
}
