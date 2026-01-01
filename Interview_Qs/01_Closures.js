const funcA = () => {
    const ele = 10 

    const funcB = () => {
        console.log(`Values: ${ele}`)
    }

    return funcB
}

const funcC = funcA()

funcC()


/*
Closure:
    A closure is a function together with its lexical environment—meaning it 
    remembers and can access variables from the scope in which it was created, 
    even after that outer function has finished executing.

In short: 👉 Function + its lexical scope = Closure
*/