var projects = [{
	"title": "Weather Checker",
	"description": "Gets OpenWeather API data using gps coordinates.",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fccweather",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010790/9c019594-f155-11e5-8b49-b131f704d625.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccweather"
}, {
	"title": "Javascript Calculator",
	"description": "Calculator using grid-based Bootstrap buttons, styled by CSS3",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fcccalculator",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010789/9bf7a7d2-f155-11e5-8cce-83ac90cb22a9.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcccalculator"
}, {
	"title": "Pomodoro Timer",
	"description": "Productivity timer, determine session time and breaks",
	"tech": "HTML5, Object-oriented Javascript, jQuery",
	"url": "http://ncabelin.github.io/fccpomodoro",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010788/9bf67d12-f155-11e5-85ee-5505c3f8ce57.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccpomodoro"
}, {
	"title": "Key Swiper Arcade Game",
	"description": "Go past the bugs and fishes, swipe the key to score.",
	"tech": "HTML5 canvas, Javascript",
	"url": "http://ncabelin.github.io/udfrog",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010787/9bf4c85a-f155-11e5-9593-e709e5bede13.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/udfrog"
}, {
	"title": "Simon Game",
	"description": "Simon Game from the 80s. Try to imitate a pattern by memory.",
	"tech": "jQuery, Javascript, HTML5 audio",
	"url": "http://ncabelin.github.io/fccsimon",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010786/9bf384f4-f155-11e5-941a-d8b87c8c48f3.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccsimon"
}, {
	"title": "Tic Tac Toe",
	"description": "Play Tic Tac Toe against the computer.",
	"tech": "jQuery, Javascript AI",
	"url": "http://ncabelin.github.io/fcctic",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010785/9bf2c58c-f155-11e5-8993-f55acf4c2eff.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcctic"
}, {
	"title": "Wikipedia Viewer",
	"description": "Uses Wikimedia API to query topics, shows 20 results.",
	"tech": "jQuery, Wikipedia API",
	"url": "http://ncabelin.github.io/fccwiki",
	"image": "https://cloud.githubusercontent.com/assets/15892944/14010784/9bf0d27c-f155-11e5-8455-066293c4f734.jpg",
	"github": "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccwiki"
}];

var p = $("#projects");
projects.forEach(function (project) {
  p.append('<div class="col-md-4 col-lg-4 text-center"><a href="' + project.url + '"><img src="' + project.image + '" class="img-responsive center-block"><h4 class="projTitle">'
    +project.title+'</h4></a><p class="desc">'+project.description+'</p><p class="tech">' + project.tech + '</p><p><a class="tech underline" href="' + project.github + '">View Code in Github</a></p></div>');
});
