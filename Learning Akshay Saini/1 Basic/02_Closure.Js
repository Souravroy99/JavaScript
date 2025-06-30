// Lexical Scope 
{
    {
        {

        }
    }
}



// Closures ---> A Closure is the combination of a function bundled together with its Lexical environment

/* Example 1 */

function func1() {
    var a = 10 ;
    
    function func2() {
        console.log(`Value of A is: ${a}`);
    }

    return func2 ;
}

let func3 = func1() ;  

console.log(func3) ;
func3() ; // As 'func1' is finished, but still we getting the value of 'a' as 10. So according to closure's property we getting function along with its lexical scope.



/* Example 2 */

function func11() {
    let a = 10 ;
    
    function func22() {
        console.log(`Value of A is: ${a}`);
    }

    a = 9.9

    return func22 ;
}

let func33 = func11() ;  

console.log(func33) ;
func33() ;




/* Example 3 */
function x()
{
    let a = 10 ;
    
    function y()
    {
        let b = 20 ;

        function z()
        {
            console.log(`A: ${a}  and  B: ${b}`);
        }

        b = 25 ;
        return z ;
    }
    
    a = 15 ;
    return y ;
}

let w = x() ;
console.log(w);
w()() ;
