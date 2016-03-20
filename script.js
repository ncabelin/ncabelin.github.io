var projects = [{
	"title": "Weather Checker",
	"description": "Gets OpenWeather API data using gps coordinates.",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fccweather",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12875965/8f15dc56-cdaa-11e5-9b6e-28aa85f8a88b.png",
	"github": ""
}, {
	"title": "Javascript Calculator",
	"description": "Calculator using grid-based Bootstrap buttons, styled by CSS3",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fcccalculator",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915287/15ef4b2e-cedf-11e5-9b8c-c0682cdb7c7f.png",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcccalculator"
}, {
	"title": "Pomodoro Timer",
	"description": "Productivity timer, determine session time and breaks",
	"tech": "HTML5, Object-oriented Javascript, jQuery",
	"url": "http://ncabelin.github.io/fccpomodoro",
	"image": "https://cloud.githubusercontent.com/assets/15892944/13793675/4bf6aa54-eab5-11e5-836c-8a8f0ba1516f.png",
	"github": ""
}, {
	"title": "Key Swiper Arcade Game",
	"description": "Go past the bugs and fishes, swipe the key to score.",
	"tech": "HTML5 canvas, Javascript",
	"url": "http://ncabelin.github.io/udfrog",
	"image": "https://cloud.githubusercontent.com/assets/15892944/13766034/a810cddc-ea1b-11e5-8cd7-46f34402ce36.png",
	"github": ""
}, {
	"title": "Simon Game",
	"description": "Simon Game from the 80s. Try to imitate a pattern by memory.",
	"tech": "jQuery, Javascript, HTML5 audio",
	"url": "http://ncabelin.github.io/fccsimon",
	"image": "https://cloud.githubusercontent.com/assets/15892944/13766108/4f4bbf4e-ea1c-11e5-949a-5e11067a2faa.png",
	"github": ""
}, {
	"title": "Tic Tac Toe",
	"description": "Play Tic Tac Toe against the computer.",
	"tech": "jQuery, Javascript AI",
	"url": "http://ncabelin.github.io/fcctic",
	"image": "https://cloud.githubusercontent.com/assets/15892944/13798226/5652ec08-ead1-11e5-8e1a-0e16fffff9c3.png",
	"github": ""
}, {
	"title": "Wikipedia Viewer",
	"description": "Uses Wikimedia API to query topics, shows 20 results.",
	"tech": "jQuery, Wikipedia API",
	"url": "http://ncabelin.github.io/fccwiki",
	"image": "https://cloud.githubusercontent.com/assets/15892944/13807781/260f4dee-eb20-11e5-98ed-721010c92da5.png",
	"github": ""
}];

var p = $("#projects");
projects.forEach(function (project) {
  p.append('<div class="col-md-6 col-lg-4 text-center"><a href="' + project.url + '"><img src="' + project.image + '" class="projStyle"><h4 class="projTitle">'
    +project.title+'</h4></a><p class="desc">'+project.description+'</p><p class="tech">' + project.tech + '</p><p><a class="tech underline" href="' + project.github + '">View Code in Github</a></p></div>');
});
