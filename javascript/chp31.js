// Prompt the user for a standard calendar date
var standardDate = prompt("Enter a date in the standard calendar (YYYY-MM-DD):");

// Parse the user input to obtain year, month, and day
var parts = standardDate.split("-");
var year = parseInt(parts[0]);
var month = parseInt(parts[1]);
var day = parseInt(parts[2]);

// Define arrays for Hijri month names and days
var hijriMonths = [
  "Muharram",
  "Safar",
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Sha'ban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qi'dah",
  "Dhu al-Hijjah"
];

var hijriDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Islamic lunar calendar algorithm (not a complete implementation)
var g = year - 622;
var h = month - 1;
var i = day - 1;
var dayOfWeek = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + 2) % 7;
var hijriMonth = Math.floor((29.5 * h + 30.5) % 354.36);
var hijriDay = i + 1;

// Display the converted Hijri date
alert("Standard Date: " + standardDate);
alert("Hijri Date: " + hijriDays[dayOfWeek] + ", " + hijriMonths[hijriMonth] + " " + hijriDay + ", " + g + " AH");
