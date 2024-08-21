// -:SYNTAX:-
// try {
//   // code...
// } catch (err) {
//   // error handling
// }

//   An errorless example: shows console.log (1) and (2):
// try {
//     console.log('Start of try runs');  // (1) <--
//     // ...no errors here
//     console.log('End of try runs');   // (2) <--
//   } catch (err) {
//     console.log('Catch is ignored, because there are no errors'); // (3)
//   }

//   An example with an error: shows (1) and (3):
// try {
//     console.log('Start of try runs');  // (1) <--
//     lalala; // error, variable is not defined!
//     console.log('End of try (never reached)');  // (2)
//   } catch (err) {
//     console.log(`Error has occurred!`); // (3) <--
//   }

// try...catch works synchronously
// try {
//     setTimeout(function() {
//       noSuchVariable; // script will die here
//     }, 1000);
//   } catch (err) {
//    console.log( "won't work" );
//   }

//   To catch an exception inside a scheduled function, try...catch must be inside that function
// setTimeout(function() {
//     try {
//       noSuchVariable; // try...catch handles the error!
//     } catch {
//       console.log( "error is caught here!" );
//     }
//   }, 1000);

// -:ERROR OBJECT:-
// try {
//     // ...
//   } catch (err) { // <-- the "error object", could use another word instead of err
//     // ...
//   }

// For all built-in errors, the error object has two main properties:
// try {
//     lalala; // error, variable is not defined!
//   } catch (err) {
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // lalala is not defined
//     console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
//     // Can also show an error as a whole
//     // The error is converted to string as "name: message"
//     console.log(err); // ReferenceError: lalala is not defined
//   }

//   -:OPTIONAL "CATCH" BINDING:-
// If we don’t need error details, catch may omit it:
// try {
//     // ...
//   } catch { // <-- without (err)
//     // ...
//   }

// -:USING “TRY…CATCH”:-
// let json = '{"name":"John", "age": 30}'; // data from the server
// let user = JSON.parse(json); // convert the text representation to JS object
// // now user is an object with properties from the string
// console.log( user.name ); // John
// console.log( user.age );  // 30

// Let’s use try...catch to handle the error:
// let json = "{ bad json }";
// try {
//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log( user.name ); // doesn't work
// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );
//   console.log( err.message );
// }

// Throwing our own errors
// let json = '{ "age": 18, "name": "sufiyan" }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   console.log( user.name ); // no name!
//   console.log(user.age);
// } catch (err) {
//   console.log( "doesn't execute" );
// }

// “Throw” operator
// syntax:
// throw <error object>

// Error Name and message declaration:
// let error = new Error("Things happen o_O");
// console.log(error.name); // Error
// console.log(error.message); // Things happen o_O

// Let’s see what kind of error JSON.parse generates:
// try {
//   JSON.parse("{ bad json o_O }");
// } catch (err) {
//   console.log(err.name); // SyntaxError
//   console.log(err.message); // Unexpected token b in JSON at position 2
// }

// And in our case, the absence of name is an error, as users must have a name.
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)
//   }
//   console.log( user.name );
// } catch (err) {
//   console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
// }

/* Rethrowing */
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- forgot to put "let" before user
//   console.log(user.age);
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (no JSON Error actually)
// }

// instanceof
// try {
//   let user=loki;
// } catch (err) {
//   if (err instanceof ReferenceError) {
//     console.log('ReferenceError'); // "ReferenceError" for accessing an undefined variable
//   }
// }

// SyntaxError in catch:
// let json = '{ "age": 30 }'; // incomplete data
// try {
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   blabla(); // unexpected error
//   console.log(user.name);
// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log("JSON Error: " + err.message);
//   } else {
//     throw err; // rethrow (*)
//   }
// }

// Another example of syntax error in try catch
// function readData() {
//   let json = '{ "age": 30 }';
//   try {
//     // ...
//     blabla(); // error!
//   } catch (err) {
//     // ...
//     if (!(err instanceof SyntaxError)) {
//       throw err; // rethrow (don't know how to deal with it)
//     }
//   }
// }
// try {
//   readData();
// } catch (err) {
//   console.log("External catch got: " + err); // caught it!
// }


/* try…catch…finally */

// SYNTAX:
// try {
//   ... try to execute the code ...
// } catch (err) {
//   ... handle errors ...
// } finally {
//   ... execute always ...
// }

// try {
//   alert( 'try' );
//   if (confirm('Make an error?')) BAD_CODE();
// } catch (err) {
//   alert( 'catch' );
// } finally {
//   alert( 'finally' );

// fibonacci series by function in try catch
// let num = +prompt("Enter a positive integer number?", 35)
// let diff, result;
// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must not be negative, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// let start = Date.now();
// try {
//   result = fib(num);
// } catch (err) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }
// alert(result || "error occurred");
// alert( `execution took ${diff}ms` );


// function func() {
//   try {
//     return 1;
//   } catch (err) {
//     /* ... */
//   } finally {
//     console.log( 'finally' );
//   }
// }
// console.log( func() ); // first works console.log from finally, and then this one


/* Global catch */
// window.onerror = function(message, url, line, col, error) {
//   alert(`${message}\n At ${line}:${col} of ${url}`);
// };
// function readData() {
//   badFunc(); // Whoops, something went wrong!
// }
// readData();

/* Task */
// function f() {
//   try {
//     console.log("start");
//     return "result";
//   } catch (error) {
//   }
//   finally {
//     console.log("cleanUp!");
//   }
// }
// f();

// // by using throw
// function f() {
//   try {
//     console.log("start");
//     // throw new Error("an error");
//   } catch (err) {
//     if ("can't handle the error") {
//       throw err;
//     }
//   }
//   finally{
//     console.log("clean Up!");
//   }
// }
// f();