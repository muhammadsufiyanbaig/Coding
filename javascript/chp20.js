// let levels = parseInt(prompt("Enter the number of levels for the pyramid:"));

// if (!isNaN(levels)) {
//     let pyramid = "";
//     for (let i = 1; i <= levels; i++) {
//         for (let j = 1; j <= i; j++) {
//             pyramid += j + " ";
//         }
//         pyramid += "\n";
//     }
//     alert(`Number Pyramid:\n\n${pyramid}`);
// } else {
//     alert("Invalid input. Please enter a number.");
// }

let numTerms = prompt("Enter the number of Fibonacci terms to display:");
let fibonacci = "0, 1";

let a = 0;
let b = 1;

for (let i = 2; i < numTerms; i++) {
    let nextTerm = a + b;
    fibonacci += ", " + nextTerm;
    a = b;
    b = nextTerm;
}

alert(`Fibonacci Sequence:\n\n${fibonacci}`);
