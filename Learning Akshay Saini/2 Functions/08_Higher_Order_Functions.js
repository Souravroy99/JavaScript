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

// y(x)


const radius = [1,2,3,4]

const calculateArea = (r) => {
    console.log(`${r} --> ${Math.PI * r * r}`) ;
}

for(let i=0; i<radius.length ; i++) calculateArea(radius[i]) ;