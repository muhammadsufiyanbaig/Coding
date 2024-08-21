var birthday = new Date("September 07, 2023");
alert("Birthday: " + birthday);
var changingBirthday = new Date(birthday);
var changingYear = Math.floor(changingBirthday.setFullYear(2005) / (1000 * 60 * 60 * 24));
changingBirthday.setDate(3);
alert("Actual Year (changed to 2005): " + changingYear);
alert("Actual Date (changed to the 3rd day of the month): " + changingBirthday);
