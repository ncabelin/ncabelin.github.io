$(function() {
	'use strict';
	var header_name = $('.header_name, .profile_pic'),
			skills_one = $('.skill_one'),
			skillsIndex = -1;

	// ANIMATIONS, TRANSITIONS etc.
	// ============================
	// fade animation of skillset
	function skill() {
		++skillsIndex;
		skills_one.eq(skillsIndex % skills_one.length)
			.fadeIn(1000)
			.delay(1000)
			.fadeOut(1000, skill);
	}

	$(window).scroll(function() {
		$('.hide-me').each(function() {
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				// if object is completely visible, animate opacity to 1;
				if (bottom_of_object < bottom_of_window) {
					$(this).animate({ 'opacity': '1'}, 500);
				}
		});
	});

	// scrollspy
	$('body').scrollspy({ target: '#nav'});

	// header animation on load
	$('.header_name').fadeOut(0).fadeIn(500);
	$('.header_title').fadeOut(0).fadeIn(2000);
	$('.profile_pic').fadeOut(0).fadeIn(3000);
	skill();

	// scroll animation
	$('.nav_about').click(function() {
		$('html, body').animate({ scrollTop:$('#about').offset().top - 100}, 500);
	});
	$('.nav_projects').click(function() {
		$('html, body').animate({ scrollTop:$('#project_feat').offset().top - 50}, 500);
	});
	$('.nav_contact').click(function() {
		$('html, body').animate({ scrollTop:$('#contact').offset().top - 100}, 500);
	});

	// CONTENT FILL-UP
	// ===============
	// featured projects
	var content = '';
	projects.forEach(function(x, i) {
		var keywords = '';
		x.sub.forEach(function(y) {
			keywords += '<button class="btn btn-primary btn-xs keys">' + y + '</button>';
		});
		var github = x.github ? '<a href="' + x.github + '" class="btn btn-danger" target="_blank">VIEW GITHUB</a>' : '';
		if ((i+1) % 2 == 0) {
			content += '<div class="row"><div class="col-md-6"><img src="' + x.image +'" class="hide-me project_image center-block img-rounded img-responsive" /></div><div class="col-md-6"><h3>' + x.title + '</h3>' + x.description + '<div><hr class="projects">' + keywords +'<br><br><a href="' + x.url + '" class="btn btn-primary" target="_blank">VIEW</a>&nbsp; <a href="' + x.github + '" class="btn btn-danger" target="_blank">VIEW GITHUB</a></div></div><div class="col-md-2"></div></div><hr>';
		} else {
			content += '<div class="row"><div class="col-md-6 visible-xs visible-sm"><img src="' + x.image +'" class="hide-me project_image center-block img-rounded img-responsive" /></div><div class="col-md-6"><h3>' + x.title + '</h3>' + x.description + '<div><hr class="projects">' + keywords + '<br><br><a href="' + x.url + '" class="btn btn-primary" target="_blank">VIEW</a>&nbsp;' + github + '</div></div><div class="col-md-6"><img src="' + x.image +'" class="hide-me project_image center-block hidden-sm hidden-xs img-rounded img-responsive" /></div></div><hr>';
		}
	});
	$('#projects').append(content);
	
	// other projects
	var games = '', 
		utilities = '',
		wordpress = '',
		others = '';
	frontendProjects.forEach(function(x) {
		var subStr = '';
		var subs = x.sub.forEach(function(y) {
			subStr += '<button class="btn btn-xs btn-primary">' + y + '</button>';;
		});
		var github = x.github ? '<a class="info" href="' + x.github + '" target="_blank">View Github</a>' : '';
		var head = '<div class="col-md-3 col-sm-6 col-xs-6 each-project"><div class="hovereffect">';
		var img = '<a href="' + x.github + '" target="_blank"><img src="' + x.image + '" class="img-responsive"></a><div class="overlay"><a href="' + x.github + '" target="_blank"><h2>' + x.title + '</h2></a><a class="info" href="' + x.url + '" target="_blank">View Site</a><br>' + github + '</div>';
		var foot = "<div class='desc'>" + x.description + '</div><div>' + subStr + '</div></div></div>';
		var everything = (head + img + foot);
		if (x.type == 'game') {
			games += (everything);
		} else if (x.type == 'utility') {
			utilities += (everything);
		} else if (x.type == 'wordpress') {
			wordpress += (everything);
		} else {
			others += (everything);
		}
	});
	$('#game').html(games);
	$('#utility').html(utilities);
	$('#wordpress').html(wordpress);
	$('#other').html(others);

	// skills list accordion
	var makeSkillsList = function(listTarget, list) {
		var frontEndUL = $('<ul />');
		list.forEach(function(x) {
			frontEndUL.append($('<li />', { text: x }));
		});
		$(listTarget).html(frontEndUL);
	};

	makeSkillsList('#frontEndList', skillsFrontend);
	makeSkillsList('#backEndList', skillsBackend);
	makeSkillsList('#adminList', skillsAdmin);

		// add click event to accordion heading
	var accordionClick = function(target, id) {
		$(target).click(function() {
			document.getElementById(id).click();
		});
	};

	accordionClick('#headingOne', 'f-btn');
	accordionClick('#headingTwo', 'b-btn');
	accordionClick('#Admin', 'a-btn');

});