// var currYear = new Date();
// var YearOfIndependence = currYear.getTime();
// console.log(YearOfIndependence);


var birthdateInput = prompt("Enter your birthdate (YYYY-MM-DD):");
var birthdate = new Date(birthdateInput);
var currentDate = new Date();
var ageInMilliseconds = currentDate - birthdate;
var age = ageInMilliseconds / (1000* 60*60*24*365);
alert("Your chronological age is approximately " + Math.floor(age) + " years.");
