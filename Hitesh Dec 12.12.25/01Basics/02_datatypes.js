// JavaScript has 8 official data types (as per ECMAScript spec).


// Primitive Data Types (7 total)
    // Number --> -(2^53 - 1)  to  (2^53 - 1)
    // BigInt
    // Boolean
    // String
    // null
    // undefined
    // Symbol --> Symbols are guaranteed to be unique


// Non-Primitive / Reference Type (1 type) --> object


let score = "10" 
let value = Number(score)
// console.log( value)

const id1 = Symbol(123)
const id2 = Symbol(123)
console.log(id1 == id2); // false


// Type of 'function' is "object function"


// Stack memory allocates for all primitive datatypes

/*
✔ Reference (non-primitive) data types

    The reference (pointer) is stored in the stack
    The actual value (object/array/function) is stored in the heap
*/



/*
// Range: 0 <= Math.random() <= 1

    To generate a random number between x and y (inclusive) ==>
*/

/*
let x = 10, y = 20 ;
let val = x + Math.floor(Math.random() * (y - x + 1)) ; 
// console.log(val);


const myDate = new Date() ;
console.log(myDate.toString());
console.log(myDate.toLocaleString());

const myDateNow = Date.now();
console.log(myDateNow);
*/


console.log(isNaN('hello'));
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN(null));