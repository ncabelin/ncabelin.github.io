var app = {
  // results of GPS calculation
  results: [],
  // coordinates
  latCheck: 0,
  lngCheck: 0,
  //length: locations.length,
  table: $('#tableSource'),
  loading: function() {
      $('#loading').toggle();
  },
  startApp: function() {
    var checkGPSbtn = $('#checkGPS');
    var checkAddbtn = $('#checkAddress');
    var inputAdd = $('#inputAddress');
    var listAllBtn = $('#listAll');
    var contacts = $('#contacts');
    var help = $('#help');
    var options, userList;

    this.listAll();
    this.modalSet($('td.name'));

    listAllBtn.click(function() {
      app.table.empty();
      app.listAll();
      app.modalSet($('.name'));
    });

    help.click(function() {
      $('.modal-title').html('Instructions');
      var content = '<ol><li>To check nearest psych unit locations, click <strong>Nearby button</strong></li>' +
        '<li>To check psych unit nearest to a zipcode, type zipcode in the input field <br>and click <i class="fa fa-search"></i></li>' +
        '<li>Click menu button List to display all data without finding out distance</li>' +
        '<li>To filter table put searchword in the input box labeled Filter List</li>' +
        '<li>Click psych unit name to access more info (e.g. telephone numbers)</li></ol>';
      $('.modal-body').html(content);
      $('#myModal').modal();
    });

    // check user's geographic coordinates to find miles away.
    checkGPSbtn.click(function() {
      app.loading();
      app.results = [];
      app.checkGPS();
    });

    // check user's inputted address to find miles distance of locations.
    checkAddbtn.click(function() {
      var name = inputAdd.val();
      var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(name);
      if (isValidZip) {
        app.message('');
        app.loading();
        app.table.empty();
        app.results = [];
        app.checkAddress(locations, name);
        app.modalSet($('.name'));
      } else {
        app.message('Invalid zipcode, please check again');
        setTimeout(function() { app.message(''); }, 5000);
      }
    });

  },

  modalSet: function(className) {
    className.click(function(data) {
      console.log('click');
      var text = this.textContent;
      locations.forEach(function(data, index) {
        if (data.name == text) {
          $('.modal-title').html(text);
          var content = data.info + '<br><br><em>' + data.address + '</em><br><a href="tel:' + data.tel + '">' + data.tel + '</a>';
          $('.modal-body').html(content);
          $('#myModal').modal();
        }
      });
    });
  },

  // delivers error messages
  message: function(msg) {
    $('.message').html(msg);
  },

  listAll: function() {
    app.addTableDiv(app.table, 'info', 'Info');

    // set-up first table with name,info and address by default
    locations.forEach(function(data) {
      $('.list').append('<tr><td class="name">' + data.name + '</td><td class="info">' + data.info +
        '</td>');
    });

    // list.js parameters set-up
    options = { valueNames: [ 'name', 'info', 'tel' ] };
    userList = new List('tableSource', options);
  },

  // adds table to id, and puts sortable val with valDesc as placeholder
  addTableDiv: function(id, val, valDesc) {
    console.log('adding Table');
    id.append('<input class="search text-center center-block" placeholder="Filter List"><h4 class="text-center">Sort by : ' +
    '<button class="sort btn btn-info" data-sort="name">Name</button> <button id="val" class="sort btn btn-info" ' +
    'data-sort="' + val + '">' + valDesc + '</button></h4><table><thead></thead>' +
    '<tbody class="list"></tbody></table>');
  },

  // populates table
  createTable: function(table) {
    app.results.forEach(function(data, index) {
      console.log('creating Table ' + index);
      $('.list').append('<tr><td class="name">' + data.name + '</td><td class="distance">' +
        data.distance + '</td></tr>');
    });
    options = { valueNames: [ 'name', 'distance'] };
    userList = new List('tableSource', options);
  },

  // checks 2 coordinates' distance
  checkDistance: function(lat1, lon1, lat2, lon2, unit) {
    console.log('checking Distance');
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if ( unit == 'K') { dist = dist * 1.609344; }
    if ( unit == 'N') { dist = dist * 0.8684; }
    return dist;
  },

  // checks geolocation coordinates
  checkGPS: function() {
    console.log('checking GPS');
    if (navigator.geolocation) {
      // ask for gps coordinates
      navigator.geolocation.getCurrentPosition(function(position) {
        app.lngCheck = position.coords.longitude;
        app.latCheck = position.coords.latitude;
        app.table.empty();
        app.calcResults(locations);
        app.loading();
        app.modalSet($('.name'));
        if (app.lngCheck === 0) {
          console.log('error');
        }
      });
    } else {
      app.message('Error, no geolocator found in your device');
    }
  },

  checkAddress: function(data3, name) {
    console.log('checking Address');
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': name}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        app.lngCheck = results[0].geometry.location.lng();
        app.latCheck = results[0].geometry.location.lat();
        app.calcResults(locations);
        app.loading();
        app.modalSet($('.name'));
        if (app.lngCheck === 0) {
          console.log('error');
        }
      } else {
        app.message('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  calcResults: function(data2) {
    console.log('calculating results');
    for (var i = 0; i < 33; i++) {
      var dist = Math.floor(app.checkDistance(app.latCheck, app.lngCheck, data2[i].lat, data2[i].long)) + ' miles';
      app.results.push({
        distance: dist,
        name: data2[i].name,
        address: data2[i].address,
        tel: data2[i].tel,
        info: data2[i].info
      });
      if (i == 32) {
        app.addTableDiv(app.table, 'distance', 'Distance');
        app.createTable();
        $('#val').trigger('click');
      }
    }
  }
};

function callSuccess() {
  app.startApp(); // start App
}

function callError() {
  app.message('Error loading google Maps Places API'); // call Error
}
