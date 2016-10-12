	var projects = [{
		title: "L.A. County Psych-unit Locator",
		id: "puL",
		description: "Mental health services locator currently used by the San Fernando Valley Community Mental Health Center Inc. for locating the nearest facilities for their clients while on the field by device GPS or zipcode.<br><br>Uses Google Maps API served through a NodeJS Backend Service API, Firebase Backend for Authentication &amp; Database and AngularJS front-end.",
		sub: ["(Full Stack Application) using", "AngularJS 1.x", "NodeJS micro-service", "Firebase Backend/Database", "Google Maps API"],
		url: "http://plocator.mindwelder.com",
		image: "https://cloud.githubusercontent.com/assets/15892944/18023119/f53124da-6ba9-11e6-9a4c-cf9feaf7de4c.png",
		github: "https://github.com/ncabelin/psych-unit-locator-LA"
	},{
		title: "Mindwelder: Flashcard App",
		id: "flashcards",
		description: "Fullstack Flashcard App where users can sign up, log in and add their own flashcards and flashcard sets for self-testing. Ability to use Leitner method of learning incorporated.<br><br>Uses PHP 7.0, MySQL and jQuery, HTML5/CSS3.",
		sub: ["(Full Stack Application) using", "PHP", "MySQL", "jQuery", "HTML5/CSS3", "Bootstrap", "List.JS"],
		url: "http://cards.mindwelder.com",
		image: "https://cloud.githubusercontent.com/assets/15892944/17835927/649610d8-6736-11e6-98b4-c2c1726b6f47.png",
		github: "https://github.com/ncabelin/flashcards-mindwelder"
	},{
		title: "Mindwelder Blogs",
		id: "blogs",
		description: "Fullstack Blog Application with user registration and ability to post blogs with html formatting tags, upload imgur picture links, code lines in the pre tag, etc.",
		sub: ["(Static Website) using", "Google App Engine", "Python", "Webapp2", "Google Datastore NoSQL"],
		url: "https://blog.mindwelder.com",
		image: "https://cloud.githubusercontent.com/assets/15892944/19257141/157089fc-8f22-11e6-8341-de99ded939b9.jpg",
		github: "https://github.com/ncabelin/progressivesteps"
	},{
		title: "Progressive Steps, Inc.",
		id: "progressive",
		description: "Website designed for Early Childhood Development Provider.<br><br>Used HTML5 / CSS3, Javascript, jQuery",
		sub: ["(Static Website) using", "HTML5/CSS3", "jQuery", "Bootstrap"],
		url: "http://progressive.potentum.com",
		image: "https://cloud.githubusercontent.com/assets/15892944/16222217/df3dd386-374b-11e6-88b2-7a7843e3632d.jpg",
		github: "https://github.com/ncabelin/progressivesteps"
	}, {
		title: "LA Attractions Map",
		id: "losAngelesAttractions",
		description: "Neighborhood map of the Greater Los Angeles area and the top museums, theme parks, and other attractions.<br> Uses knockout.js framework, jQuery, Openweather API to get current LA weather, Google maps, places and wikipedia API to query info about the places.<br>",
		sub: ["(Front-end Web App) using", "KnockoutJS", "jQuery", "Openweather API", "Google Maps API", "Wikipedia API"],
		url: "http://ncabelin.github.io/udneighbormap",
		image: "https://cloud.githubusercontent.com/assets/15892944/14626721/eeb4e30c-05a2-11e6-9fdf-5c216439bc9f.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/udneighbormap"
	}, {
		title: "Weather Checker",
		id: "weatherChecker",
		description: "Gets current weather forecast using geolocation coordinates from the device you are using. The Open Weather API uses data from your location's specific weather station.<br><br>Demonstrates use of AJAX calls with OpenWeather API using jQuery. Used HTML5,CSS3,Javascript,Bootstrap.<br>",
		sub: ["(Front-end Web App) using", "Openweather", "API", "jQuery", "Bootstrap"],
		url: "http://ncabelin.github.io/fccweather",
		image: "https://cloud.githubusercontent.com/assets/15892944/15271150/481fa4e8-19f0-11e6-818d-e0a87a13d273.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccweather"
	}, {
		title: "Talking Calculator",
		id: "talkingCalculator",
		description: "Use the Talking Calculator app for breaking down communication/disability barriers. This app uses grid-based Bootstrap buttons and currently only supports the English language.<br><br>I used HTML5,CSS3,Javascript,jQuery,Bootstrap and responsiveVoiceJS for the text-to-speech functionality.<br>",
		sub: ["(Front-end Web App) using", "responsiveVoiceJS", "HTML5/CSS3", "Javascript", "jQuery", "Bootstrap"],
		url: "http://ncabelin.github.io/fcccalculator",
		image: "https://cloud.githubusercontent.com/assets/15892944/15271958/6fbfb82c-1a17-11e6-8070-98242c49036f.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcccalculator"
	}];

var frontendProjects = [
{
	title: "Potentum Studios",
	id: "potentumStudios",
	description: "My web design &amp; development company website. We design logos, set up web hosting and domain name registration. We can also provide custom in-house art and sound assets for your web ventures. We also provide Wordpress management and set-up.<br><br>I used HTML5 / CSS3, Javascript, PHP, jQuery and Twitter Bootstrap for this site.<br>",
	sub: "(Static Website) using HTML5/CSS3,jQuery",
	url: "http://www.potentum.com",
	image: "https://cloud.githubusercontent.com/assets/15892944/14021986/f57073d0-f19a-11e5-9546-d3077c7d5063.jpg",
	github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/potentum"
},{
		title: "Pomodoro Timer",
		id: "timer",
		description: "Productivity timer app with sounds. Determine session time and breaks with the Pomodoro technique of time management. Session minutes are set to 25 and breaks are 5 minutes by default.<br>I used HTML5 / CSS3, Javascript jQuery &amp; jQuery UI with Touch Punch to make the sliders mobile-responsive. Try it on your phone, it feels like a native app because of Touch Punch.",
		url: "http://ncabelin.github.io/fccpomodoro",
		image: "https://cloud.githubusercontent.com/assets/15892944/14312600/c7a70958-fba1-11e5-8cf7-321fb743bf70.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccpomodoro"
	}, {
		title: "Wikipedia Viewer",
		id: "wikiviewer",
		description: "Search Wikipedia quickly. This app uses Wikimedia API to query topics and shows the top 20 results.<br><br>Demonstrates knowledge of API uses, AJAX calls and is styled with Bootstrap,CSS3.",
		url: "http://ncabelin.github.io/fccwiki",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010784/9bf0d27c-f155-11e5-8455-066293c4f734.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccwiki"
	}, {
		title: "Feed Reader Testing",
		id: "feedReaderTester",
		description: "RSS Feed reader of Udacity, contains Jasmine.js testing. Demonstrates knowledge of red-green factor, test-driven development strategy.",
		url: "http://ncabelin.github.io/udfeed",
		image: "https://cloud.githubusercontent.com/assets/15892944/14395568/4b3312e4-fd87-11e5-8fee-f68b2fc16be0.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/udfeed"
	}

];

var games = [
	{
		title: "Key Swiper Arcade Game",
		id: "keyswiperGame",
		description: "Arcade game in the vein of Frogger. Get past the bugs and fishes, swipe the key to score.<br><br>I used HTML5 canvas to generate the graphics and Javascript object-oriented programming to design the functionality.<br><br>",
		url: "http://ncabelin.github.io/udfrog",
		image: "https://cloud.githubusercontent.com/assets/15892944/14368462/af146c1e-fcd2-11e5-95df-b545e9242f88.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/udfrog"
	},{
		title: "Simon Game",
		id: "simonGame",
		description: "Simon Game clone, the game popularized in the 80s. Try to imitate a randomly generated pattern by memory, the game increases the pattern length after each correct guess. You win when you get to the 20th pattern.<br><br>I used jQuery, Javascript, HTML5 audio to provide sounds for the game.<br><br>",
		url: "http://ncabelin.github.io/fccsimon",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010786/9bf384f4-f155-11e5-941a-d8b87c8c48f3.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fccsimon"
	},{
		title: "Tic Tac Toe",
		id: "tictactoe",
		description: "Play Tic Tac Toe against the computer. Smart AI but has one weak move and is defeatable.<br><br>I used jQuery, and vanilla Javascript for the AI, along with Bootstrap styling.",
		url: "http://ncabelin.github.io/fcctic",
		image: "https://cloud.githubusercontent.com/assets/15892944/14010785/9bf2c58c-f155-11e5-8993-f55acf4c2eff.jpg",
		github: "https://github.com/ncabelin/ncabelin.github.io/tree/master/fcctic"
	}
];

var backendProjects = [{
}];

var dynamicProjects = [];

var skillsFrontend = ["Client-side Application Logic", "Web UI/UX Design", "Logo Design", "AngularJS 1.x", "jQuery", "HTML5/CSS3", "Bootstrap", "SASS"];
var skillsBackend = ["Linux server Setup", "RESTFul APIs", "Endpoints", "CRUD Applications", "Server-side Application Logic", "Python (Flask, Webapp2, Google App Engine)", "NodeJS (Express,Mongoose)", "PHP (Procedural &amp; OOP, Laravel)"];
var skillsDbase = ["RDBMS SQL (MySQL, PostgreSQL", "NoSQL (MongoDB, Datastore)"];
var skillsAdmin = ["Heroku, Google App Engine, Shared Hosting Provider Deployment", "Git Version Control"];
