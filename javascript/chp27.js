// var random_number = Math.random();
// alert(random_number);

// let dice = Math.floor(Math.random() * 6 )+1;
// alert(dice);

// let max = Math.ceil(Math.random() *100 );
// let min = Math.ceil(Math.random() *10 );
// let diff = max - min;
// console.log("The difference between max and min is  " +diff);

let height = parseFloat(prompt("Enter your height in meters"));
let weight =  parseFloat(prompt("Enter your weight in KG"))
let BMI = weight/(height*0.3048)*(height*0.3048);
alert("Your BMI is " +BMI);
