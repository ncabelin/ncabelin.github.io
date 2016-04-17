
function Placed(name, url, img) { // constructor for ko observable list
  var self = this;
  self.name = ko.observable(name);
  self.url = ko.observable(url);
  self.img = ko.observable(img);
  
}

function appViewModel() {
  var self = this;
  self.placeVal = ko.observable(); // input value

  self.places = ko.observableArray([]); // places array

  var arrLOC = []; // array for autocomplete input field
  var attractions = [ // initial array of objects
  { loc: "Universal CityWalk", url: "http://www.universalstudioshollywood.com/", img: "images/universal.png" },
  { loc: "Disneyland Park", url: "http://www.disneyland.disney.go.com", img: "images/disney.png", 
  content: "Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955. It is the only theme park designed and built under the direct supervision of Walt Disney." },
  { loc: "Griffith Observatory", url: "http://wwww.griffithobservatory.com", img: "images/griffith.png" },
  { loc: "Hollywood Walk of Fame", url: "http://www.walkoffame.com", img: "images/walk.png" },
  { loc: "The Huntington Library, Art Collections, and Botanical Gardens", url: "http://www.huntington.org", img: "images/hunt.png", 
  content: "The Huntington Library is an institution that houses an extensive art collection. The property also includes approximately 120 acres of specialized botanical landscaped gardens, most notably the 'Japanese Garden', the 'Desert Garden', and the 'Chinese Garden' (Liu Fang Yuan)."},
  { loc: "Santa Monica Pier", url: "http://www.santamonicapier.org", img: "images/pier.png" },
  { loc: "Los Angeles County Museum of Art", url: "http://www.lacma.org", img: "images/lacma.png"},
  { loc: "Cathedral of Our Lady of the Angels", url: "http://www.olacathedral.org", img: "images/cath.png"},
  { loc: "Descanso Gardens", url: "https://www.descansogardens.org", img: "images/desc.png"},
  { loc: "The Getty Villa", url: "http://www.getty.edu/visit/villa", img: "images/getty2.png", content: "The Getty Villa is an educational center and museum dedicated to the study of the arts and cultures of ancient Greece, Rome, and Etruria. The collection has 44,000 Greek, Roman, and Etruscan antiquities dating from 6,500 BC to 400 AD, including the Lansdowne Heracles and the Victorious Youth."},
  { loc: "The Getty", url: "http://www.getty.edu", img: "images/getty.png", 
  content: "The Getty Center, in Los Angeles, California, is a campus of the Getty Museum and other programs of the Getty Trust. The $1.3 billion Center opened to the public on December 16, 1997[2] and is well known for its architecture, gardens, and views overlooking Los Angeles." },
  { loc: "Madame Tussauds Hollywood", url: "https://www2.madametussauds.com/hollywood/en", img: "images/madame.png" }
  ];

  function placeDestinations() { // generate ko.observable array of places
    for (var i = 0; i < attractions.length ; i++ ) {
      self.places.push(new Placed(attractions[i].loc, attractions[i].url, attractions[i].img)); // transfer to self.places ko observable
      arrLOC.push(attractions[i].loc)
    };   
  }

  $("#placeList").autocomplete({ // jQuery UI autocomplete
    source: arrLOC
  });

  var expand = false; 
  self.toggleView = function() { // toggle button for displaying or hiding places list table
    $(".collapsible").toggle("slow", function() {
      if (expand) {
        $("#x").attr("class", "fa fa-times")
        expand = false;
      } else {
        $("#x").attr("class", "fa fa-plus")
        expand = true;
      }
    })
  }

  function getWiki(name) { // gets Wikipedia entry, hardcoded empty summary returns
    var addText = "";
    if (name == "Disneyland Park") {
      addText = "<br>" + attractions[1].content;
    } else if (name == "The Getty") {
      addText = "<br>" + attractions[11].content;
    } else if (name == "The Getty Villa") {
      addText = "<br>" + attractions[10].content;
    } else if (name == "The Huntington Library, Art Collections, and Botanical Gardens") {
      addText = "<br>" + attractions[4].content;
    }
    var u = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + name + "&limit=1&namespace=0&format=jsonfm";
    $.ajax({
      url: u,
      type: 'GET',
      dataType: 'jsonp',
      data: {
          format:"json"
      },
  }).success(function(data) {
    var content = data[2][0];
    if (content == true || addText == "") {
      $("#floating-panel").html(content + "<br><a href='" + data[3][0] + "'>read more in wikipedia...</a>")
    } else {
      $("#floating-panel").html(name + addText + "<br><a href='" + data[3][0] + "'>read more in wikipedia..</a>")
    }
  });
  }

  function getWeather() { // Gets current weather in Los Angeles in fahrenheit from Openweather API
    $.get("http://api.openweathermap.org/data/2.5/weather?q=Los Angeles,CA&appid=f6528aa612e42b74b4f7bcf00cd1b0b1").success(function(data){
      var temp = (1.8 * (data["main"]["temp"] - 273)) + 32; // convert Kelvin to Fahrenheit
      var fTemp = Math.round(temp);
      $('#weather').html('Currently : ' + fTemp + 
        '&deg; F.<span class="openAttr"> powered by <a href="http://openweathermap.org">OpenWeather</a></span>')
    })
  }

  getWeather();

  var infowindowArr = [];
  var markers = [];
  var markersLoc = [];
  var markersPlaces = [];
  var map;
  var service;
  var infowindow;
  var losAngeles = new google.maps.LatLng(34.052,-118.243);

  function initialize() { // initialize google Map first
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 10
      });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
  });

  initialize();

  self.zoomOut = function() { // for the zoom button
    map.setZoom(10)
  }

  self.addMark = function(what, url) { // adds Marker to map
    var request = {
      location: losAngeles,
      radius: '1000',
      query: what
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  

    function callback(results, status) {
      var timeD = 0;
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          addMarker(results[i]);
        }
      }
    }


    function addMarker(placeData) {
      var index = (arrLOC.indexOf(placeData.name))
      var url = attractions[index].url;
      var imageURL = attractions[index].img
      var contentArea = "<img src='" + imageURL  + "' class='infoImg'><br><a href='" + url + "' target='_blank'><strong>" + placeData.name + "</strong></a><br>" + placeData.formatted_address;
      var infowindow = new google.maps.InfoWindow({
        content: contentArea,
        maxWidth: 200
      });
      var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: placeData.geometry.location

      });

      markers.push(marker)
      markersPlaces.push(placeData.name)
      markersLoc.push(placeData.geometry.location)
      infowindowArr.push(infowindow)

      marker.addListener('click', function() { // close other infowindows, then open infowindow, and animate marker
        $('#floating-panel').empty()
        closeInfoWindow = function() {
          infowindowArr.forEach(function(x) {
           x.close()
          })
        };
        closeInfoWindow();
        google.maps.event.addListener(map, 'click', closeInfoWindow);
        infowindow.open(map, marker);
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          markers.forEach(function(x, y) {
            x.setAnimation(null)
          })
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      });
    }

    self.viewIt = function(name) { 
      getWiki(name);
      var ind = markersPlaces.indexOf(name);
      map.setCenter(markers[ind].getPosition());
      map.setZoom(15);
      infowindowArr.forEach(function(x) {
        x.close()
      })
      infowindowArr[ind].open(map, markers[ind])
      markers.forEach(function(x) {
        x.setAnimation(null)
      })
      markers[ind].setAnimation(google.maps.Animation.BOUNCE)
      var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: markers[ind].getPosition(),
              pov: {
                heading: 34,
                pitch: 10
              }
            });
        map.setStreetView(panorama);
    }

    self.viewMarker = function() { // table td click calls this function
      self.viewIt(this.name())
    }

    self.inputSearch = function() { // use value of input to search and view marker and wiki info
      var inp = $('#placeList').val();
      self.viewIt(inp)
    }
  }

  placeDestinations(); // add all items in attractions array to self.places ko.observable(array)
  var timeD = 0;
  self.places().forEach(function(data, index) { // place markers in map for each places if 10 items or less, 
    if (index < 10) {  // gets around google maps API limit of 10 queries per second
      self.addMark(data.name(), data.url())
    } else {
      timeD += 1001
      setTimeout(function() { 
        self.addMark(data.name(), data.url())
      }, timeD )
    }
  }) 
}

ko.applyBindings(new appViewModel()) // start app
