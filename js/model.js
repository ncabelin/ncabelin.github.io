	var projects = [{
		title: "L.A. County Psych-unit Locator",
		id: "puL",
		description: "Mental health services locator used by the San Fernando Valley Community Mental Health Center Inc. for locating the nearest facilities for their clients while on the field by device GPS or zipcode.<br><br>Uses Google Maps Geocoding API served through a NodeJS, MongoDB Backend Restful API with Token based authentication and AngularJS 1 front-end.(MEAN stack)",
		sub: ["AngularJS 1.x", "NodeJS via Heroku", "MongoDB", "Google Maps API"],
		url: "https://plocator.herokuapp.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498062800/pul_tqfn0u.jpg",
		github: "https://github.com/ncabelin/psych-u-locator"
	},{
		title: "The Speaking Child",
		id: "schild",
		description: "A fullstack app for monitoring your child's speech development that also provides word list guidance and charting of progress.",
		sub: ["Node / ExpressJS", "MongoDB", "AngularJS 1.x", "HTML5/CSS3", "Bootstrap", "D3.js"],
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
	description: "Use the Talking Calculator app for breaking down communication/disability barriers. This app uses grid-based Bootstrap buttons and currently only supports the English language.",
	sub: ["responsiveVoiceJS", "HTML5/CSS3", "JavaScript", "jQuery", "Bootstrap"],
	url: "http://www.cabelin.com/calculator",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064655/screenshot_g0aj5r.jpg",
	github: "https://github.com/ncabelin/calculator"
},{
	title: "Progressive Steps, Inc.",
	id: "progressive",
	description: "Custom Wordpress website designed for an Early Childhood Development Provider. Based on the client's needs, initially created mockup of site in HTML5/CSS3 and Bootstrap, but the client ultimately wanted ease of editing features and we migrated the site to Wordpress.",
	sub: ["Wordpress", "PHP", "X-theme", "Photoshop", "HTML5/CSS3", "MySQL"],
	url: "https://www.progressivestepsca.com",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064422/df3dd386-374b-11e6-88b2-7a7843e3632d_rzp5ju.jpg",
	github: ""
},{
	title: "Cabelin Software Solutions",
	id: "cabelinsoft",
	description: "My web design &amp; development company website. We design logos, set up web hosting and domain name registration. We can also provide custom in-house art and sound assets for your web ventures. We also provide Wordpress management and set-up.<br><br>I used HTML5 / CSS3, Javascript, PHP, jQuery and Twitter Bootstrap for this site.<br>",
	sub: "(Static Website) using HTML5/CSS3,jQuery",
	url: "http://www.cabelin.com",
	image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064786/f57073d0-f19a-11e5-9546-d3077c7d5063_hfxb7l.jpg",
	github: ""
},{
		title: "Weather Saver",
		id: "weatherSaver",
		description: "Gets current weather forecast using geolocation coordinates from the device you are using. The Open Weather API uses data from your location's specific weather station.<br><br>Demonstrates use of AJAX calls with OpenWeather API using AngularJS and saving to a NodeJS &amp; MongoDB backend<br>",
		sub: "Openweather, jQuery, NodeJS",
		url: "http://weather.potentum.com",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498064961/e5e40cfa-94cf-11e6-9ca4-c788cdcf90b6_gdclpe.jpg",
		github: "https://github.com/ncabelin/weather-saver"
	}, {
		title: "Pomodoro Timer",
		id: "timer",
		description: "Productivity timer app with sounds. Determine session time and breaks with the Pomodoro technique of time management. Session minutes are set to 25 and breaks are 5 minutes by default.<br>I used HTML5 / CSS3, Javascript jQuery &amp; jQuery UI with Touch Punch to make the sliders mobile-responsive. Try it on your phone, it feels like a native app because of Touch Punch.",
		url: "http://www.cabelin.com/pom_clock",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065013/c7a70958-fba1-11e5-8cf7-321fb743bf70-2_rrepqw.jpg",
		github: "https://github.com/ncabelin/pom_clock"
	}, {
		title: "Wikipedia Viewer",
		id: "wikiviewer",
		description: "Search Wikipedia quickly. This app uses Wikimedia API to query topics and shows the top 20 results.<br><br>Demonstrates knowledge of API uses, AJAX calls and is styled with Bootstrap,CSS3.",
		url: "http://www.cabelin.com/wiki_viewer",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065266/screenshot_nvwpxs.jpg",
		github: "https://github.com/ncabelin/wiki_viewer"
	}, {
		title: "Feed Reader Testing",
		id: "feedReaderTester",
		description: "RSS Feed reader containing Jasmine.js testing. Demonstrates knowledge of red-green factor, test-driven development strategy.",
		url: "http://www.cabelin.com/rssreader",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065373/screenshot_1_bpmusg.jpg",
		github: "https://github.com/ncabelin/rssreader"
	},{
		title: "Key Swiper Arcade Game",
		id: "keyswiperGame",
		description: "Arcade game in the vein of Frogger. Get past the bugs and fishes, swipe the key to score.<br><br>I used HTML5 canvas to generate the graphics and Javascript object-oriented programming to design the functionality.<br><br>",
		url: "http://www.cabelin.com/key_swiper",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065469/af146c1e-fcd2-11e5-95df-b545e9242f88_ndzqha.jpg",
		github: "https://github.com/ncabelin/key_swiper"
	},{
		title: "Simon Game",
		id: "simonGame",
		description: "Simon Game clone, the game popularized in the 80s. Try to imitate a randomly generated pattern by memory, the game increases the pattern length after each correct guess. You win when you get to the 20th pattern.<br><br>I used jQuery, Javascript, HTML5 audio to provide sounds for the game.<br><br>",
		url: "http://www.cabelin.com/simon",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065547/screenshot-2_sinroz.jpg",
		github: "https://github.com/ncabelin/simon"
	},{
		title: "Tic Tac Toe",
		id: "tictactoe",
		description: "Play Tic Tac Toe against the computer. Smart AI but has one weak move and is defeatable.<br><br>I used jQuery, and vanilla Javascript for the AI, along with Bootstrap styling.",
		url: "http://www.cabelin.com/tictac",
		image: "http://res.cloudinary.com/dd6kwd0zn/image/upload/v1498065640/screenshot-3_j2jx1d.jpg",
		github: "https://github.com/ncabelin/tictac"
	}

];

var skillsFrontend = ["UI/UX Design", "Logo Design", "HTML5/CSS3", "Bootstrap 3", "JavaScript", "jQuery", "AngularJS 1", "KnockoutJS"];
var skillsBackend = ["Python (Flask, Webapp2, Google App Engine)", "NodeJS (Express,Mongoose)", "PHP", "SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB, Datastore)"];
var skillsAdmin = ["Heroku", "Google App Engine", "Shared Hosting", "Wordpress", "VPS Linux Admin", "Git Version Control"];

var tools = ["Atom / Sublime Text Editor", "Chrome Dev-tools", "ngrok", "Sketch", "Adobe Photoshop", "Git / Github", "Macbook Air"]
