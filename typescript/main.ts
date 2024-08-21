// question 2
console.log("hello world");
console.log("Hello Eric, would you like to learn some TypeScript today?");

// question 3

let personName: string = "John Doe";

console.log(personName.toLowerCase()); 
console.log(personName.toUpperCase()); 
console.log(toTitleCase(personName));  

function toTitleCase(str: string): string {
  return str.toLowerCase().replace(/^(.)|\s+(.)/g, (char) => char.toUpperCase());
}

// question 4

let quote: string = 'A person who never made a mistake never tried anything new.';
let author: string = 'Albert Einstein';

console.log(`${author} once said, "${quote}"`);

// question 5

let famous_person: string = 'Albert Einstein';
let quote1: string = 'A person who never made a mistake never tried anything new.';
let message: string = `${famous_person} once said, "${quote1}"`;

console.log(message);

// question 6 

let nameWithWhitespace: string = "\t\n  John Doe   \n\t";

console.log(`Name with whitespace: "${nameWithWhitespace}"`);

let strippedName: string = nameWithWhitespace.trim();

console.log(`Stripped name: "${strippedName}"`);

//question 7

console.log(`Addition: ${5 + 3}`);
console.log(`Subtraction: ${10 - 2}`);
console.log(`Multiplication: ${2 * 4}`);
console.log(`Division: ${16 / 2}`);

//question 8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

//question 9

let favoriteNumber: number = 42;
let message1: string = `My favorite number is ${favoriteNumber}.`;

console.log(message1);

//question 10

let num1: number = 5;
let num2: number = 3;
let sum: number = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}.`);

let name2: string = "Alice";
console.log(`Hello, ${name2}! Welcome to the program.`);

// question 11

let names: string[] = ["Alice", "Bob", "Charlie", "David"];

for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}

// question 12

let names3: string[] = ["Alice", "Bob", "Charlie", "David"];

for (let i: number = 0; i < names3.length; i++) {
  console.log(`Hello, ${names3[i]}! Have a great day!`);
}

// question 13

let transportation: string[] = ["Honda motorcycle", "Tesla Model S", "Ford Mustang", "BMW X5"];

for (let i: number = 0; i < transportation.length; i++) {
  console.log(`I would like to own a ${transportation[i]}.`);
}

// question 14

let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

for (let i: number = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}
 
// qustion 15

let guestList1: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
let absentGuestIndex: number = 1;  
let newGuest: string = "Nikola Tesla";

console.log(`${guestList1[absentGuestIndex]} can't make it to the dinner.`);

guestList[absentGuestIndex] = newGuest;

console.log("Invitations:");
for (let i: number = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}

// question 16

let guestList2: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
let absentGuestIndex1: number = 1; 
let newGuest1: string = "Nikola Tesla";

console.log(`${guestList2[absentGuestIndex1]} can't make it to the dinner.`);

guestList2[absentGuestIndex1] = newGuest1;

console.log("Invitations:");
for (let i: number = 0; i < guestList2.length; i++) {
  console.log(`Dear ${guestList2[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}

console.log("Good news! I found a bigger dinner table.");

// Add new guests
guestList2.unshift("Isaac Newton");  
guestList2.splice(Math.floor(guestList2.length / 2), 0, "Grace Hopper");  
guestList2.push("Ada Lovelace");   

console.log("Updated Invitations:");
for (let i: number = 0; i < guestList2.length; i++) {
  console.log(`Dear ${guestList2[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}

// question 17

let guestList3: string[] = ["Isaac Newton", "Albert Einstein", "Grace Hopper", "Nikola Tesla", "Leonardo da Vinci", "Ada Lovelace"];
let maxGuests: number = 2;

console.log("Attention: Due to unforeseen circumstances, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

console.log("Apologies to the following guests, but we won't be able to invite you to dinner:");
while (guestList3.length > maxGuests) {
  let removedGuest: string = guestList3.pop()!;
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

console.log("Invitations:");
for (let i: number = 0; i < guestList3.length; i++) {
  console.log(`Dear ${guestList3[i]},\nYou are still invited to dinner at my place. It would be wonderful to have you join us.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}

guestList.splice(0);  

console.log("Updated Guest List:");
console.log(guestList);

// question 18

let placesToVisit: string[] = ["Tokyo", "Paris", "Rio de Janeiro", "New York", "Sydney"];

console.log("Original Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");

console.log("Alphabetical Order:");
console.log([...placesToVisit].sort());
console.log("--------------------------------------------");

console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("--------------------------------------------");

console.log("Reverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
console.log("--------------------------------------------");

console.log("Original Order (unchanged):");
console.log(placesToVisit);
console.log("--------------------------------------------");

placesToVisit.reverse();
console.log("Reversed Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");

placesToVisit.reverse();
console.log("Original Order (reverted):");
console.log(placesToVisit);
console.log("--------------------------------------------");

placesToVisit.sort();
console.log("Sorted in Alphabetical Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");

placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
console.log("--------------------------------------------");

//question 19

let guestList4: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
let absentGuestIndex2: number = 1; 
let newGuest2: string = "Nikola Tesla";

console.log(`${guestList4[absentGuestIndex2]} can't make it to the dinner.`);

guestList4[absentGuestIndex2] = newGuest2;

console.log("Invitations:");
for (let i: number = 0; i < guestList4.length; i++) {
  console.log(`Dear ${guestList4[i]},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can make it.\n\nBest regards,\nYour Name`);
  console.log("--------------------------------------------");
}

console.log(`Number of guests invited to dinner: ${guestList4.length}`);

// question 20

let mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Matterhorn", "Mount Kilimanjaro"];

console.log("List of Mountains:");
for (let i: number = 0; i < mountains.length; i++) {
  console.log(mountains[i]);
}

// question 21

let countries: { name: string, capital: string, population: number }[] = [
    { name: "United States", capital: "Washington, D.C.", population: 331002651 },
    { name: "United Kingdom", capital: "London", population: 67886011 },
    { name: "France", capital: "Paris", population: 65273511 },
    { name: "Germany", capital: "Berlin", population: 83783942 },
    { name: "Japan", capital: "Tokyo", population: 126476461 }
  ];
  
  console.log("List of Countries:");
  for (let i: number = 0; i < countries.length; i++) {
    console.log(`Country: ${countries[i].name}`);
    console.log(`Capital: ${countries[i].capital}`);
    console.log(`Population: ${countries[i].population}`);
    console.log("--------------------------------------------");
  }

  // question 22

  let guestList5: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

console.log(guestList5[3]);

if (guestList5.length >= 4) {
  console.log(guestList5[3]);
} else {
  console.log("Invalid index. No guest at index 3.");
}

// question 23

let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');

console.log("Is car > 'toyota'? I predict False.");
console.log(car > 'toyota');

// question 24

let string1: string = 'Hello';
let string2: string = 'World';
let number1: number = 10;
let number2: number = 20;
let array: number[] = [1, 2, 3, 4, 5];

console.log("Equality and Inequality Tests with Strings:");
console.log(`Is string1 == string2? I predict False.`);
console.log(string1 == string2);
console.log(`Is string1 != string2? I predict True.`);
console.log(string1 != string2);
console.log(`Is string1 == 'Hello'? I predict True.`);
console.log(string1 == 'Hello');
console.log(`Is string2 != 'World'? I predict False.`);
console.log(string2 != 'World');
console.log("--------------------------------------------");

console.log("Lowercase Function Tests:");
console.log(`Is string1 lowercase? I predict False.`);
console.log(string1.toLowerCase() == string1);
console.log(`Is string2 lowercase? I predict True.`);
console.log(string2.toLowerCase() == string2.toLowerCase());
console.log("--------------------------------------------");

console.log("Numerical Tests:");
console.log(`Is number1 == number2? I predict False.`);
console.log(number1 == number2);
console.log(`Is number1 != number2? I predict True.`);
console.log(number1 != number2);
console.log(`Is number1 > number2? I predict False.`);
console.log(number1 > number2);
console.log(`Is number1 < number2? I predict True.`);
console.log(number1 < number2);
console.log(`Is number1 >= 10? I predict True.`);
console.log(number1 >= 10);
console.log(`Is number2 <= 20? I predict True.`);
console.log(number2 <= 20);
console.log("--------------------------------------------");

console.log("Logical AND and OR Operator Tests:");
console.log(`Is number1 > 5 AND number2 < 15? I predict False.`);
console.log(number1 > 5 && number2 < 15);
console.log(`Is number1 > 5 OR number2 < 15? I predict True.`);
console.log(number1 > 5 || number2 < 15);
console.log("--------------------------------------------");

// question 25

let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}
let alien_color1: string = 'red';

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

// question 26

let alienColor: string = "green";

if (alienColor === "green") {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}

alienColor = "blue";

if (alienColor === "green") {
  console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
  console.log("Congratulations! You just earned 10 points.");
}

// question 27

let alienColor1: string = "green";

if (alienColor === "green") {
  console.log("Congratulations! You just earned 5 points.");
} else if (alienColor === "yellow") {
  console.log("Congratulations! You just earned 10 points.");
} else if (alienColor === "red") {
  console.log("Congratulations! You just earned 15 points.");
}

// question 28

let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// question 29

let favorite_fruits: string[] = ["banana", "apple", "mango"];

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

let usernames: string[] = ["admin", "Eric", "John", "Alice", "Sarah"];

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// question 31

let usernames1: string[] = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// question 32

let current_users: string[] = ["John", "Emma", "Mike", "Sophia", "Alex"];
let new_users: string[] = ["John", "Katie", "Mike", "Olivia", "Daniel"];

for (let new_user of new_users) {
  let is_duplicate = false;

  for (let current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      is_duplicate = true;
      break;
    }
  }

  if (is_duplicate) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}


// question 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let number of numbers) {
  let ordinalEnding: string;

  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(number + ordinalEnding);
}

// question 34

let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
  console.log("I like " + pizza + " pizza.");
}

console.log("I really love pizza!");

// question 35

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let animal of animals) {
  console.log("A " + animal + " would make a great pet.");
}

console.log("Any of these animals would make a great pet!");

// question 36

function make_shirt(size: string, message: string): void {
  console.log(`The shirt size is ${size} and it will be printed with the message: "${message}".`);
}

make_shirt("M", "Hello World");

// question 37

function make_shirt1(size: string = "large", message: string = "I love TypeScript"): void {
  console.log(`The shirt size is ${size} and it will be printed with the message: "${message}".`);
}

make_shirt1();
make_shirt1("medium");
make_shirt("small", "Hello World"); 

// question 38

function describe_city(city: string, country: string = "Unknown"): void {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
describe_city("Sydney"); // Defaults to unknown country

// question 39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("New York", "United States"));

// question 40

function make_album(artist: string, title: string, tracks?: number): any {
  const album = {
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

function make_album1(artist: string, title: string, tracks?: number): any {
  const album = {
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

function make_great1(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
}

function show_magicians1(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicianNames1: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

make_great1(magicianNames1);
show_magicians(magicianNames1);

// question 43

function make_great(magicians: string[]): string[] {
  let modifiedMagicians: string[] = [];

  for (let magician of magicians) {
    modifiedMagicians.push("the Great " + magician);
  }

  return modifiedMagicians;
}

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

let modifiedMagicians: string[] = make_great([...magicianNames]);
show_magicians(magicianNames);
show_magicians(modifiedMagicians);

// question 44

function make_sandwich(items: string[]): void {
  console.log("Sandwich Summary:");
  console.log("Bread");

  for (let item of items) {
    console.log(item);
  }

  console.log("Bread\n");
}

make_sandwich(["Ham", "Cheese"]);
make_sandwich(["Turkey", "Lettuce", "Tomato"]);
make_sandwich(["Peanut Butter", "Jelly", "Banana", "Honey"]);

// question 45

function create_car(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): any {
  let car: any = {
    manufacturer: manufacturer,
    model: model,
    ...extras
  };

  return car;
}

let carInfo = create_car("Toyota", "Camry", { color: "blue" }, { year: 2022 }, { features: ["Bluetooth", "Backup Camera"] });
console.log(carInfo);

// end