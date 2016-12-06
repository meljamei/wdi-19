/*
Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

var calcCircumference = function (radius) {
  var circumference = 2 * radius * Math.PI;
  console.log("The circumference is " + circumference);
}

var calcArea = function (radius) {
  var area = Math.PI * radius * radius; // PI r squared
  console.log("The area is " + area);
}

calcCircumference(72);
calcArea(72);
calcCircumference(1); // Unit circle
