const arr = [2,3,5,7]

const sum = arr.reduce((acc, ele) => {
    return acc + ele ;
}, 3)

console.log(sum);