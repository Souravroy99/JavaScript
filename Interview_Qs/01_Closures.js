const funcA = () => {
    const ele = 10 
    
    const funcB = () => {
        console.log(`Values: ${ele}`)
    }
    
    return funcB
}

// const funcC = funcA()
// funcC()


/*
Closure:
    A closure is a function together with its lexical environment—meaning it 
    remembers and can access variables from the scope in which it was created, 
    even after that outer function has finished executing.

In short: 👉 Function + its lexical scope = Closure
*/



// Advantages: 1.) Data hiding + Encapsulation, 2.) Cleaner and modular code    

function A() {
    var count = 10 

    function increment() {
        count++
        console.log(`Count value: ${count}`)
    }

    return increment ;
}

const magic1 = A()
magic1()
magic1()
magic1()

console.log();

const magic2 = A()
magic2()
magic2()
magic2()





/*

❌ Disadvantages of Closures: 

1.) Higher memory consumption: 
    👉 Variables captured by closures are not garbage collected until the closure is destroyed.

2.) Risk of memory leaks

3.) Performance overhead:
    👉 Accessing variables through scope chains can be slightly slower than local variables.

Performance overhead

*/