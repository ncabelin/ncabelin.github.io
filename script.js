var projects = [{
	"title": "Weather Checker",
	"description": "Checks for user's current gps coordinates and gets OpenWeather API data on current conditions.",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fccweather",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12875965/8f15dc56-cdaa-11e5-9b6e-28aa85f8a88b.png",
	"github": ""
}, {
	"title": "Javascript Calculator",
	"description": "Javascript-based calculator using grid-based Bootstrap buttons, styled by CSS3",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fcccalculator",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915287/15ef4b2e-cedf-11e5-9b8c-c0682cdb7c7f.png",
	"github": ""
}, {
	"title": "Pomodoro Timer",
	"description": "Productivity timer with preset 25 minutes duration &amp; 5 minute break-time",
	"tech": "HTML5, Object-oriented Javascript, jQuery",
	"url": "http://ncabelin.github.io/fccpomodoro",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png",
	"github": ""
}, {
	"title": "Arcade Game",
	"description": "Frogger clone in HTML5 canvas. Get the key past the bugs, fishes, etc. to score.",
	"tech": "HTML5 canvas, Javascript",
	"url": "http://ncabelin.github.io/udfrog",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png",
	"github": ""
}, {
	"title": "Simon Game",
	"description": "Simon Game from the 80s. Try to imitate a pattern by memory.",
	"tech": "jQuery, Javascript, HTML5 audio",
	"url": "http://ncabelin.github.io/fccsimon",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png",
	"github": ""
}, {
	"title": "Tic Tac Toe",
	"description": "Play Tic Tac Toe against the computer, try to get as many draws as possible.",
	"tech": "jQuery, Javascript AI",
	"url": "http://ncabelin.github.io/fcctic",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png",
	"github": ""
}, {
	"title": "Wikipedia Viewer",
	"description": "Search for a wikipedia article by keyword and get descriptions in the results or search for a random article",
	"tech": "jQuery, Wikipedia API",
	"url": "http://ncabelin.github.io/fccwiki",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png",
	"github": ""
}];

var p = $("#projects");
projects.forEach(function (project) {
  p.append('<div class="col-md-6 col-lg-4 text-center"><a href="' + project.url + '"><img src="' + project.image + '" class="projStyle"><h4 class="projTitle">'
    +project.title+'</h4></a><p>'+project.description+'</p><p class="tech">' + project.tech + '</p><p><a class="tech" href="' + project.github + '">view code in Github</a></p></div>');
});
