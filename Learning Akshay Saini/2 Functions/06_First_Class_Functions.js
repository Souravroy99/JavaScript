/*
First-class functions are a fundamental concept in programming where functions are treated like any other variable. This means you can:

    i.) Assign a function to a variable
   ii.) Pass a function as an argument to another function
  iii.) Return a function from another function
*/


// Example 1 --> Passing func as a parameter
/*
const a = function xyz(parameter) {
    parameter()
}

const b = function() {
    console.log('Passing Function');
}
a(b)
*/


// Example 2 --> Returning func
/*
const c = function(val) {
    return function() {
        console.log(val * val);
    }
}

c(10)()
console.log(c(10)());
*/