$(document).ready(function() {
  var lessC = $("#lessonContent");
  var lessH = $("#lessonHeading");
  var next = $("#next");
  var back = $("#back");
  var i = $("#instruction");
  var q = $("#question");
  var a = $("#answer");
  var tableAns = $('#tableAns');
  var c = $("#check");
  var r = $("#result");
  var total = $("#total");
  var scoreI = $("#score");
  var nex = $("#nex");
  var bak = $("#bak");
  var score = 0;
  var l = 0;
  var qItem = 0;
  var tableSet = false;
  var q1,q2,q3,q4,q5;

  function showLesson(lesson, item) {
    lessH.html(lesson.head);
    lessC.html(lesson.content);
    i.html(lesson.instruction);
    q.html(lesson.quiz[item].q);
    total.html(lesson.quiz.length);
    console.log(lesson.quiz);
    if (lesson.quiz[item].table) {
      tableSet = true;
      console.log(a);
      a.css('display', 'none');
      tableAns.html(lesson.quiz[item].d);
      tableAns.css('display', 'inline');
      total.html(lessArray[l].quiz[qItem].a.length);
    } else {
      a.css('display', 'inline');
      tableAns.css('display', 'none');
    }
    console.log(tableSet);
  }

  function reset() {
    score = 0;
    qItem = 0;
    if (tableSet) {
      tableSet = false;
    }
    a.empty();
    r.empty();
    scoreI.html(0);
    bak.css("display", "none");

    document.querySelector("#answer").value = " ";
  }

  c.click(function() {
      if (lessArray[l].quiz[qItem].table) {
        var tableAns = [];
        for (var i = 0; i < lessArray[l].quiz[qItem].a.length; i++) {
          var answerTd = $("#q" + (i + 1)).val();
          tableAns.push(answerTd);
        }
        for (var i = 0; i < lessArray[l].quiz[qItem].a.length; i++) {
          if (tableAns[i] != lessArray[l].quiz[qItem].a[i]) {
            r.css("color", "red");
            r.html("Wrong, try again");
            return;
          }
          r.css("color", "green");
          r.html("Correct !");
          if (i = (lessArray[l].quiz[qItem].a.length - 1)) {
            nex.css("display", "inline");
          }
          score++;
          scoreI.html(score);
        }
        return;
      }
      var qA = lessArray[l].quiz[qItem].a;
      var sA = document.querySelector("#answer").value;
      if (qA == sA) {
        r.css("color", "green");
        r.html("Correct !");
        nex.css("display", "inline");
        score++;
        scoreI.html(score);
      } else {
        r.css("color", "red");
        r.html("Wrong, try again");
      }
  });

  nex.click(function() {
    document.querySelector("#answer").value = "";
    qItem++;
    i.html(lessArray[l].instruction);
    q.html(lessArray[l].quiz[qItem].q);
    r.empty();
    nex.css("display", "none");
    bak.css("display", "inline");
  });

  bak.click(function() {
    qItem--;
    score--;
    i.html(lessArray[l].instruction);
    q.html(lessArray[l].quiz[qItem].q);
    r.empty();
  });

  next.click(function() {
    if (l < (lessArray.length - 1)) {
      l++;
      console.log(l);
      reset();
      showLesson(lessArray[l], 0);
    };
  });

  back.click(function() {
    if (l != 0) {
    l--;
    console.log(l);
    reset();
    showLesson(lessArray[l], 0);  
    } 
  });

  showLesson(lessArray[l], 0);
});
