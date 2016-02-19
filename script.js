var projects = [{
	"title": "Weather Checker",
	"description": "Checks for user's current gps coordinates and gets OpenWeather API data on current conditions with appropriate icon",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fccweather",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12875965/8f15dc56-cdaa-11e5-9b6e-28aa85f8a88b.png"
}, {
	"title": "Javascript Calculator",
	"description": "Javascript-based calculator using grid-based Bootstrap buttons, styled by CSS3",
	"tech": "HTML5,CSS3,Javascript,jQuery,Bootstrap",
	"url": "http://ncabelin.github.io/fcccalculator",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915287/15ef4b2e-cedf-11e5-9b8c-c0682cdb7c7f.png"
}, {
	"title": "Pomodoro Timer",
	"description": "Productivity timer with preset 25 minutes duration &amp; 5 minute break-time",
	"tech": "HTML5,CSS3,Javascript,jQuery,jQuery UI",
	"url": "http://ncabelin.github.io/fccpomodoro",
	"image": "https://cloud.githubusercontent.com/assets/15892944/12915286/15b9551e-cedf-11e5-8db3-6507f2ab1267.png"
}];
var p = $("#projects");
projects.forEach(function (project) {
  p.append('<div class="col-md-4 text-center"><a href="'+project.url+'"><img src="'+project.image+'" class="img-responsive projStyle"><h4>'
    +project.title+'</h4></a><p>'+project.description+'</p></div>');
});
