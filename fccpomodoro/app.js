$(function() {

  var sessionLength = $("#sessionLength");
  var sessionBreak = $('#sessionBreak');
  var sliderSession = $("#sliderSession");
  var sliderBreak = $("#sliderBreak");
  var sliders = $(".sliders");
  var amount = $("#amount"); // 
  var amount2 = $("#amount2"); // 
  var amount3 = $("#amount3"); // break seconds
  var amount4 = $("#amount4"); // session seconds 
  var start = false;
  var bell = document.getElementById("bell");
  var civil = document.getElementById("civil");
  var click = document.getElementById("click");
  var status = $("#status");
  var startTime = $("#startTime");
  var pauseTime = $("#pauseTime");
  var clearTime = $("#clearTime");
  var myVar, timeMinutes, timeSeconds, initialTime, sliderSessionSet, sliderBreakSet;
  var session = true;
  var pause = false;
  var sessT = $(".sess");
  var breakT = $(".break");
  var once = false;

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

  function reset() {
    sliderSessionSet = sliderSession.slider("value");
    sliderBreakSet = sliderBreak.slider("value");
    amount.val( sliderSessionSet )
    amount2.val( sliderBreakSet )
    amount3.val(0)
    amount4.val(0)
  }

  reset()

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

  pauseTime.css("display","none")

  startTime.click(function() {
    console.log(sliderSessionSet + " is session")
    console.log(sliderBreakSet + " is break")
    startTime.css("display","none")
    pauseTime.css("display","inline")
    pause = false;
    sliderSession.slider("disable")
    sliderBreak.slider("disable")
    if (!start) {
      if (session) {
        breakT.css("opacity", 0.1)
        sliderSessionSet = sliderSession.slider("value");
        sliderBreakSet = sliderBreak.slider("value");
        initialTime = sliderSessionSet * 60;
        console.log(sliderSessionSet + " is session")
        console.log(sliderBreakSet + " is break")
      } else {
        sessT.css("opacity", 0.1)
        sliderBreakSet = sliderBreak.slider("value");
        sliderSessionSet = sliderSession.slider("value");
        initialTime = sliderBreakSet * 60;
        console.log(sliderSessionSet + " is session")
        console.log(sliderBreakSet + " is break")
      }
      bell.play()
      myVar = setInterval(beginTime, 1000);
      start = true;
    }
  })

  function beginTime() {
    if (initialTime == 0) {
      civil.play()
      // if session is false (breaktime) turn session opaque, play session
      if (!session) {
        breakT.css("opacity", 0.1)
        sessT.css("opacity", 1)
        console.log(sliderSessionSet + " is session")
        console.log(sliderBreakSet + " is break")
        initialTime = sliderSessionSet * 60
        session = true;
      } else {
      // if session is true (sessiontime), turn break opaque, play break
        breakT.css("opacity", 1)
        sessT.css("opacity", 0.1)
        console.log(sliderSessionSet + " is session")
        console.log(sliderBreakSet + " is break")
        initialTime = sliderBreakSet * 60
        session = false;
      }
    }
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
