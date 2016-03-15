var lesson1 = {
  head : "Chapter 1, Lesson 1",
  content : "<h4>Counting Significant Figures</h4><p>The significant figures are all measured numbers including the last estimated digit:</p><ul><li>All non zero digits</li><li>Zeros between nonzero digits</li><li>Zeros within a decimal number</li><li>All digits in a coefficient of a number written in scientific notation</li></ul><p>An exact number is obtained from counting or a definition and has no effect on the number of significant figures in the final answer.</p>" };

lesson1.instruction = "State the number of significant figures in each of the following : ";
lesson1.quiz = [
  { q : "0.003 045 mm", a : 4 },
  { q : "15 000 m", a : 2 },
  { q : "45.067 kg", a : 5 },
  { q : "5.30 x 10^3 g", a : "exact"} ];

var lesson2 = {
  head : "Chapter 1, Lesson 2",
  content : "<h4>Rounding Off</h4><p>Calculator displays are rounded off to give the correct number of significant figures.</p><ul><li>If the first digit to be dropped is 4 or less, then it and all the following digits are simply dropped from the number.</li><li>If the first digit to be dropped is 5 or greater, then the last retained digit of the number is increased by 1.</li></ul><p>One or more significant zeros are added when the calculator display has fewer digits than the needed number of significant figures.</p>"
};

lesson2.instruction = "Round off each of the following to three significant figures:";
lesson2.quiz = [
  { q : "3.608 92 L", a : 3.61 },
  { q : "0.003 870 298 m", a: 0.00387 },
  { q : "6 g", a : 6.00 }
  ];

var lesson3 = {
  head : "Chapter 1, Lesson 3",
  content : "<h4>Using Significant Figures in Calculations</h4><p>In multiplication or division, the final answer is written so that it has the same number of significant figures as the measurement with the fewest significant figure (SFs).</p><p>In Addition or Subtraction, the final answer is written so that it has the same number of decimal places as the measurement having the fewest decimal places.</p>"
};

lesson3.instruction = "Perform the following calculations using measured numbers and give answers with the correct number of SFs.";
lesson3.quiz = [
  { q : "4.0g m x 0.6078", a : 2.46 },
  { q : "4.50 g / 3.27 mL", a : 1.38 },
  { q : "0.758 g + 3.10", a : 3.86 },
  { q : "13.538 km - 8.6 km", a : 4.9 }
  ];

var lesson4 = {
  head : "Chapter 1, Lesson 4",
  content : "<h4>Using Prefixes</h4><p>In the metric and SI systems of units, a prefix attached to a unit increases or decreases its size by some factor of 10.</p><p>When the prefix centi is used with the unit meter, it becomes centimeter, a length that is one-hundredth of a meter (0.01m).</p><p>When the prefix milli is used with the unit meter, it becomes millimeter, a length that is one-thousandth of a meter (0.001 m)</p>"
};

lesson4.instruction = "Complete the following statements with the correct prefix symbol:";
lesson4.quiz = [
  { q : "1000 m = 1 __m", a: "k" },
  { q : "0.01 g = 1 __g", a: "c" },
  ];

var lesson5 = {
  head : "Chapter 1, Lesson 5",
  content : "<h4>Writing Conversion Factors from Equalities</h4><p>A conversion factor allows you to change from one unit to another.</p><p>Two conversion factors can be written for any equality in the metric, U.S., or metric-U.S. systems of measurement.</p><p>Two conversion factors can be written for a relation stated within a problem or for a percentage (%).</p>"
};

lesson5.instruction = "Write two conversion factors for the equality:";
lesson5.quiz = [
  { q : "1 L = 1000 mL", a: [1000,1,1,1000], d : "<table><div class='container'><tr><td><input type='text' id='q1' class='blank underlined'>mL</td><td>&nbsp;&nbsp; and &nbsp;&nbsp;</td><td><input type='text' id='q3' class='blank underlined'>L</td></tr><tr></tr><tr><td><input type='text' id='q2' class='blank'>L</td><td></td><td><input type='text' id='q4' class='blank'>mL</td></tr></div></table>",
    table : true }
  ];

var lesson6 = {
  head : "Chapter 1, Lesson 6",
  content : "<h4>Using Conversion Factors</h4><p>In problem solving, conversion factors are used to cancel the given unit and to provide the needed unit for the answers</p><ul><li>State the given and needed quantities.</li><li>Write a plan to convert the given unit to the needed unit.</li><li>State the equalities and conversion factors.</li><li>Set up the problem to cancel units and calculate the answer.</li></ul>"
};

lesson6.instruction = "Solve the problem using the steps listed in this slide and give the answer.";
lesson6.quiz = [
  { q : "A computer chip has a width of 0.75 in. What is the distance in millimeters(mm)?" , a : "19 mm" }
  ];

var lesson7 = {
  head : "Chapter 1, Lesson 7",
  content : "<h4>Using Density as a Conversion Factor</h4><p>Density is an equality of mass and volume for a substance, which is written as the density expression</p><p>Density = m/v</p><p>Density is useful as a conversion factor to convert between mass and volume.</p>"
};

lesson7.instruction = "Solve the problem:";
lesson7.quiz = [
  { q : "The element tungsten used in light bulb filaments has a density of 19.3 g/cm3. What is the volume in, in cubic centimeters(cm3), of 250 g of tungsten?", a : "13 cm3" }
  ];

var lessArray = [lesson1, lesson2, lesson3, lesson4, lesson5, lesson6, lesson7];