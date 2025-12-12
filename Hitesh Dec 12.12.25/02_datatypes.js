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