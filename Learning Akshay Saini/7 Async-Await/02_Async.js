/*
    Async: It is a keyword used before a function to make it an asynchronous function.
    ** An async function always returns a Promise, no matter what.
*/ 

const p = new Promise((resolve, reject) => {
    resolve("Promise resolve value.")
})

async function getData() {
    return p ;
}

const dataPromise = getData()


dataPromise
    .then((res) => {
        console.log(res);    
    })
    .catch((err) => {
        console.log(err);
    })