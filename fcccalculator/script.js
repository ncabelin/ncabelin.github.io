var calculation = [];
var calcDisplay = [];
var pointCounter = 0;
var calcValue = 0;
var calcMethod = "none";
var numCalc = 0;
var calc;
function displayTo() {
  calcDisplay = calculation;
  calC = calcDisplay.join("");
  numCalc = Number(calC);
  $("#answer").empty();
  $("#answer").append(numCalc);
};
$(document).ready(function() {
  $("#ac").click(function(){
    calculation = [];
    pointCounter = 0;
    calcValue = 0;
    calcMethod = "none";
    displayTo();
  });
  $("#zero").click(function(){
    calculation.push("0");
    displayTo();
  });
  $("#one").click(function(){
    calculation.push("1");
    displayTo();
  });
  $("#two").click(function(){
    calculation.push("2");
    displayTo();
  });
  $("#three").click(function(){
    calculation.push("3");
    displayTo();
  });
  $("#four").click(function(){
    calculation.push("4");
    displayTo();
  });
  $("#five").click(function(){
    calculation.push("5");
    displayTo();
  });
  $("#six").click(function(){
    calculation.push("6");
    displayTo();
  });
  $("#seven").click(function(){
    calculation.push("7");
    displayTo();
  });
  $("#eight").click(function(){
    calculation.push("8");
    displayTo();
  });
  $("#nine").click(function(){
    calculation.push("9");
    displayTo();
  });
  $("#point").click(function(){
    calculation.push(".");
    pointCounter++;
    if (pointCounter > 1) {
      calculation.pop();
    }
    displayTo();
  });
  $("#ce").click(function(){
    calcValue = numCalc;
    calcMethod = "none";
    numCalc = 0;
    $("#answer").empty();
    $("#answer").append(numCalc);
  });
  $("#plus").click(function(){
    calcValue = numCalc;
    numCalc = 0;
    calcMethod = "plus";
    calculation = [];
    pointCounter = 0;
  });
  $("#minus").click(function(){
    calcValue = numCalc;
    numCalc = 0;
    calcMethod = "minus";
    calculation = [];
    pointCounter = 0;
  });
  $("#multiply").click(function(){
    calcValue = numCalc;
    numCalc = 0;
    calcMethod = "multiply";
    calculation = [];
    pointCounter = 0;
  });
  $("#divide").click(function(){
    calcValue = numCalc;
    numCalc = 0;
    calcMethod = "divide";
    calculation = [];
    pointCounter = 0;
  });
  $("#percent").click(function(){
    numCalc = numCalc * 0.01;
    $("#answer").empty();
    $("#answer").append(numCalc);
    calculation = [];
    pointCounter = 0;
  });
  $("#equals").click(function(){
    if (calcMethod == "plus") {
    numCalc = numCalc + calcValue;
  } else if (calcMethod == "minus") {
    numCalc = calcValue - numCalc;
  } else if (calcMethod == "divide") {
    numCalc = calcValue / numCalc;
  } else if (calcMethod == "multiply") {
    numCalc = calcValue * numCalc;
  }
    calculation = [];
    pointCounter = 0;
    $("#answer").empty();
    $("#answer").append(numCalc);
  });
});
