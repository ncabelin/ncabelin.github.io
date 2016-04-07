$(function() {

  var sessionLength = $("#sessionLength");
  var sessionBreak = $('#sessionBreak');
  var sliderSession = $("#sliderSession");
  var sliderBreak = $("#sliderBreak");
  var sliders = $(".sliders");

  // input counters
  var amount = $("#amount"); // session minute
  var amount2 = $("#amount2"); // session seconds
  var amount3 = $("#amount3"); // break seconds
  var amount4 = $("#amount4"); // session seconds 
  var start = false;

  // audio
  var bell = document.getElementById("bell");
  var civil = document.getElementById("civil");
  var click = document.getElementById("click");

  // buttons
  var startTime = $("#startTime");
  var pauseTime = $("#pauseTime");
  var clearTime = $("#clearTime");

  var myVar, timeMinutes, timeSeconds, initialTime, sliderSessionSet, sliderBreakSet;
  var session = true;
  var pause = false;

  // input fields grouped by session and break
  var sessT = $(".sess");
  var breakT = $(".break");

  // jQuery UI slider invoked
  sliderSession.slider({
    range: "max",
    min: 1,
    max: 60,
    value: 25,
    slide: function(event, ui) {
      amount.val(ui.value)
    }
  });

  sliderBreak.slider({
    range: "max",
    min: 1,
    max: 60,
    value: 5,
    slide: function(event, ui) {
      amount2.val(ui.value)
    }
  });

  function getValues() {
    sliderSessionSet = sliderSession.slider("value");
    sliderBreakSet = sliderBreak.slider("value");
  }

  // reset gets current slider values in minutes and passes to input counters
  function reset() {
    getValues()
    amount.val( sliderSessionSet )
    amount2.val( sliderBreakSet )
    amount3.val(0)
    amount4.val(0)
  }

  reset()

  // converts seconds to minutes and seconds format
  function displayTime() {
    timeMinutes = Math.floor(initialTime/60);
    timeSeconds = initialTime - timeMinutes * 60;
    if (session) {
      amount.val(timeMinutes)
      amount4.val(timeSeconds)
    } else {
      amount2.val(timeMinutes)
      amount3.val(timeSeconds)
    }
  }

  // initially pause button will be invisible, while play button will be visible
  pauseTime.css("display","none")

  // start click
  startTime.click(function() {
    bell.play()
    startTime.css("display","none")
    pauseTime.css("display","inline")
    pause = false;
    sliderSession.slider("disable")
    sliderBreak.slider("disable")

    // start has been pushed once
    if (!start) {
      if (session) {
        // session timer
        breakT.css("opacity", 0.1)
        getValues()
        initialTime = sliderSessionSet * 60;
      } else {
        // break timer 
        sessT.css("opacity", 0.1)
        getValues()
        initialTime = sliderBreakSet * 60;
      }

      // starts countdown
      myVar = setInterval(beginTime, 1000);
      start = true;
    }
  })

  function beginTime() {
    if (initialTime == 0) {
      civil.play()
      // if session is false (breaktime), turn session field opaque, begin session
      if (!session) {
        breakT.css("opacity", 0.1)
        sessT.css("opacity", 1)
        initialTime = sliderSessionSet * 60
        session = true;
      } else {
      // if session is true (sessiontime), turn break field opaque, begin break
        breakT.css("opacity", 1)
        sessT.css("opacity", 0.1)
        initialTime = sliderBreakSet * 60
        session = false;
      }
    }

    // countdown if not paused
    if (!pause) {
        initialTime--;
        displayTime()
    } 
 
  }

  pauseTime.click(function() {
    civil.pause()
    click.play()
    pause = true;
    startTime.css("display","inline")
    pauseTime.css("display","none")
  })

  clearTime.click(function() {
    clearInterval(myVar)
    breakT.css("opacity", 1)
    sessT.css("opacity", 1)
    click.play()
    startTime.css("display","inline")
    pauseTime.css("display","none")
    pause = true;
    sliderSession.slider("enable")
    sliderBreak.slider("enable")
    amount3.val(0)
    amount4.val(0)
    start = false;
    reset()
  })


})
