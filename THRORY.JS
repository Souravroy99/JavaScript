/* 
1.)  Scope --> The context or environment in which variables, functions, and objects are accessible and usable.
*/

/* 
2.) Datatype 
    Premitive 7 --> Number, String, Boolean, BigInt, Undefined, Symbol, Null
    Non-Premitive(return type is object to all) --> Arrays, Objects, Functions
*/

/*
3.) JavaScript is considered a """dynamically typed language""" because the type of a variable is determined at runtime. This means you don’t need to explicitly declare the type of a variable when defining it.
*/


/* 
4.) Symbol's return type is different though it's input is same. Basically Symbol return unique value everytime
    ***Every time you call Symbol(), it creates a new, unique value, even if you pass the same description (input).

const id_1 = Symbol(1)
const id_2 = Symbol(1)

console.log(id_1 == id_2)  // False
console.log(typeof id_1)   
console.log(id_1, id_2) 
*/