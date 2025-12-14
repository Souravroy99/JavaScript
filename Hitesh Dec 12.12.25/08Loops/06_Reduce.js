const arr = [1,2,3,4,5]

const res = arr.reduce((acc, currVal) => {
    console.log(acc, currVal);
    return acc + currVal ;
}, 0)

console.log(res);