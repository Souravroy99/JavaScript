setTimeout(() => {
    console.log('Inside setTimeout');
}, 3000)

const x = function(y) {
    console.log("Inside X");
}

// Here y is callback function
x(function y() {
    console.log("Inside Y");
})