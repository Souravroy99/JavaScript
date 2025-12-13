const user = {
    name: "Sourav",
    age: 21,
    price: "$100",

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
    }


}

// user.welcomeMessage()
user.name = "Deep"
// user.welcomeMessage()


/**********************************************************************/

// Arrow functions do not have their own "this"

// Arrow function inherit "this" from their lexical (surrounding) scope

// We can use "this" inside of arrow function, but we cannot bind, call, or apply this to an arrow function


const chai = () => {
    console.log(this);
}

chai()






/*********************************** Arrow Vs Normal Function *******************************/

// this: Normal functions have their own dynamic this, while arrow functions lexically inherit this from the surrounding scope.

// arguments: Normal functions have an arguments object, while arrow functions do not.

// Hoisting: Function declarations are hoisted, while arrow functions (as expressions) are not usable before declaration.

// Constructor: Normal functions can be used with new, whereas arrow functions cannot.

// Syntax: Arrow functions provide shorter syntax and support implicit return, while normal functions require explicit return.


function sum() {
  console.log(arguments);
}
sum()