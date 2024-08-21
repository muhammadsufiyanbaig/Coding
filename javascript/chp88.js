//  function checkPassword() {
//      try {
//      var pass = document.getElementById("f1").value;
//      if (pass.length < 8) {
//      throw "Please enter at least 8 characters.";
//      }
//      if (pass.indexOf(" ") !== -1) {
//      throw "No spaces in the password, please.";
//      }
//      var numberSomewhere = false;
//      for (var i = 0; i < pass.length; i++) {
//      if ((i<2) === false) {
//      numberSomewhere = true;
//      break;
//      }
//      }
//      if (numberSomewhere === false) {
//      throw "Include at least 1 number.";
//      }
//      }
//      catch(err) {
//      alert(err);
//      }
//      }

// let j = '{"name":"John", "age": 30}'; 

// let user = JSON.parse(j);
// // now user is an object with properties from the string
// alert( user.name ); 
// alert( user.age );  

// try {
//     let json = '{"name":"json"}';
//     let user = JSON.parse(json); 
//   alert( user.name ); 
// } 
// catch (err) {
//   alert( "Our apologies, the data has errors, we'll try to request it one more time." );
//   alert( err.name );
//   alert( err.message );
// }

// let json = '{ "age": 30 }'; // incomplete data

// try {

//   let user = JSON.parse(json); // <-- no errors
//   alert( user.age ); // no name!

// } catch (err) {
//   alert( "doesn't execute" );
// }

// let error = new SyntaxError("Things happen o_O");
// alert(error.name); 
// alert(error.message);

// try {
//    let a = '{ "bad":"json o_O"}'
//   let b= JSON.parse(a);
//     alert(b.bad);
// } catch (err) {
//     alert(err.name); 
//     alert(err.message);
//   }


// let json = '{ "age": 30}'; // incomplete data
// try {
//   let user = JSON.parse(json); // <-- no errors
//   if (!user.name) {
//     throw new SyntaxError("Incomplete data: no name"); // (*)//   }
//   alert( user.name );
// } catch (err) {
//   alert( "JSON Error: " + err.message); // JSON Error: Incomplete data: no name
// }


"use strict";
// let json = '{ "age": 30 }';
// try {
//  user = JSON.parse(json);
//     alert(user.age)
// } catch (err) {
//   alert("JSON Error: " + err); 
//  }
// try {
//     user = { /*...*/ };
//   } catch (err) {
//     if (err instanceof ReferenceError) {
//       alert('ReferenceError');
//     }
//   }

// let json = '{ "age": 30 }';
// try {
//   let user = JSON.parse(json);
//   if (!user.age) {
//     throw new SyntaxError("Incomplete data: no name");
//   }
//   alert( user.age);
// } catch (err) {
//     if (err instanceof SyntaxError) {
//     alert( "JSON Error: " + err.message );
//   } else {
//     throw err;
//   }
// }


// function readData() {
//     let json = '{ "age": 30 }';
//     try {
//         let user = JSON.parse(json);
//         alert(user.age);
//     } catch (err) {
//         if (!(err instanceof SyntaxError)) {
//         throw err;
//       }
//     }
//   }
//   try {
//     readData();
//   } catch (err) {
//     alert( "External catch got: " + err );
//   }
// try {
//   alert( 'Discount is available in Glasses' );
//   if (confirm('the price of glasses  is Rs.150 also the 50% off! Do you wanna take discount?')) BAD_CODE();
// } catch (err) {
//   alert( 'The discounted price is Rs.75' );
// } finally {
//   alert( 'Price is Rs.150' );
// }

// function func() {
//   try {
//     return 1;
//   } catch (err) {
//     /* ... */
//   } finally {
//     alert( 'finally' );
//   }
// }
// alert( func() );

// window.onerror = function(message, url, line, col, error) {
//   alert(message);
//   alert(url);
//   alert(line);
//   alert(col);
//   alert(error)
//   alert(`${message}\n At ${line}:${col} of ${url} , ${error}`);
// };
// function readData() {
//   badFunc(); 
// }
// readData();