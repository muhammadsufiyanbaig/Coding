//  -:DECLARATION:- types of Array 
let arr = new Array();
let arr1 = [];

//  -:INDEX NO:- of Array
let fruits = ["Apple", "Orange", "Plum"];
console.log( fruits[0] ); 
console.log( fruits[1] ); 
console.log( fruits[2] ); 

//  -:REPLACE ARRAY DATA BY INDEX NO:- 
fruits[2] = 'Pear';
console.log(fruits);

//  -:ADD NEW DATA IN ARRAY BY INDEX NO:-
fruits[3] = "Mango"
console.log(fruits);

//  -:LENGTH OF ARRAY:-
console.log(fruits.length);

//   -: FUNCTION DECLARATION IN ARRAY :-
let arr2 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];
console.log( arr2[1].name );
arr2[3]();


//    -: PRINT THE LAST ELEMENT OF ARRAY :-
console.log( fruits[fruits.length-1] );
// OR:
console.log( fruits.at(-1) );

//    -: USE THE POP METHOD OF ARRAY :-
//  DEFINITION:- Pop method of array remove the last element of array
console.log( fruits.pop() );
console.log( fruits ); 


//    -: USE THE PUSH METHOD OF ARRAY :-
//  DEFINITION:- Push method of array add the new element in last of array
fruits.push("Lemon");
console.log( fruits );


//    -: USE THE SHIFT METHOD OF ARRAY :-
//  DEFINITION:- Shift method of array remove the first element of array
console.log( fruits.shift() );
console.log( fruits );

//    -: USE THE UNSHIFT METHOD OF ARRAY :-
//  DEFINITION:- Unshift method of array add the new element in start of array
fruits.unshift('Pineapple');
console.log( fruits )

//  USE THE -:UNSHIFT:- METHOD & -:PUSH:- METHOD TOGETHER
let fruits1 = [];
fruits1.push("Orange", "Peach");
fruits1.unshift("Pineapple", "Lemon");
console.log(fruits1);

// USE THE -:INTERNALS:-
let fruits2 = ["Banana"]
let arr3 = fruits2; 
console.log( arr3 === fruits2 ); 
arr3.push("Pear"); 
console.log( fruits2 ); 

//    -: USE THE LOOPS IN ARRAY :-
let arr4 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr4.length; i++) {
  console.log( arr4[i] );
}
//    USE THE LOOPS WITH ANOTHER FORM -:FOR..OF:- IN ARRAY
let fruits3 = ["Apple", "Orange", "Plum"];
for (let fruit of fruits3) {
  console.log( fruit );
}
//    USE THE LOOPS -:FOR..IN:-IN ARRAY
let arr5 = ["Apple", "Orange", "Pear"];
for (let key in arr5) {
  console.log( arr5[key] );
}
// NOTE:- In the loop "for..of" and "for..in" work same but both have different syntax

// Assign the value after the given IndexNo
let fruits4 = [];
fruits4[123] = "Apple";
console.log( fruits4.length ); 



let arr6 = [1, 2, 3, 4, 5];
arr6.length = 2; // truncate to 2 elements
console.log( arr6 ); // [1, 2]
arr.length = 5; // return length back
console.log( arr6[5] ); // undefined: the values do not return


//  -:Multidimensional Array:-
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.table(matrix);

//  -:TO STRING:-   
let arr7 = [1, 2, 3];
console.log( arr7 ); 
console.log( String(arr7) === '1,2,3' );

console.log( [] + 1 ); // "1"
console.log( [1] + 1 ); // "11"
console.log( [1,2] + 1 ); // "1,21"

console.log( "" + 1 ); // "1"
console.log( "1" + 1 ); // "11"
console.log( "1,2" + 1 ); // "1,21"

// Don't Compare arrays with ==
console.log( [] == [] ); // false
console.log( [0] == [0] ); // false
console.log( 0 == [] ); // true
console.log('0' == [] ); // false