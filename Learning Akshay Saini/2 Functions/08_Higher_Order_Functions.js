/*
A higher-order function is a function that does at least one of the following:

    i.) Takes another function as an argument
   ii.) Returns another function as its result
*/



// y --> Higher Order Function
// x --> Callback Function

function x() {
    console.log(`Inside X`);
}

function y(x) {
    x()
}

y(x)

// Another code
const radius = [3,1,2,4]

function area(r) {
    return Math.PI * r * r ;
}
function circumference(r) {
    return 2 * Math.PI * r ;
}
function diameter(r) {
    return 2 * r ;
}

function calculate(func) {
    const output = []

    for(let i=0; i<radius.length ; i++) {
        output.push(func(radius[i]))
    }

    return output
}

console.log(calculate(diameter))
console.log(calculate(circumference))
console.log(calculate(area))