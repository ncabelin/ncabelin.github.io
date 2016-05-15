
$(function() {

  function speakIt(text) {
    responsiveVoice.speak(text);
  }

  var calcString, calcJoined, numCalc, initialValue, secondValue, calcMethod, pointCounter;

  function startScratch () {
    calcString = []; //array to put digits entered
    calcJoined = []; //joined calcString array into one string
    numCalc = 0; //number calculated for display
    initialValue = 0; //before
    secondValue = 0; //after
    calcMethod = ""; //what last calculation method is saved
    pointCounter = 0; //to avoid someone trying to put two points
  }

  setTimeout(function() { speakIt('Welcome to the TALKING CALCULATOR powered by responsiveVoice'); }, 500);
  startScratch();

  function stringToNumber () {
    calcJoined = calcString.join("");
    numCalc = Number(calcJoined);
  }

  // perform calculation
  function calculateNumCalc () {
    if (calcMethod == "+") {
      numCalc += initialValue;
    } else if (calcMethod == "-") {
      secondValue = numCalc;
      numCalc = initialValue - numCalc;
    } else if (calcMethod == "/") {
      secondValue = numCalc;
      numCalc = initialValue / secondValue;
    } else if (calcMethod == "x") {
      numCalc *= initialValue;
    }

    if (numCalc === Infinity) {
     numCalc = 0;
    }
  }

  function speakMethod(method) {
    switch(method) {
      case '+':
        responsiveVoice.speak("plus");
        break;
      case '-':
        responsiveVoice.speak("minus");
        break;
      case 'x':
        responsiveVoice.speak("times");
        break;
    }
  }

  // convert then display as string with comma separator
  function displayTo() {
    var parts = numCalc.toString().split(".");

    // put comma separator
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var stringCalc = parts.join(".");
    $("#answer").html(stringCalc);
    // responsiveVoice.speak(stringCalc);
    return stringCalc;
  }

  // numbers button clicks
  $(".num").click(function(data) {
    calcString.push(this.textContent);
    stringToNumber();
    var answer = displayTo();
    responsiveVoice.speak(answer);
    calculateNumCalc();
  });

  // calculation method clicked (except for division)
  $(".method").click(function(data) {
    calcMethod = this.textContent;
    initialValue = numCalc;
    calcString = [];
    pointCounter = 0;
    speakMethod(calcMethod);
    displayTo();
  });

  // division click
  $("#divide").click(function(data) {
    responsiveVoice.speak("divided by");
    calcMethod = "/";
    initialValue = numCalc;
    calcString = [];
    pointCounter = 0;
    displayTo();
  });

  // decimal point button, prevents occurence of more than one in the array
  $("#point").click(function(){
      responsiveVoice.speak("point");
      calcString.push(".");
      pointCounter++;
      if (pointCounter > 1) {
        calcString.pop();
      }
      stringToNumber();
      displayTo();
    });

  // just multiplies current number by 0.01
  $("#percent").click(function(){
    responsiveVoice.speak("percent");
    numCalc = numCalc * 0.01;
    displayTo();
    calcString = [];
    secondValue = 0;
    pointCounter = 0;
  });

  // display answer
  $("#equals").click(function(){
    var answer = displayTo();
    responsiveVoice.speak("equals " + answer);
  });

  // reset calculator
  $("#ac").click(function(){
    responsiveVoice.speak("reset");
    startScratch();
    stringToNumber();
    displayTo();
  });

  // only resets current string array
  $("#ce").click(function(){
    responsiveVoice.speak("C E");
    calcString = [];
    secondValue = 0;
    numCalc = 0;
    displayTo();
  });

});
