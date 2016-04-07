
$(function() {

  var calcString, calcJoined, numCalc, initialValue, secondValue, calcMethod, pointCounter;

  function startScratch () {
    calcString = []; //array to put digits entered
    calcJoined = []; //joined calcString array into one string
    numCalc = 0; //number calculated for display
    initialValue = 0; //before
    secondValue = 0; //after
    calcMethod = "none"; //what action is saved
    pointCounter = 0; //to avoid someone trying to put two points
  }

  startScratch()

  function stringToNumber () {
    calcJoined = calcString.join("");
    numCalc = Number(calcJoined);
  }

  // perform calculation
  function calculateNumCalc () {
    if (calcMethod == "+") {
      secondValue = numCalc;
      numCalc = initialValue + secondValue;
    } else if (calcMethod == "-") {
      secondValue = numCalc;
      numCalc = initialValue - secondValue;
    } else if (calcMethod == "/") {
      secondValue = numCalc;
      numCalc = initialValue / secondValue;
    } else if (calcMethod == "x") {
      secondValue = numCalc;
      numCalc = initialValue * secondValue;
    }

    if (numCalc === Infinity) {
     numCalc = 0;
    }
  }

  // convert then display as string with comma separator
  function displayTo() {
    var parts = numCalc.toString().split(".");

    // put comma separator
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var stringCalc = parts.join(".");
    $("#answer").html(stringCalc);
  }

  // numbers button clicks
  $(".num").click(function(data) {
    calcString.push(this.textContent)
    stringToNumber()
    displayTo()
    calculateNumCalc()
  })

  // calculation method clicked (except for division)
  $(".method").click(function(data) {
    calcMethod = this.textContent;
    initialValue = numCalc;
    calcString = [];
    pointCounter = 0;
    displayTo();
  })

  // division click
  $("#divide").click(function(data) {
    calcMethod = "/";
    initialValue = numCalc;
    calcString = [];
    pointCounter = 0;
    displayTo();
  })

  // decimal point button, prevents occurence of more than one in the array
  $("#point").click(function(){
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
    numCalc = numCalc * 0.01;
    displayTo();
    calcString = [];
    secondValue = 0;
    pointCounter = 0;
  });

  // display answer
  $("#equals").click(function(){
    displayTo();
  });

  // reset calculator
  $("#ac").click(function(){
    startScratch();
    stringToNumber();
    displayTo();
  });

  // only resets current string array
  $("#ce").click(function(){
    calcString = [];
    secondValue = 0;
    numCalc = 0;
    displayTo();
  });

})

