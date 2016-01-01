var bio = {
	"name": "Neptune Michael Cabelin",
	"role": "Software Engineer",
	"contact-info": {
		"phone": "661-513-7773",
		"location": "Palmdale, CA"
	},
	"email" : "ncabelin@gmail.com",
	"github" : "ncabelin",
	"picture-URL": "https://github.com/ncabelin/ncabelin.github.io/blob/master/JSONResume/images/me.jpg?raw=true",
	"welcome-message": "Welcome to my profile page, feel free to contact me for more info.",
	"skills": ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "Photoshop"]
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
		"description": "Interactive Resume featuring implementation of HTML5,CSS3,JQuery,JSON",
		"imageS": ["https://cloud.githubusercontent.com/assets/15892944/12048463/4578b5b6-ae90-11e5-94d8-a4282c274241.jpg", "http://placehold.it/150x150"]
	}, {
		"title": "Responsive Design Portfolio",
		"dates": "12/2015",
		"description": "Portfolio to showcase ability to implement responsive website design with responsive images",
		"imageS": ["http://placehold.it/150x150", "http://placehold.it/150x150"]
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
