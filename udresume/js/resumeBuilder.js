
$(document).ready(function() {
  var bio = {
    "name": "Neptune Michael Cabelin",
    "role": "Software Developer",
    "contacts": {
      "mobile": "+1(323)207-6632",
      "tel": +13232076632,
      "email" : "ncabelin@potentum.com",
      "github" : "ncabelin",
      "linkedIn" : "https://www.linkedin.com/in/neptune-michael-cabelin-637600b0",
      "location": "Los Angeles, CA"
    },
    "biopic": "https://cloud.githubusercontent.com/assets/15892944/12449678/c6f3dec8-bf33-11e5-903f-f21e2258b5d6.JPG",
    "welcomeMessage": "I'm a software developer currently focusing on full-stack web design and development.<br>",
    "skills": ["Full-stack Web Development", "Front-end Web Design", "Adobe Photoshop", "Audio production", "Photography" ],
    "display": function() {
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
      var formattedMobile,
          formattedEmail,
          formattedGithub,
          formattedLocation,
          formattedLinkedin;

      $("#header").prepend(formattedName, formattedRole);
      $("#header").append(formattedWelcomeMessage);
      $("#header").append(formattedBioPic);
      formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").append(formattedMobile);
      formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(formattedEmail);
      formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts").append(formattedGithub);
      formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts").append(formattedLocation);

      if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill;
        for ( i = 0; i < bio.skills.length; i++ ) {
          formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
        }
      }

      formattedMobile = HTMLfooterMobile.replace("%data%", bio.contacts.tel);
      formattedEmail = HTMLfooterEmail.replace("%data%", bio.contacts.email);
      formattedGithub = HTMLfooterGithub.replace("%data%", bio.contacts.github);
      formattedLinkedin = HTMLfooterLinkedin.replace("%data%", bio.contacts.linkedIn);
      $("#footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLinkedin);
    }
  };

  var work = {
    "jobs": [{
      "employer": "Potentum Studios",
      "title": "Web Designer and Developer",
      "location": "Los Angeles, CA",
      "dates": "12/2015-present",
      "description": "Founder / Creator of e-learning website for nursing students"
    }, {
      "employer": "Annex Healthcare Providers / Heavenly Home Health",
      "title": "Home Health Licensed Vocational Nurse",
      "location": "Encino, CA",
      "dates": "08/2012 to present",
      "description": "Provided nursing care for quadruplegic, epileptic, & muscular dystrophy / ventilator dependent patients."
    }, {
      "employer": "Memorial University Medical Center",
      "title": "Medical Office Licensed Practical Nurse",
      "location": "Rincon, GA",
      "dates": "03/2011 to 04/2012",
      "description": "Provided SC & IM injection medications, immunizations, phleobotomy services, glucose checks, PT/INR checks in a medical office setting."
    }, {
      "employer": "Caremeridian",
      "title": "Sub-acute Licensed Vocational Nurse",
      "location": "Northridge, CA",
      "dates": "08/2010 to 02/2011",
      "description": "Provided subacute level care for quadruplegic, spinal-injury, head-injury, ALS & muscular dystrophy ventilator dependent patients."
    }, {
      "employer": "Unicom Supply",
      "title": "Logistics Manager / Sales Representative",
      "location": "Los Angeles, CA",
      "dates": "03/2007 to 11/2008",
      "description": "Managed fire alarm & security supplies logistics and handled customer sales accounts"
    }, {
      "employer": "ACA Video Philippines",
      "title": "Operations Manager",
      "location": "Ormoc City, Philippines",
      "dates": "03/2001 to 10/2006",
      "description": "Managed video rental store, launched marketing campaigns & performed sales analyses"
    }],
    "display": function() {
      var formattedWorkEmployer, formattedWorkDates, formattedWorkLocation, formattedWorkDescription;
      $("#workExperience").append(HTMLworkStart);
      work.jobs.forEach(function(data) {
        formattedWorkEmployer = HTMLworkTitle.replace("%data%", data.title) + HTMLworkEmployer.replace("%data%", data.employer);
        $(".work-entry:last").append(formattedWorkEmployer);
        formattedWorkDates = HTMLworkDates.replace("%data%", data.dates);
        $(".work-entry:last").append(formattedWorkDates);
        formattedWorkLocation = HTMLworkLocation.replace("%data%", data.location);
        $(".work-entry:last").append(formattedWorkLocation);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", data.description);
        $(".work-entry:last").append(formattedWorkDescription);
      });
    }
  };

  var projects = {
    "projects": [{
      "title": "Javascript Calculator",
      "dates": "12/2015",
      "description": "Calculator app using Javascript and jQuery, with CSS and bootstrap styling",
      "images": ["https://cloud.githubusercontent.com/assets/15892944/14010789/9bf7a7d2-f155-11e5-8cce-83ac90cb22a9.jpg"]
    }, {
      "title": "Weather Checker",
      "dates": "12/2015",
      "description": "Web app that uses geolocation and OpenWeather API to generate current weather temperature",
      "images": ["https://cloud.githubusercontent.com/assets/15892944/14010790/9c019594-f155-11e5-8b49-b131f704d625.jpg"]
    }, {
      "title": "Interactive Resume",
      "dates": "12/2015",
      "description": "Interactive Resume demonstrating implementation of HTML5,CSS3,JQuery,JSON",
      "images": ["https://cloud.githubusercontent.com/assets/15892944/14273178/7608e95c-fabd-11e5-8e54-81ffb296b6b9.jpg"]
    }, {
      "title": "Responsive Design Portfolio",
      "dates": "12/2015",
      "description": "Portfolio to showcase ability to implement responsive website design with responsive images",
      "images": ["https://cloud.githubusercontent.com/assets/15892944/14272851/3303ab1c-fabb-11e5-9618-40bc38fbe8e1.jpg"]
    }, {
      "title": "Random Trump Quote Generator",
      "dates": "01/2016",
      "description": "Use of Javascript to generate random stupid Trump quotes and prepopulate twitter button",
      "images": ["https://cloud.githubusercontent.com/assets/15892944/14272967/debaf028-fabb-11e5-8c5b-54494a078045.jpg"]
    }],
    "display": function() {
      var formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImages;
      projects.projects.forEach(function(data) {
        $("#projects").append(HTMLprojectStart);
        formattedProjectTitle = HTMLprojectTitle.replace("%data%", data.title);
        $(".project-entry:last").append(formattedProjectTitle);
        formattedProjectDates = HTMLprojectDates.replace("%data%", data.dates);
        $(".project-entry:last").append(formattedProjectDates);
        formattedProjectDescription = HTMLprojectDescription.replace("%data%", data.description);
        $(".project-entry:last").append(formattedProjectDescription);
        data.images.forEach(function(imageData) {
          formattedProjectImages = HTMLprojectImage.replace("%data%", imageData);
          $(".project-entry:last").append(formattedProjectImages);
        });
      });
    }
  };

  var education = {
    "schools": [
      {
        "name": "Udacity",
        "location": "San Francisco, CA",
        "degree": "Nanodegree",
        "majors": ["Front-end Web Developer"],
        "dates": "12/2015 to 06/2016",
        "url": "http://www.udacity.com"
      },
      {
      "name": "Casa Loma College",
      "location": "Van Nuys, CA",
      "degree": "Certificate",
      "majors": ["Licensed Vocational Nurse"],
      "dates": "01/2009 to 01/2010",
      "url": "http://casalomacollege.edu"
    }, {
      "name": "De La Salle University",
      "location": "Manila, Philippines",
      "degree": "Bachelor degree",
      "majors": ["Economics"],
      "dates": "06/1997 to 03/2001",
      "url": "http://dlsu.edu.ph"
    }],
    "onlineCourses": [
      {
        "title": "Ultimate Web Designer & Developer Course",
        "school": "Udemy / Brad Hussey",
        "date": "12/2015 to 04/2016",
        "url": "http://www.udemy.com"
      },
      {
        "title": "Front-end Web Developer Certificate",
        "school": "Free Code Camp",
        "date": "12/2015 to 02/2016",
        "url": "http://www.freecodecamp.com"
    }],
    "display": function() {
      education.schools.forEach(function(data) {
        var formattedSchoolName,
          formattedSchoolDegree,
          formattedSchoolDates,
          formattedSchoolLocation,
          formattedSchoolMajors,
          formattedSchoolURL;

        $("#education").append(HTMLschoolStart);
        formattedSchoolName = HTMLschoolName.replace("%data%", data.name);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", data.degree);
        $(".education-entry:last").append((formattedSchoolName + formattedSchoolDegree));
        formattedSchoolMajors = HTMLschoolMajor.replace("%data%", data.majors);
        $(".education-entry:last").append(formattedSchoolMajors);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", data.location);
        $(".education-entry:last").append(formattedSchoolLocation);
        formattedSchoolDates = HTMLschoolDates.replace("%data%", data.dates);
        $(".education-entry:last").append(formattedSchoolDates);
        formattedSchoolName = formattedSchoolName.replace("#", data.url);
      });

      $(".education-entry:last").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(data) {
        var onlineTitle,
            onlineSchool,
            onlineDates,
            onlineURL,
            onlineURL2;
        
        onlineTitle = HTMLonlineTitle.replace("%data%", data.title);
        $(".education-entry:last").append(onlineTitle);
        onlineSchool = HTMLonlineSchool.replace("%data%", data.school);
        $(".education-entry:last").append(onlineSchool);
        onlineDates = HTMLonlineDates.replace("%data%", data.date);
        $(".education-entry:last").append(onlineDates);
        onlineURL = HTMLonlineURL.replace("%data%", "<a href='" + data.url + "'>" + data.url + "</a><br>");
        $(".education-entry:last").append(onlineURL);
      });
    }
  };

  bio.display();
  work.display();
  projects.display();
  education.display();

  /*
  * Google maps initialized
  */

  var googleMap = '<div id="map"></div>';
  $("#mapDiv").append(googleMap);

  var map;    // declares a global map variable

  function initializeMap() {
    var locations;
    var mapOptions = {
      disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function locationFinder() {
      var locations = [];
      locations.push(bio.contacts.location);

      // iterates through school locations and appends each location to
      // the locations array.
      education.schools.forEach(function(school){
        locations.push(school.location);
      });

      // iterates through work locations and appends each location to
      // the locations array. 
      work.jobs.forEach(function(job){
        locations.push(job.location);
      });
      return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat();  // latitude from the place service
      var lon = placeData.geometry.location.lng();  // longitude from the place service
      var name = placeData.formatted_address;   // name of the place from the place service
      var bounds = window.mapBounds;            // current boundaries of the map window
      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: map,
        position: placeData.geometry.location,
        title: name
      });

      // create infowindow
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      // opens infowindow on click
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(map, marker);
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      map.fitBounds(bounds);
      // center the map
      map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0]);
      }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(map);
      // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place){
        // the search request object
        var request = {
          query: place
        };
        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      });
    }
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();
    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
  }

  // Calls the initializeMap() function when the page loads
  window.addEventListener('load', initializeMap);

  // Vanilla JS way to listen for resizing of the window
  // and adjust map bounds
  window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
  });

  /* end of Google maps JS implementation */

  /* expand-buttons for work experience and projects */
  $("#moreButton").click(function() {
    $(".hideFirst").toggle("slow");
  });

  $("#moreButtonPortfolio").click(function() {
    $(".hideFirstPortfolio").toggle("slow");
  });

});
