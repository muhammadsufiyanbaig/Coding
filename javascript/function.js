// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//           return console.log('Did parents allow you?');
//     }
//   }
//   console.log(checkAge(18));

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   function min(a, b) {
//     return a < b ? a : b;
//   }

// console.log(min(2, 5) == 2);
// console.log(min(3, -1) == -1);
// console.log(min(1, 1) == 1);


function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }