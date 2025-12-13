function one() {
    const username = "sourav"

    function two() 
    {
        console.log(username)
    }

    return two
}

let three = one()

three()


// Closure: Function with its lexical scope