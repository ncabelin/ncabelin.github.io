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

function stringToNumber () {
  calcJoined = calcString.join("");
  numCalc = Number(calcJoined);
}

function calculateNumCalc () {
  if (calcMethod == "plus") {
  secondValue = numCalc;
  numCalc = initialValue + secondValue;
} else if (calcMethod == "minus") {
  secondValue = numCalc;
  numCalc = initialValue - secondValue;
} else if (calcMethod == "divide") {
  secondValue = numCalc;
  numCalc = initialValue / secondValue;
} else if (calcMethod == "multiply") {
  secondValue = numCalc;
  numCalc = initialValue * secondValue;
} else if (calcMethod == "none") {

}
 console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
 if (numCalc === Infinity) {
   numCalc = 0;
 }
};

function displayTo() {
    var x = numCalc;
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var stringCalc = parts.join(".");
  $("#answer").html(stringCalc);
};

$(document).ready(function() {
  startScratch();
  $("#ac").click(function(){
    startScratch();
    stringToNumber();
    displayTo();
  });
  $("#zero").click(function(){
    calcString.push("0");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#one").click(function(){
    calcString.push("1");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#two").click(function(){
    calcString.push("2");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#three").click(function(){
    calcString.push("3");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#four").click(function(){
    calcString.push("4");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#five").click(function(){
    calcString.push("5");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#six").click(function(){
    calcString.push("6");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#seven").click(function(){
    calcString.push("7");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#eight").click(function(){
    calcString.push("8");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#nine").click(function(){
    calcString.push("9");
    stringToNumber();
    displayTo();
    calculateNumCalc();
  });
  $("#point").click(function(){
    calcString.push(".");
    pointCounter++;
    if (pointCounter > 1) {
      calcString.pop();
    }
    stringToNumber();
    displayTo();
  });
  $("#ce").click(function(){
    calcString = [];
    secondValue = 0;
    numCalc = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
    console.log(calcString);
    displayTo();
  });
  $("#plus").click(function(){
    initialValue = numCalc;
    calcMethod = "plus";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
    displayTo();
  });
  $("#minus").click(function(){
    initialValue = numCalc;
    calcMethod = "minus";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
    displayTo();
  });
  $("#multiply").click(function(){
    initialValue = numCalc;
    calcMethod = "multiply";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
    displayTo();
  });
  $("#divide").click(function(){
    initialValue = numCalc;
    calcMethod = "divide";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
    displayTo();
  });
  $("#percent").click(function(){
    numCalc = numCalc * 0.01;
    displayTo();
    calcString = [];
    secondValue = 0;
    pointCounter = 0;
  });
  $("#equals").click(function(){
    displayTo();
  });
});
