//One of  best things about objects is that we can store a function as one of its properties.
//  let sufiyan = {
//     name: "John",
//     sayHi: function() {
//       console.log("Hi buddy!");
//     }
//   };
//   sufiyan.sayHi(); 




// For instance, re exists a string method str.toUpperCase() that returns a capitalized str.
// let str = "Hello";
// console.log( str.toUpperCase() );





// A number has methods of its own, for instance, toFixed(n) rounds  number to  given precision:
// let n = 1.23456;
// console.log( n.toFixed(2) ); // 1.23




// // For Finding DataType or Object
// console.log( typeof 0 ); // "number"
// console.log( typeof new Number(0) ); // "object"!




// let zero = new Number(0);
// if (zero) { // zero is true, because it's an object
//   console.log( "zero is truthy!?!" );
// }


// let num = Number("123"); // convert a string to number
// console.log(num);

// console.log(null.test); // error


// let str = "Hello";
// str.test = 5;
// console.log(str.test);

// Underscore can't create any error in  code when we assign it with number data type to writing a number easily and understandably
// let billion = 1000000000;
// let billion2 = 1_000_000_000;
// console.log(billion, billion2);

// // "e" is a exponent
// let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
// console.log( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)



// Hex, Binary & Octal Numbers
// console.log( 0xff ); // 255
// console.log( 0xFF ); // 255 ( same, case doesn't matter)
// let a = 0b11111111; // binary form of 255
// let b = 0o377; // octal form of 255
// console.log( a == b ); // true,  same number 255 at both sides




// //  method num.toString(base) returns a string representation of num in  numeral system with  given base.
// let num = 255;
// console.log( num.toString(16) );  // ff
// console.log( num.toString(2) );   // 11111111
// console.log( 123456..toString(36) ); // 2n9c


