/* 
function x() {
    var i = 1 ;
    setTimeout(() => {
        console.log(i);
    }, 2000)
    
    console.log(`This is the example that JS is Asynchronous`);
}

x();

*/


// Q1 ---> Print 1 to 5 at 1 second inetrval

    // Answer 1 --> Using let  ✅ Correct
        function A() {
            for(let i=1 ; i<=5 ; i++)
            {
                setTimeout(() => {
                    console.log(i);
                }, i*1000)
            }

            console.log(`Using LET`);
        }


    // Answer 2 --> Using var  ❌ Wrong
        function B() {
            for(var i=1 ; i<=5 ; i++)
            {
                setTimeout(() => {
                    console.log(i);
                }, i*1000)
            }
            
            console.log(`Using VAR`);
        }

/*
    Explanation:
        
        ✅ let is block-scoped: In function A(), you're using let i, which creates a new binding of 'i' for every iteration of the loop.

        ❌ var is function-scoped: In function B(), var 'i' is hoisted and shared across all iterations. So by the time the timeout callbacks run (after 1s, 2s, ...), the loop is already finished and i has become 6.
*/

// Alternative Solutions: Use normal Function OR, IIFE (Immediately Invoked Function Expression):

    function C() {
        for(var i=1 ; i<=5 ; i++)
        {
            // function D(j) {
            //     setTimeout(() => {
            //         console.log(j);
            //     }, j*1000);
            // }

            // D(i) ;
                                      
            // OR --> IIFE
            /*
            */
                ((j) => {
                    setTimeout(() => {
                        console.log(j);
                    }, j * 1000) ;
                })(i) ;
        }
    }


//         // A() ;
//         B() ;
//         // C() ;
