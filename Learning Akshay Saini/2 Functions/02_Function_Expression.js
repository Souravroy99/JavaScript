b(); // hoisting does not occur, as this is a variable first in execution context

const b = function(){
    console.log(`Function Expression`);
}

b();