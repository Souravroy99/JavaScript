/*
✅ Definition of "Event Loop" in short

The Event Loop is the mechanism in JavaScript that allows asynchronous, non-blocking 
operations by coordinating between the call stack, Web APIs, and the callback queue — making 
single-threaded JS behave like it’s multitasking.


** So, Event Loop makes JS as asynchronous and multitasking
    
** All the callback functions comes through "Promises", enters into "microtask queue"

** Priority of "microtask queue" is higher than "callback queue"

*/



console.log("Start");

function cb() {
    console.log('Callback');
}

setTimeout(() => {
    cb();
}, 1000)


setTimeout(cb, 1000)

console.log("End");