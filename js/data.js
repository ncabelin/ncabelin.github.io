	var projects = [{
		title: "L.A. County Psych-unit Locator",
		id: "puL",
		description: "Mental health services locator used by the San Fernando Valley Community Mental Health Center Inc. for locating the nearest facilities for their clients while on the field by device GPS or zipcode.<br><br>Uses Google Maps Geocoding API served through a NodeJS, MongoDB Backend Restful API with Token based authentication &amp; and AngularJS 1 front-end.(MEAN stack)",
		sub: ["AngularJS 1.x", "NodeJS via Heroku", "MongoDB", "Google Maps API"],
		url: "https://plocator.herokuapp.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498062800/pul_tqfn0u.jpg",
		github: "https://github.com/ncabelin/psych-u-locator"
	},{
		title: "The Speaking Child",
		id: "schild",
		description: "Full Stack M.E.A.N. Application that monitors speech development and charts the progress.",
		sub: ["Node / ExpressJS", "MongoDB", "jQuery", "HTML5/CSS3", "Bootstrap", "D3.js"],
		url: "http://speakingchild.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1499291461/screenshot_xv6bq4.jpg",
		github: "https://github.com/ncabelin/speaking-child"
	},{
		title: "Mindwelder Blogs",
		id: "blogs",
		description: "Fullstack Blog Application complete with user registration and the ability to post blogs with formatting, upload imgur picture links, use html formatting. A unique feature is the TESTING mode. While editing a post, Underline style a section and that section will automatically be designated as an answer. Go on TEST mode and fill in the blanks on the same sections to test/review yourself. Any progress can be saved for continuation later on. The web app also uses secure Oauth2 from Google+ and Facebook for easy user registration.",
		sub: ["Python", "Flask", "PostgreSQL", "jQuery", "DigitalOcean VPS"],
		url: "https://www.mindwelder.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498062771/mindwelder_jmda3j.jpg",
		github: "https://github.com/ncabelin/mindwelder"
	}, {
		title: "LA Attractions Map",
		id: "losAngelesAttractions",
		description: "If you're ever in Los Angeles, California, this app will connect you to the top museums, theme parks, and other attractions. You can find where you are in the map, see how far you are from the attractions and see a lot of info on each. Uses Google maps API for the map, Openweather to get current L.A. weather, Wikipedia & Yelp API to provide info about each attraction",
		sub: ["KnockoutJS", "jQuery", "Openweather API", "Google Maps API", "Wikipedia API", "Yelp API"],
		url: "https://la-attractions.herokuapp.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498062987/laattractions_uryziy.jpg",
		github: "https://github.com/ncabelin/losangelesattractions"
	}];

var frontendProjects = [
{
	title: "Talking Calculator",
	id: "talkingCalculator",
	type: "utility",
	description: "Text to Speech powered Calculator with Responsive VoiceJS API",
	sub: ["responsiveVoiceJS", "HTML5/CSS3", "JavaScript", "jQuery", "Bootstrap"],
	url: "http://www.cabelin.com/calculator",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064655/screenshot_g0aj5r.jpg",
	github: "https://github.com/ncabelin/calculator"
},{
	title: "Progressive Steps, Inc.",
	id: "progressive",
	type: "wordpress",
	description: "Early Childhood Development Therapy Provider",
	sub: ["Wordpress", "PHP", "X-theme", "Photoshop", "HTML5/CSS3", "MySQL"],
	url: "https://www.progressivestepsca.com",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064422/df3dd386-374b-11e6-88b2-7a7843e3632d_rzp5ju.jpg",
	github: ""
},{
	title: "Cabelin Software Solutions",
	id: "cabelinsoft",
	type: "wordpress",
	description: "Single page web-site design & development company (built a custom-theme)",
	sub: ["HTML5/CSS3", "Bootstrap", "jQuery", "Wordpress"],
	url: "https://www.cabelin.com",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1500885351/Screenshot_2017-07-24_01.34.53_s6q1ze.png",
	github: ""
},{
	title: "Potentum Studios",
	id: "potentumsoft",
	type: "wordpress",
	description: "Single page web-site design & development company (built a custom-theme)",
	sub: ["HTML5/CSS3", "Bootstrap", "jQuery", "Wordpress"],
	url: "https://www.potentumstudios.com",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1500884974/potentum_lpsehx.jpg",
	github: ""
},{
		title: "Weather Saver",
		id: "weatherSaver",
		type: "utility",
		description: "Weather checker that can save everytime you check the weather",
		sub: ["Openweather API", "jQuery", "NodeJS"],
		url: "http://weather.potentum.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064961/e5e40cfa-94cf-11e6-9ca4-c788cdcf90b6_gdclpe.jpg",
		github: "https://github.com/ncabelin/weather-saver"
	}, {
		title: "Pomodoro Timer",
		id: "timer",
		type: "utility",
		description: "Productivity timer app based on the Pomodoro method.",
		sub: ["jQuery", "jQuery UI"],
		url: "http://www.cabelin.com/pom_clock",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065013/c7a70958-fba1-11e5-8cf7-321fb743bf70-2_rrepqw.jpg",
		github: "https://github.com/ncabelin/pom_clock"
	}, {
		title: "Wikipedia Viewer",
		id: "wikiviewer",
		type: "utility",
		sub: ["Wikipedia API", "Bootstrap"],
		description: "Search Wikipedia faster",
		url: "http://www.cabelin.com/wiki_viewer",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065266/screenshot_nvwpxs.jpg",
		github: "https://github.com/ncabelin/wiki_viewer"
	}, {
		title: "Feed Reader Testing",
		id: "feedReaderTester",
		type: "other",
		sub: ["JasmineJS"],
		description: "RSS Feed reader containing Jasmine.js testing. Demonstrates knowledge of red-green factor, test-driven development strategy.",
		url: "http://www.cabelin.com/rssreader",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065373/screenshot_1_bpmusg.jpg",
		github: "https://github.com/ncabelin/rssreader"
	},{
		title: "Key Swiper Arcade Game",
		id: "keyswiperGame",
		type: "game",
		sub: ["HTML5 canvas"],
		description: "Frogger type Arcade Game in HTML5 canvas",
		url: "http://www.cabelin.com/key_swiper",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065469/af146c1e-fcd2-11e5-95df-b545e9242f88_ndzqha.jpg",
		github: "https://github.com/ncabelin/key_swiper"
	},{
		title: "Simon Game",
		id: "simonGame",
		type: "game",
		sub: ["JavaScript","HTML5/CSS3"],
		description: "Simon 80s Game Clone",
		url: "http://www.cabelin.com/simon",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065547/screenshot-2_sinroz.jpg",
		github: "https://github.com/ncabelin/simon"
	},{
		title: "Tic Tac Toe",
		id: "tictactoe",
		type: "game",
		sub: ["Bootstrap", "JavaScript"],
		description: "Play Tic Tac Toe against Artificial Intelligence",
		url: "http://www.cabelin.com/tictac",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065640/screenshot-3_j2jx1d.jpg",
		github: "https://github.com/ncabelin/tictac"
	}

];

var skillsFrontend = ["UI / UX Design, Logo Design", "HTML5 / CSS3 / Bootstrap CSS framework", "JavaScript, jQuery library", "Front-end SPA frameworks - AngularJS 1.x, KnockoutJS, ReactJS"];
var skillsBackend = ["Python (Flask)", "NodeJS (Express,Mongoose)", "PHP with Wordpress", "SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB, Datastore)"];
var skillsAdmin = ["Heroku setup", "Google App Engine setup", "Shared hosting setup", "Wordpress setup", "Virtual Private Server setup (Ubuntu)", "Git & Github"];