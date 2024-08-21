var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// question 2
console.log("hello world");
console.log("Hello Eric, would you like to learn some TypeScript today?");
// question 3
var personName = "John Doe";
console.log(personName.toLowerCase()); // Print name in lowercase
console.log(personName.toUpperCase()); // Print name in uppercase
console.log(toTitleCase(personName)); // Print name in title case
function toTitleCase(str) {
    return str.toLowerCase().replace(/^(.)|\s+(.)/g, function (char) { return char.toUpperCase(); });
}
// question 4
var quote = 'A person who never made a mistake never tried anything new.';
var author = 'Albert Einstein';
console.log("".concat(author, " once said, \"").concat(quote, "\""));
// question 5
var famous_person = 'Albert Einstein';
var quote1 = 'A person who never made a mistake never tried anything new.';
var message = "".concat(famous_person, " once said, \"").concat(quote1, "\"");
console.log(message);
// question 6 
var nameWithWhitespace = "\t\n  John Doe   \n\t";
console.log("Name with whitespace: \"".concat(nameWithWhitespace, "\""));
var strippedName = nameWithWhitespace.trim();
console.log("Stripped name: \"".concat(strippedName, "\""));
//question 7
console.log("Addition: ".concat(5 + 3));
console.log("Subtraction: ".concat(10 - 2));
console.log("Multiplication: ".concat(2 * 4));
console.log("Division: ".concat(16 / 2));
//question 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//question 9
var favoriteNumber = 42;
var message1 = "My favorite number is ".concat(favoriteNumber, ".");
console.log(message1);
//question 10
// Program: Addition
// Author: John Smith
// Date: July 8, 2023
// This program performs addition of two numbers and prints the result.
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is ").concat(sum, "."));
// Program: Greeting
// Author: Jane Doe
// Date: July 8, 2023
// This program prints a greeting message.
var name2 = "Alice";
console.log("Hello, ".concat(name2, "! Welcome to the program."));
// question 11
var names = ["Alice", "Bob", "Charlie", "David"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// question 12
var names3 = ["Alice", "Bob", "Charlie", "David"];
for (var i = 0; i < names3.length; i++) {
    console.log("Hello, ".concat(names3[i], "! Have a great day!"));
}
// question 13
var transportation = ["Honda motorcycle", "Tesla Model S", "Ford Mustang", "BMW X5"];
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i], "."));
}
// question 14
var guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
// qustion 15
var guestList1 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var absentGuestIndex = 1; // Assuming Marie Curie can't make it
var newGuest = "Nikola Tesla";
console.log("".concat(guestList1[absentGuestIndex], " can't make it to the dinner."));
guestList[absentGuestIndex] = newGuest;
console.log("Invitations:");
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
// question 16
var guestList2 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var absentGuestIndex1 = 1; // Assuming Marie Curie can't make it
var newGuest1 = "Nikola Tesla";
console.log("".concat(guestList2[absentGuestIndex1], " can't make it to the dinner."));
guestList2[absentGuestIndex1] = newGuest1;
console.log("Invitations:");
for (var i = 0; i < guestList2.length; i++) {
    console.log("Dear ".concat(guestList2[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
console.log("Good news! I found a bigger dinner table.");
// Add new guests
guestList2.unshift("Isaac Newton"); // Add to the beginning
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Grace Hopper"); // Add to the middle
guestList2.push("Ada Lovelace"); // Append to the end
console.log("Updated Invitations:");
for (var i = 0; i < guestList2.length; i++) {
    console.log("Dear ".concat(guestList2[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
// question 17
var guestList3 = ["Isaac Newton", "Albert Einstein", "Grace Hopper", "Nikola Tesla", "Leonardo da Vinci", "Ada Lovelace"];
var maxGuests = 2;
console.log("Attention: Due to unforeseen circumstances, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
console.log("Apologies to the following guests, but we won't be able to invite you to dinner:");
while (guestList3.length > maxGuests) {
    var removedGuest = guestList3.pop();
    console.log("Sorry, ".concat(removedGuest, ", we won't be able to invite you to dinner."));
}
console.log("Invitations:");
for (var i = 0; i < guestList3.length; i++) {
    console.log("Dear ".concat(guestList3[i], ",\nYou are still invited to dinner at my place. It would be wonderful to have you join us.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
guestList.splice(0); // Remove remaining guests
console.log("Updated Guest List:");
console.log(guestList);
// question 18
var placesToVisit = ["Tokyo", "Paris", "Rio de Janeiro", "New York", "Sydney"];
// Print original order
console.log("Original Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Print alphabetical order without modifying the list
console.log("Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("--------------------------------------------");
// Show that the original order is maintained
console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Print reverse alphabetical order without modifying the list
console.log("Reverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
console.log("--------------------------------------------");
// Show that the original order is maintained
console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Reverse the order again to revert it back to the original order
placesToVisit.reverse();
console.log("Original Order (reverted):");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");
//question 19
var guestList4 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var absentGuestIndex2 = 1; // Assuming Marie Curie can't make it
var newGuest2 = "Nikola Tesla";
console.log("".concat(guestList4[absentGuestIndex2], " can't make it to the dinner."));
guestList4[absentGuestIndex2] = newGuest2;
console.log("Invitations:");
for (var i = 0; i < guestList4.length; i++) {
    console.log("Dear ".concat(guestList4[i], ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name"));
    console.log("--------------------------------------------");
}
console.log("Number of guests invited to dinner: ".concat(guestList4.length));
// question 20
var mountains = ["Mount Everest", "K2", "Kangchenjunga", "Matterhorn", "Mount Kilimanjaro"];
console.log("List of Mountains:");
for (var i = 0; i < mountains.length; i++) {
    console.log(mountains[i]);
}
// question 21
// Create an array of country objects
var countries = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651 },
    { name: "United Kingdom", capital: "London", population: 67886011 },
    { name: "France", capital: "Paris", population: 65273511 },
    { name: "Germany", capital: "Berlin", population: 83783942 },
    { name: "Japan", capital: "Tokyo", population: 126476461 }
];
// Iterate over the array and print information about each country
console.log("List of Countries:");
for (var i = 0; i < countries.length; i++) {
    console.log("Country: ".concat(countries[i].name));
    console.log("Capital: ".concat(countries[i].capital));
    console.log("Population: ".concat(countries[i].population));
    console.log("--------------------------------------------");
}
// question 22
var guestList5 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Intentional error: Trying to access an invalid index
console.log(guestList5[3]);
// Correcting the error by checking the length of the array
if (guestList5.length >= 4) {
    console.log(guestList5[3]);
}
else {
    console.log("Invalid index. No guest at index 3.");
}
// question 23
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');
// Test 4
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
// Test 5
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
// Test 6
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
// Test 7
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');
// Test 8
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 9
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');
// Test 10
console.log("Is car > 'toyota'? I predict False.");
console.log(car > 'toyota');
// question 24
var string1 = 'Hello';
var string2 = 'World';
var number1 = 10;
var number2 = 20;
var array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Equality and Inequality Tests with Strings:");
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);
console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);
console.log("Is string1 == 'Hello'? I predict True.");
console.log(string1 == 'Hello');
console.log("Is string2 != 'World'? I predict False.");
console.log(string2 != 'World');
console.log("--------------------------------------------");
// Tests using the lowercase function
console.log("Lowercase Function Tests:");
console.log("Is string1 lowercase? I predict False.");
console.log(string1.toLowerCase() == string1);
console.log("Is string2 lowercase? I predict True.");
console.log(string2.toLowerCase() == string2.toLowerCase());
console.log("--------------------------------------------");
// Numerical tests
console.log("Numerical Tests:");
console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2);
console.log("Is number1 != number2? I predict True.");
console.log(number1 != number2);
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 >= 10? I predict True.");
console.log(number1 >= 10);
console.log("Is number2 <= 20? I predict True.");
console.log(number2 <= 20);
console.log("--------------------------------------------");
// Tests using "and" and "or" operators
console.log("Logical AND and OR Operator Tests:");
console.log("Is number1 > 5 AND number2 < 15? I predict False.");
console.log(number1 > 5 && number2 < 15);
console.log("Is number1 > 5 OR number2 < 15? I predict True.");
console.log(number1 > 5 || number2 < 15);
console.log("--------------------------------------------");
// question 25
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
var alien_color1 = 'red';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// question 26
var alienColor = "green";
// Version 1: Runs the if block
if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version 2: Runs the else block
alienColor = "blue";
if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// question 27
var alienColor1 = "green";
if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("Congratulations! You just earned 10 points.");
}
else if (alienColor === "red") {
    console.log("Congratulations! You just earned 15 points.");
}
// question 28
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// question 29
var favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf("mango") !== -1) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.indexOf("orange") !== -1) {
    console.log("You really like oranges!");
}
if (favorite_fruits.indexOf("strawberry") !== -1) {
    console.log("You really like strawberries!");
}
// question 30
var usernames = ["admin", "Eric", "John", "Alice", "Sarah"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// question 31
var usernames1 = []; // Empty array of usernames
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// question 32
var current_users = ["John", "Emma", "Mike", "Sophia", "Alex"];
var new_users = ["John", "Katie", "Mike", "Olivia", "Daniel"];
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    var is_duplicate = false;
    for (var _c = 0, current_users_1 = current_users; _c < current_users_1.length; _c++) {
        var current_user = current_users_1[_c];
        if (current_user.toLowerCase() === new_user.toLowerCase()) {
            is_duplicate = true;
            break;
        }
    }
    if (is_duplicate) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
// question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
    var number = numbers_1[_d];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(number + ordinalEnding);
}
// question 34
var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
for (var _e = 0, favoritePizzas_1 = favoritePizzas; _e < favoritePizzas_1.length; _e++) {
    var pizza = favoritePizzas_1[_e];
    console.log("I like " + pizza + " pizza.");
}
console.log("I really love pizza!");
// question 35
var animals = ["Dog", "Cat", "Rabbit"];
for (var _f = 0, animals_1 = animals; _f < animals_1.length; _f++) {
    var animal = animals_1[_f];
    console.log("A " + animal + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");
// question 36
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it will be printed with the message: \"").concat(message, "\"."));
}
make_shirt("M", "Hello World");
// question 37
function make_shirt1(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it will be printed with the message: \"").concat(message, "\"."));
}
make_shirt1(); // Large shirt with default message
make_shirt1("medium"); // Medium shirt with default message
make_shirt("small", "Hello World"); // Custom size and message
// question 38
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Sydney"); // Defaults to unknown country
// question 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "United States"));
// question 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3"));
// question 41
function make_album1(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist 1", "Album 1"));
console.log(make_album("Artist 2", "Album 2", 10));
console.log(make_album("Artist 3", "Album 3"));
// question 42
function make_great1(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
function show_magicians1(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicianNames1 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great1(magicianNames1);
show_magicians(magicianNames1);
// question 43
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        console.log(magician);
    }
}
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var modifiedMagicians = make_great(__spreadArray([], magicianNames, true));
show_magicians(magicianNames);
show_magicians(modifiedMagicians);
// question 44
function make_sandwich(items) {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log(item);
    }
    console.log("Bread\n");
}
make_sandwich(["Ham", "Cheese"]);
make_sandwich(["Turkey", "Lettuce", "Tomato"]);
make_sandwich(["Peanut Butter", "Jelly", "Banana", "Honey"]);
// question 45
function create_car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model: model }, extras);
    return car;
}
var carInfo = create_car("Toyota", "Camry", { color: "blue" }, { year: 2022 }, { features: ["Bluetooth", "Backup Camera"] });
console.log(carInfo);
