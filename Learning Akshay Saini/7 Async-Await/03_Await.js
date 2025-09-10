/*
    ** Without 'async', we are unable to use 'await'
    ** Only inside of 'async function' we are allowed to use 'await' to handle 'Promises'
*/

/*
const p = new Promise((resolve, reject) => {
    resolve("PROMISE RESOLVE")
})

async function getData() {

    // **** Using await ****
    const res = await p  
    console.log("Using Await: ", res)

    // **** Using .then(), .catch() ****
    p.then((msg) => {
        console.log("Using .then: ", msg)
    })
}

getData()
*/


/* Difference between "async-await" and ".then" */

const sp = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolve")        
    }, 5000);
})


async function handlePromise1() {

    console.log("The things top of await will print");

    const val = await sp ;    

    console.log(val);
    console.log("I am using await bro");
}

async function handlePromise2() {

    console.log("I am using .then() bro");
    sp.then((msg) => console.log(msg)) 
    
}

handlePromise1()