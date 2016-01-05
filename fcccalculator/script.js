
var calcString = []; //array to put digits entered
var calcJoined = []; //joined calcString array into one string
var numCalc = 0; //number calculated for display
var initialValue = 0; //before
var secondValue = 0; //after
var calcMethod = "none"; //what action is saved
var pointCounter = 0; //to avoid someone trying to put two points

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
};

function displayTo() {
  $("#answer").empty();
  $("#answer").append(numCalc);
};

$(document).ready(function() {
  $("#ac").click(function(){
    calcString = []; //array to put digits entered
    calcJoined = []; //joined calcString array into one string
    numCalc = 0; //number calculated for display
    initialValue = 0; //before
    secondValue = 0; //after
    calcMethod = "none"; //what action is saved
    pointCounter = 0; //to avoid someone trying to put two points
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
    secondValue = numCalc;
    calcMethod = "none";
    numCalc = 0;
    displayTo();
  });
  $("#plus").click(function(){
    initialValue = numCalc;
    numCalc = 0;
    calcMethod = "plus";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
  });
  $("#minus").click(function(){
    initialValue = numCalc;
    numCalc = 0;
    calcMethod = "minus";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
  });
  $("#multiply").click(function(){
    initialValue = numCalc;
    numCalc = 0;
    calcMethod = "multiply";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
  });
  $("#divide").click(function(){
    initialValue = numCalc;
    numCalc = 0;
    calcMethod = "divide";
    calcString = [];
    pointCounter = 0;
    console.log(initialValue + " " + calcMethod + " " + secondValue + " equals " + numCalc);
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
