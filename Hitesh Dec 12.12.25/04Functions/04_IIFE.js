(()=>{
    console.log("Immediately Invoked Function Expression");
})();   // We must need to provide "semi-colon" after "IIFE", for explicitly terminate "IIFE" 


/************************ Key characteristics ************************/

// 1.) Runs immediately
/*
    (function () {
        console.log("Hello");
    })();
*/


// 2.) Creates its own scope: Variables inside an IIFE do not pollute the global scope
/*
    (function () {
        let x = 10;
    })();

    console.log(x); // ❌ ReferenceError
*/


// 3.) Can return values
/*
    const result = (function () {
        return 42;
    })();

    console.log(result); // 42
*/


// 4.) Can take parameters
/*
    (function (name) {
        console.log("Hello", name);
    })("Sourav");
*/


// 5.) IIFE prevents global namespace pollution by creating a private scope