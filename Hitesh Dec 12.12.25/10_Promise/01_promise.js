/*
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Resolved')
})
*/


/*
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ "name": "Destroyer", "age": 21 })
    }, 2000);
})


promiseTwo.then((user) => {
    console.log(user);
})
*/


/*
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (error == false) {
            resolve("No error found")
        }
        else {
            reject("Full of error")
        }

    }, 3000);
})

promiseThree.then((info) => {
    console.log(info);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log(`Finally`);
})
*/


/*
*/
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = !true;

        if (error == false) {
            resolve("No error found")
        }
        else {
            reject("Full of error")
        }
    }, 2000);
})

async function consumePromiseFour() {
    try {
        const res = await promiseFour
        console.log(res);
    } 
    catch (error) {
        console.log(error);
    }
}

consumePromiseFour()
 


/*
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Formal definition: A Promise is a placeholder for a value that is not available now, but will be available in the future (or will fail with an error).


States of a Promise ==>

A promise can be in one of three states:

    1.) Pending – initial state, neither fulfilled nor rejected
    
    2.) Fulfilled – operation completed successfully

    3.) Rejected – operation failed
*/