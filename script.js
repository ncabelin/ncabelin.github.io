$(document).ready(function() {

	var projects = [{
		title: "Potentum Studios",
		id: "potent",
		description: "My web design &amp; development company website. We design logos, set up web hosting and domain name registration. We can also provide custom in-house art and sound assets for your web ventures. We also provide Wordpress management and set-up.<br><br>I used HTML5 / CSS3, Javascript, jQuery and Twitter Bootstrap for this site.<br>",
		url: "http://www.potentum.com",
		image: "https://cloud.githubusercontent.com/assets/15892944/14021986/f57073d0-f19a-11e5-9546-d3077c7d5063.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/potentum"
	}, {
		title: "LA Attractions Map",
		id: "lamp",
		description: "Neighborhood map of the Greater Los Angeles area and the top museums, theme parks, and other attractions. Uses knockout.js framework, jQuery, Openweather API to get current LA weather, Google maps, places and streetview API, and wikipedia API to query info about the places. Only works with large viewport due to map interactions and info size.<br>",
		url: "http://ncabelin.github.io/udneighbormap",
		image: "https://cloud.githubusercontent.com/assets/15892944/14290947/f52ad8fa-fb15-11e5-84ad-1fa527adc8af.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/udneighbormap"
	}, {
		title: "Weather Checker",
		id: "weather",
		description: "Your quick and accurate weather app. Gets current weather forecast using gps coordinates geolocation from the device you are using. Open Weather uses data from your location's specific weather station and is the most accurate in predictions due to this.<br><br>Demonstrates use of AJAX calls with OpenWeather API using jQuery. Used HTML5,CSS3,Javascript,Bootstrap.<br>",
		url: "http://ncabelin.github.io/fccweather",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010790/9c019594-f155-11e5-8b49-b131f704d625.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccweather"
	}, {
		title: "Javascript Calculator",
		id: "javasc",
		description: "jQuery &amp; Javascript based traditional calculator app using grid-based Bootstrap buttons, styled by CSS3.<br><br>I used HTML5,CSS3,Javascript,jQuery,Bootstrap.<br>",
		url: "http://ncabelin.github.io/fcccalculator",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010789/9bf7a7d2-f155-11e5-8cce-83ac90cb22a9.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcccalculator"
	}, {
		title: "Pomodoro Timer",
		id: "pom",
		description: "Productivity timer app with sounds. Determine session time and breaks with the Pomodoro technique of time management. I used HTML5 / CSS3, Javascript jQuery &amp; jQuery UI with Touch Punch to make the sliders mobile-responsive. Try it on your phone, it feels like a native app because of Touch Punch.",
		url: "http://ncabelin.github.io/fccpomodoro",
		image: "https://cloud.githubusercontent.com/assets/15892944/14312600/c7a70958-fba1-11e5-8cf7-321fb743bf70.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccpomodoro"
	}, {
		title: "Key Swiper Arcade Game",
		id: "keyswipe",
		description: "Arcade game in the vein of Frogger. Get past the bugs and fishes, swipe the key to score.<br><br>I used HTML5 canvas to draw the graphics and Javascript object-oriented programming to design the code.",
		url: "http://ncabelin.github.io/udfrog",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010787/9bf4c85a-f155-11e5-9593-e709e5bede13.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/udfrog"
	}, {
		title: "Simon Game",
		id: "simong",
		description: "Simon Game clone, the game popularized in the 80s. Try to imitate a randomly generated pattern by memory, the game increases the pattern length after each correct guess. You win when you get to the 20th pattern.<br><br>I used jQuery, Javascript, HTML5 audio to provide sounds for the game.<br><br>",
		url: "http://ncabelin.github.io/fccsimon",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010786/9bf384f4-f155-11e5-941a-d8b87c8c48f3.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccsimon"
	}, {
		title: "Tic Tac Toe",
		id: "tictac",
		description: "Play Tic Tac Toe against the computer. Although the AI is not optimized to always win, it randomly generates the smartest move and mimics human delay and the moves of a novice player.<br><br>I used jQuery, and vanilla Javascript for the AI, along with Bootstrap styling.",
		url: "http://ncabelin.github.io/fcctic",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010785/9bf2c58c-f155-11e5-8993-f55acf4c2eff.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcctic"
	}, {
		title: "Wikipedia Viewer",
		id: "wikiv",
		description: "Search Wikipedia quickly. This app uses Wikimedia API to query topics and shows the top 20 results.<br><br>Demonstrates knowledge of API uses, AJAX calls and is styled with Bootstrap,CSS3.",
		url: "http://ncabelin.github.io/fccwiki",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010784/9bf0d27c-f155-11e5-8455-066293c4f734.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccwiki"
	}];

	var p = $("#projects");

	projects.forEach(function (project) {
		var content = '<div class="col-md-4 col-lg-4 text-center"><button type="button" class="buttonC" data-toggle="modal" data-target="#' + project.id + '"><img src="' + project.image + '" class="img-responsive center-block">' + project.title + '</button></div><div id="' + project.id + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + project.title + '</h4></div><div class="modal-body"><img src="' + project.image + '" class="mod-img"><p>' + project.description + '</p><p><a href="' + project.url + '" target="_blank" class="yellowed text-center">VISIT WEBSITE</a></p><p><a href="' + project.github + '" target="_blank" class="yellowed text-center">VIEW CODE IN GITHUB</a></p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
	  p.append(content);
	});

  $(".par").fadeOut(10);
  $(".par").fadeIn(2000);
  $("#view").click(function () {
      $("#about").animate({ height : "100%" }, 1000);
      $(".work").toggle("slow");
  });

  $("#view").click(function() {
    $("html, body").animate({ scrollTop:$("#projs").offset().top }, 500);
  });

  $("#contactB").click(function() {
    $("html, body").animate({ scrollTop:$("#cont").offset().top }, 500);
  });

});







