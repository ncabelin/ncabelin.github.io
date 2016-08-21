$(document).ready(function() {

  var p = $("#projects");

  projects.forEach(function(project) {
    var content = '<div class="col-md-4 col-lg-4 col-sm-4 text-center projects"><span><button type="button" class="buttonC" data-toggle="modal" data-target="#' +
      project.id + '"><img src="' + project.image + '" alt="' + project.id + '"class="img-responsive center-block rounded"><strong>' + project.title.toUpperCase() + '</strong><br>' + project.sub +
      '</button></span></div><div id="' + project.id +
      '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">' +
      '<button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">' + project.title +
      '</h4></div><div class="modal-body"><img src="' + project.image + '" class="mod-img"><p>' + project.description +
      '</p><p><a href="' + project.url + '" target="_blank" class="yellowed text-center">VISIT WEBSITE</a></p><p><a href="' +
      project.github + '" target="_blank" class="yellowed text-center">VIEW CODE IN GITHUB</a></p></div><div class="modal-footer">' +
      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
    p.append(content);
  });

  var frontend = $('#frontend');

  frontendProjects.forEach(function(data) {
    var content = '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#frontend" href="#' + data.id + '">' + data.title + '</a></h4></div><div id="' + data.id + '" class="panel-collapse collapse"><div class="panel-body"><img src="' + data.image + '" class="mod-img center-block"><p>' + data.description + '<br><br><a href="' + data.url+ '" target="_blank">VISIT WEBSITE</a><br>' + '<a href="' + data.github+ '" target="_blank">VIEW GITHUB CODE</a></p></div></div></div>';
    frontend.append(content);
  });

  var gamesAcc = $("#games");

  games.forEach(function(game) {
    var content = '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#games" href="#' + game.id + '">' + game.title + '</a></h4></div><div id="' + game.id + '" class="panel-collapse collapse"><div class="panel-body"><img src="' + game.image + '" class="mod-img center-block"><p>' + game.description + '<br><br><a href="' + game.url+ '" target="_blank">VISIT WEBSITE</a><br>' + '<a href="' + game.github+ '" target="_blank">VIEW GITHUB CODE</a></p></div></div></div>';
    gamesAcc.append(content);
  });

  $('.projects').matchHeight();

  /* intro fade in of paragraph */
  $(".par").fadeOut(10);
  $(".par").fadeIn(2000);

  /* shows projects, scroll to projects animation */
  $("#view").click(function () {
    $("#about").animate({ height : "100%" }, 1000);
    $(".work").toggle("slow");
    $("html, body").animate({ scrollTop:$("#projs").offset().top }, 500);
  });

  /* scroll to contacts animation */
  $("#contactB").click(function() {
    $("html, body").animate({ scrollTop:$("#cont").offset().top }, 500);
  });

  /* scroll to top animation */
  $("#scrollToTop").click(function() {
    $("html, body").animate({ scrollTop:$("#hat").offset().top }, 500);
  });

});
