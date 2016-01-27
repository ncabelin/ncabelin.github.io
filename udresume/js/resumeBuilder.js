var bio = {
	"name": "Neptune Michael Cabelin",
	"role": "Software Engineer",
	"contact-info": {
		"location": "Los Angeles, CA"
	},
	"email" : "ncabelin@yahoo.com",
	"github" : "ncabelin",
	"picture-URL": "https://cloud.githubusercontent.com/assets/15892944/12449678/c6f3dec8-bf33-11e5-903f-f21e2258b5d6.JPG",
	"welcome-message": "I'm a web developer based in Los Angeles, with a background in economics and nursing.",
	"skills": ["HTML5/CSS3", "Javascript", "jQuery", "Bootstrap", "Photoshop", "MEAN stack", "Web Design", "Wordpress", "PHP"],
	"linkedIn" : "https://www.linkedin.com/in/neptune-michael-cabelin-637600b0"
};

var work = {
	"jobs": [{
		"employer": "Potentum Studios",
		"title": "Full Stack Web Developer",
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
	}]
}

var projects = {
	"project": [{
		"title": "Interactive Resume",
		"dates": "12/2015",
		"description": "Interactive Resume demonstrating implementation of HTML5,CSS3,JQuery,JSON",
		"imageS": ["https://cloud.githubusercontent.com/assets/15892944/12048463/4578b5b6-ae90-11e5-94d8-a4282c274241.jpg"]
	}, {
		"title": "Responsive Design Portfolio",
		"dates": "12/2015",
		"description": "Portfolio to showcase ability to implement responsive website design with responsive images",
		"imageS": ["http://lorempixel/200/200"]
	}, {
		"title": "Random Trump Quote Generator",
		"dates": "01/2016",
		"description": "Use of Javascript to generate random quote and prepopulate twitter button",
		"imageS": ["https://cloud.githubusercontent.com/assets/15892944/12087417/88474f06-b287-11e5-8700-7ae03446a028.png"]

	}]
}

var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "San Francisco, CA",
			"degree": "Nanodegree",
			"majors": "Front-end Web Developer, Full-Stack Web Developer",
			"dates": "12/2015 to 06/2016",
			"url": "http://www.udacity.com"
		},
		{
		"name": "Casa Loma College",
		"location": "Van Nuys, CA",
		"degree": "Certificate",
		"majors": "Licensed Vocational Nurse",
		"dates": "01/2009 to 01/2010",
		"url": "http://casalomacollege.edu"
	}, {
		"name": "De La Salle University",
		"location": "Manila, Philippines",
		"degree": "Bachelor degree",
		"majors": "Economics",
		"dates": "06/1997 to 03/2001",
		"url": "http://dlsu.edu.ph"
	}]
}

$("#mapDiv").append(googleMap);
