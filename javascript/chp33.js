var today = new Date();
var IndependenceDay = new Date("August, 14, 1947 00:00:00");
var Time = today.getTime();
var Since = IndependenceDay.getTime();
var totalPeriod = Time-Since;
var convert= totalPeriod/ (1000 *60*60*24);
var approx = Math.floor(convert);
alert(totalPeriod);
alert(approx);