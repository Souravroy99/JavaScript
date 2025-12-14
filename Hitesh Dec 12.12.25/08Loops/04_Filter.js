const arr = [1,2,3,4,5]

const filteredArr = arr.filter((ele) => {
    if(ele%2 == 1) return true ;
})

console.log(filteredArr);