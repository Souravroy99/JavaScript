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



/* Hoisting --> Access something before declare */

    /* Hoisting is possible */
        console.log(a) ; // "undefined" due to hoisting --> Memory is declares in 'GLOBAL' execution context but value is not defined 
        var a = 10 ;

    /* Hoisting is not possible */
        // console.log(b); // Hoisting is 'NOT' possible for 'let' due to temporal dead-zone
        // let b = 5 ;

/**********************************************************************************************/



// BLOCK --> Block makes multiple statement in a group
{
    // Statement 1
    // Statement 2
    // ...
    // Statement 3
}

/**********************************************************************************************/



// Shadowing 

    /* Shadowing is possible -> var */
        var var_work = 10 
        
        {
            var var_work = 69 ; // Modifies the actual "var_work" variable as they are pointing at the same location 
            console.log('Var_Work: ', var_work);
        }
        console.log('Var_Work: ', var_work); // This is the example of Shadowing


    /* Shadowing is NOT possible --> let, const*/
        let let_work = 10 

        {
            let let_work = 69 ; // Does not Modify the actual "let_work" variable 
            console.log('Let_Work: ', let_work);
        }
        console.log('Let_Work: ', let_work);


/**********************************************************************************************/



// Lexical Scope 
{
    {
        {

        }
    }
}
