/*
const user = {
    name: "Sourav",
    "full name": "Sourav Roy",
    age: 21
}

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
*/



/************************* How to use Symbol as a key *************************/
// We use symbol for uniqueness and privacy

const mySmbl = Symbol("using as a key")

const user = {
    name: "Sourav",
    [mySmbl]: "Symbol Value",
    age: 21
}


console.log(user[mySmbl]);
console.log(user); // See the differance in terminal

user.surname = 'Roy'

console.log(user);