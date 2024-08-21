// //  -:CREATION:-

// // FOR GETTING A NEW DATE
// let now = new Date();
// console.log( now );

// // 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// console.log( Jan01_1970 );

// // now add 24 hours, get 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log( Jan02_1970 );

// // Dates before 01.01.1970 have negative timestamps, e.g.:
// // 31 Dec 1969
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log( Dec31_1969 );

// // FOR GIVING DATE IN STRING
// let date = new Date("2017-01-26");
// console.log(date);

// // For instance:
// let a = new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
// let b = new Date(2011, 0, 1);
// console.log(a);
// console.log(b);

// // The maximal precision is 1 ms (1/1000 sec):
// let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);
// console.log( date1 ); // 1.01.2011, 02:03:04.567

// // -:ACCESS DATA COMPONENT:-

// If your local time zone is shifted relative to UTC, then the code below shows different hours:

// current date
// let date2 = new Date();
// the hour in your current time zone
// console.log( date2.getHours() );
// // the hour in UTC+0 time zone (London time without daylight savings)
// console.log( date2.getUTCHours() );

// // if you are in timezone UTC-1, outputs 60
// // if you are in timezone UTC+3, outputs -180
// console.log( new Date().getTimezoneOffset() );

// // -:SETTING DATE COMPONENTS:-

// setHours
// let today = new Date();
// today.setHours(0);
// console.log(today); // still today, but the hour is changed to 0
// today.setHours(0, 0, 0, 0);
// console.log(today); // still today, now 00:00:00 sharp.

// // -:AUTOCORRECTION:-

// let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// console.log(date); // ...is 1st Feb 2013!

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// console.log( date ); // 1 Mar 2016

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);
// console.log( date ); // shows the correct date

// let date = new Date(2016, 0, 2); // 2 Jan 2016
// date.setDate(1); // set day 1 of month
// console.log( date );
// date.setDate(0); // min day is 1, so the last day of the previous month is assumed
// console.log( date ); // 31 Dec 2015

// // -:DATE TO NUMBER, DATE DIFF:-

// // When a Date object is converted to number, it becomes the timestamp same as date.getTime():
// let date = new Date();
// console.log(+date); // the number of milliseconds, same as date.getTime()

// // Date.now()

// That can be used for time measurements:
// let start = new Date(); // start measuring time
// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }
// let end = new Date(); // end measuring time
// console.log( `The loop took ${end - start} ms` );

// // Benchmarking

// we have date1 and date2, which function faster returns their difference in ms?
// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
//   function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
//   function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
//   console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
//   console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

// function diffSubtract(date1, date2) {
//     return date2 - date1;
//   }
// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
//   }
// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();
    // let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
//   }
//   let time1 = 0;
//   let time2 = 0;
//   // run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
//   for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime);
//   }
//   console.log( 'Total time for diffSubtract: ' + time1 );
//   console.log( 'Total time for diffGetTime: ' + time2 );


// //  -:Date.parse from a string:-
// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
// console.log(ms);

// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
// console.log(date);



// function sayHiBye(firstName, lastName) {
//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
// console.log( "Hello, " + getFullName() );
//     console.log( "Bye, " + getFullName() );  
//   }
// sayHiBye('muhammad sufiyan', "baig");



// function makeCounter() {
//     let count = 0;
//     return function() {
//       return count++;
//     };
//   }
//   let counter = makeCounter();
//   console.log( counter() ); // 0
//   console.log( counter() ); // 1
//   console.log( counter() ); // 2


// function f() {
//     let value = 123;
//     return function() {
//       console.log(value);
//     }
//   }
//   let g = f();
//   console.log(g);


// function f() {
//     let value = Math.random();
//     return function() { console.log(value); };
//   }
//   // 3 functions in array, every one of them links to Lexical Environment
//   // from the corresponding f() run
//   let arr = [f(), f(), f()];
//   console.log(arr);


// function f() {
//     let value = 123;
//     return function() {
//       console.log(value);
//     }
//   }
//   let g = f(); // while g function exists, the value stays in memory
//   g = null; // ...and now the memory is cleaned up
//   console.log(g);


// function f() {
//     let value = Math.random();
//     function g() {
//       debugger; // in console: type console.log(value); No such variable!
//     }
//     return g;
//   }
//   let g = f();
//   console.log(g,g());


//   let value = "Surprise!";
// function f() {
//   let value = "the closest value";
//   function g() {
//     debugger; // in console: type console.log(value); Surprise!
//   }
//   return g;
// }
// let g = f();
// console.log(g, value);


