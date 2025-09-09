b(); // Hoisting does not occur, as this is a variable first in execution context

var b = function() {
    console.log(`Function Expression`);
}

// b(); 