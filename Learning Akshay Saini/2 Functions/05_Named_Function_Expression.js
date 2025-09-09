var a = function namedFunc() {
    console.log(`Named Function Expression`);
    console.log(namedFunc);
}

a()
// namedFunc() // Error due to out of scope


// Hoisting is not possible here, because initially a is a variable in the global execution context 