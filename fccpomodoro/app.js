var myVar, timeMinutes, timeSeconds, breakTime, sessionBreak, sessionTime, pushedOnce;
  var initialTime = 1500;
  pushedOnce = false;
  breakTime = 300;
  sessionBreak = false;
  breakMinutes = Math.floor(breakTime/60);
  timeMinutes = Math.floor(initialTime/60);
  function displaySession() {
    sessionTime = timeMinutes;
    if (sessionTime == 1) {
    $("#sessionLength").html(" "+sessionTime + " minute");
      } else {
    $("#sessionLength").html(" "+sessionTime + " minutes");
      }
  }
  displaySession();
  function displayBreak () {
  breakMinutes = Math.floor(breakTime/60);
  if (breakMinutes == 1) {
  $("#breakLength").html(" "+breakMinutes + " minute");
    } else {
  $("#breakLength").html(" "+breakMinutes + " minutes");
    }
  }
  function printTime() {
    timeMinutes = Math.floor(initialTime/60);
    timeSeconds = initialTime - timeMinutes * 60;
  }
  function displayTime() {
    if (timeMinutes == 1) {
    $("#timeNow").html(timeMinutes + " minute and " + timeSeconds + " seconds left");
  } else {
    $("#timeNow").html(timeMinutes + " minutes and " + timeSeconds + " seconds left");
  }
  }
  function startTimeButton() {
    if (pushedOnce == false) {
    myVar = setInterval(beginTime, 1000);
    pushedOnce = true;
    }
  }
  function beginTime() {
    if (initialTime == 0) {
      if (sessionBreak == false) {
      $("#status").html("BREAK SESSION !");
      initialTime = breakTime;
      sessionBreak = true;
      return initialTime;
    } else {
      sessionBreak = false;
      console.log(sessionBreak);
      $("#status").html("SESSION");
      initialTime = sessionTime;
    }
    }
    console.log(initialTime);
    initialTime--;
    printTime();
    document.getElementById("timeNow").innerHTML = (timeMinutes + " minutes and " + timeSeconds + " seconds left");
    }
    function stopTimeButton() {
      clearInterval(myVar);
      pushedOnce = false;
    };
    function clearTime() {
      initialTime = 0;
    }
  $(document).ready(function() {
    displayBreak();
    printTime();
    $("#timeNow").html(timeMinutes + " minutes and " + timeSeconds + " seconds left");
    $("#clearTime").click(function () {
      stopTimeButton();
      initialTime = 0;
      printTime();
      displayTime();
    });
    $("#plusSession").click(function () {
      stopTimeButton();
      initialTime += 60;
      printTime();
      displayTime();
      displaySession();
    });
    $("#minusSession").click(function () {
      stopTimeButton();
      if (initialTime > 0) {
      initialTime -= 60;
      }
      printTime();
      displayTime();
      displaySession();
    });
    $("#plusBreak").click(function () {
      breakTime += 60;
      displayBreak();
    });
    $("#minusBreak").click(function () {
      if (breakTime > 0) {
      breakTime -= 60;
      }
      displayBreak();
    });
});