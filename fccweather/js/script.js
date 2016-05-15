$(function() {
  'use strict';
  // OpenWeather icon urls
  var fTemp;
  var fStatus = true; // temperature is Fahrenheit by default
  var icons = {
      "thunderstorm":"http://openweathermap.org/img/w/11", // id 200-232, 960-962,
      "drizzle":"http://openweathermap.org/img/w/09", // 300-321
      "rain":"http://openweathermap.org/img/w/10", // 500-531
      "snow":"http://openweathermap.org/img/w/13", // 600-622
      "atmosphere":"http://openweathermap.org/img/w/50", // 701-781
      "cleared":"http://openweathermap.org/img/w/01", // 800, 951-956
      "clouds":"http://openweathermap.org/img/w/03" // 801-804
      };
  function getIcon (x) {
    if (x > 199 && x < 233) {
      return icons.thunderstorm;
    } else if (x > 959 && x < 963) {
      return icons.thunderstorm;
    } else if (x > 299 && x < 322) {
      return icons.drizzle;
    } else if (x > 599 && x < 623) {
      return icons.snow;
    } else if (x > 700 && x < 782) {
      return icons.atmosphere;
    } else if (x > 951 && x < 957) {
      return icons.cleared;
    } else if (x > 800 && x < 805) {
      return icons.clouds;
    } else {
      return icons.cleared;
    }
  }
  if (navigator.geolocation) {
    // ask for gps coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      var long = position.coords.longitude;
      var lati = position.coords.latitude;
      var url = ('http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+long+'&APPID=f6528aa612e42b74b4f7bcf00cd1b0b1');
      $.get(url).done(function(data) {
        var weatherData = data;
        var temp = (1.8 * (weatherData.main.temp - 273)) + 32; // convert Kelvin to Fahrenheit
        fTemp = Math.round(temp);
        var current = weatherData.weather[0].main;
        var conditions = weatherData.weather[0].description;
          // display info from OpenWeather API
        $('#city').html(weatherData.name);
        $('#temperature').html(fTemp+"&deg; F");
        $('#forecast').html(conditions);
        var y = getIcon(weatherData.weather.id);

          // Determining which OpenWeather icon to display
        var z = new Date();
        var hour = z.getHours();
        var p = 'n.png';
        if (hour > 7 && hour < 18) { // determines if AM or PM
          p = 'd.png';
        }
        $('#icon').html('<img src="'+y+p+'"/>');
      }).fail(function() {
        $('#city').html('Error : failed to connect');
      });
    });
  }

  // Fahrenheit to Celsius toggle
  $('#convert').click(function() {
    if (fStatus) {
      $('#convert').html("Convert to Fahrenheit");
      fTemp = ((fTemp - 32) * 5 )/ 9;
      var cTemp = (Math.round((fTemp)*10))/10;
      $('#temperature').html(cTemp+"&deg; C");
      fStatus = false;
    } else {
      $('#convert').html("Convert to Celsius");
      fTemp = ((fTemp * 9) / 5 ) + 32;
      $('#temperature').html(fTemp+"&deg; F");
      fStatus = true;
    }
  });
});
