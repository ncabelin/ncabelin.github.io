var app = {
  // results array of GPS calculation, used to generate new table with distance
  results: [],
  // coordinates
  latCheck: 0,
  lngCheck: 0,
  lengthLoc: locations.length,
  table: $('#tableSource'),
  loading: function() {
      $('#loading').toggle();
  },
  startApp: function() {
    var checkGPSbtn = $('#checkGPS');
    var checkLocbtn = $('#checkLocation');
    var checkAddbtn = $('#checkAddress');
    var inputAdd = $('#inputAddress');
    var listAllBtn = $('#listAll');
    var contacts = $('#contacts');
    var help = $('#help');
    var home = $('#home');
    var about = $('#about');
    var modalTitle = $('.modal-title');
    var modalBody = $('.modal-body');
    var openModal = function() { $('#myModal').modal(); };
    var options, userList;

    listAllBtn.click(function() {
      app.animateHeader();
      app.table.empty();
      app.listAll();
      app.modalSet($('.name'));
    });

    home.click(function() {
      $('#loading').css('display', 'none');
      app.table.empty();
      $('.formSearch').css('display', 'none');
      checkLocbtn.css('display', 'inline');
      $('.navbar-fixed-top').animate({
        height: '100%'
      }, 200);
    });

    contacts.click(function() {
      modalTitle.html(contactsData[0].name);
      var content = contactsData[0].info;
      modalBody.html(content);
      openModal();
    });

    help.click(function() {
      modalTitle.html('Instructions');
      var content = '<ol><li>To check nearest psych unit locations, click <button class="btn btn-primary">By geolocation</button></li>' +
        '<li>To check psych unit nearest to a zipcode, click <button class="btn btn-primary">By zipcode</button>, then type zipcode in the input field <input placeholder="zipcode"> and click <button class="btn btn-success"><i class="fa fa-search"></i></button></li>' +
        '<li>Click <button class="btn btn-success">Show All</button> to display all data without finding out distances</li>' +
        '<li>To search table put your searchword in the input box <input placeholder="search table" /></li>' +
        '<li>Click psych unit name to access more info (e.g. telephone numbers)</li></ol>';
      modalBody.html(content);
      openModal();
    });

    about.click(function() {
      modalTitle.html('About');
      var content = '<h5><strong>Psych Unit Locator is a tool for calculating distances between L.A. County mental health facilities and a given location. It also provides ease of search information on a tabular display.<br><br>It uses zipcode from the user input or geolocation coordinates from the user device. This web app uses the Google maps Places API for querying geographic coordinates for the zipcode.</strong></h5><br><br><i>This web application software by Potentum Studios is for informational purposes only.<br><br>Upon use of the web application software "L.A. County Psych Unit Locator", user agrees that information presented may change without further notice and will not hold the software developer accountable for any discrepancies.<br>Please update the software developer upon any changes in the information submitted.</i><br><br>Contact us at <a href="tel:3232076632">(323)207-6632.</a> or go to <a href="http://www.potentum.com">www.potentum.com</a>';
      modalBody.html(content);
      openModal();
    });

    // check user's geographic coordinates to find miles away.
    checkGPSbtn.click(function() {
      $('.formSearch').css('display', 'none');
      checkLocbtn.css('display', 'inline');
      app.animateHeader();
      app.loading();
      app.results = [];
      app.checkGPS();
    });

    checkLocbtn.click(function() {
      $('#inputAddress, #checkAddress').css('display', 'inline');
      checkLocbtn.css('display', 'none');
    });

    // check user's inputted address to find miles distance of locations.
    checkAddbtn.click(function() {
      var name = inputAdd.val();
      var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(name);
      if (isValidZip) {
        app.animateHeader();
        app.message('');
        app.loading();
        app.table.empty();
        app.results = [];
        app.checkAddress(locations, name);
        app.modalSet($('.name'));
      } else {
        app.message('Invalid zipcode...');
        setTimeout(function() { app.message(''); }, 5000);
      }
    });

  },

  animateHeader: function() {
    $('.navbar-fixed-top').animate({
      height: '90px'
    }, 200);
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
        '</td><td class="address">' + data.address + '</td><td class="tel"><a href="tel:' + data.tel + '">' + data.tel + '</a></td>');
    });

    // list.js parameters set-up
    options = { valueNames: [ 'name', 'info', 'tel' ] };
    userList = new List('tableSource', options);
  },

  // adds table to id, and puts sortable val with valDesc as placeholder
  addTableDiv: function(id, val, valDesc) {
    console.log('adding Table');
    id.append('<input class="search text-center center-block" placeholder="search table"><h4 class="text-center">Sort by : ' +
    '<button class="sort btn btn-info" data-sort="name">Name</button> <button id="val" class="sort btn btn-info" ' +
    'data-sort="' + val + '">' + valDesc + '</button></h4><table><thead></thead>' +
    '<tbody class="list"></tbody></table>');
  },

  // populates table
  createTable: function(table) {
    app.results.forEach(function(data, index) {
      $('.list').append('<tr><td class="name">' + data.name + '</td><td class="distance">' +
        data.distance + '</td><td class="info">' +
          data.info + '</td></tr>');
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
    for (var i = 0; i < app.lengthLoc; i++) {
      var dist = Math.floor(app.checkDistance(app.latCheck, app.lngCheck, data2[i].lat, data2[i].long)) + ' miles';
      app.results.push({
        distance: dist,
        name: data2[i].name,
        address: data2[i].address,
        tel: data2[i].tel,
        info: data2[i].info
      });
      if (i == app.lengthLoc - 1) {
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
