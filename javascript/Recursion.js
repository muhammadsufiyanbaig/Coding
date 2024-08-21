// // -:Recursion and stack:-

// pow(2, 2) = 4
// pow(2, 3) = 8
// pow(2, 4) = 16

// function pow(x, n) {
//     let result = 1;
  
//     // multiply result by x n times in the loop
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
//   console.log( pow(11, 3) );

//   Recursive thinking: simplify the task and call self:

// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
// console.log( pow(2, 3) );


// Recursive traversals

// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 1600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };

//   console.log(company);


// let company = { // the same object, compressed for brevity
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };
//   // The function to do the job
//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // case (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//     } else { // case (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//       }
//       return sum;
//     }
//   }
//   console.log(sumSalaries(company)); 

// Recursive structures
// Linked list

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   console.log(list);

//   An alternative code for creation:

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;
//   console.log(list);

// Task 1:-
// function sumTo(n) { /*... your code ... */ }
// console.log( sumTo(100) ); // 5050

// The solution using a loop;
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log( sumTo(10) );
// // The solution using recursion:
// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }
// console.log( sumTo(0));
// //  // The solution using the formula: sumTo(n) = n*(n+1)/2:
// function sumTo(n) {
//   return n * (n+1)/2;
// }
// console.log( sumTo(0) );


// Task2:
// Calculate factorial
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// By using formula of factorial:
// function factorial(n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log( factorial(0) );


// Recursion Method
// function factorial(n) {
//   return n ? n * factorial(n -1):1;
// }
// console.log( factorial(0) );


// Task3:
// Fibonacci numbers


// // By recursive method:
// function Fibonacci(n) {
//   return n<= 1 ? n : Fibonacci(n -1) + Fibonacci(n-2);
// }
// console.log( Fibonacci(43) );


// Task4:
// Output a single-linked list
// Loop-based solution

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function PrintList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   } 
// }
// PrintList(list);


// Recursive solution

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function PrintList(list) {
//   console.log(list.value);

//   if (list.next) {
//     PrintList(list.next);
//   }
// }
// PrintList(list);

// Task5:
// Output a single-linked list in the reverse order
// Using a recursion
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// }
// printReverseList(list);


// Using a loop

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

printReverseList(list);