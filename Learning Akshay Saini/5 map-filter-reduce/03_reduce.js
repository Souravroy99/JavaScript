/* 
const arr = [1,2,3,4,5]

const sum = arr.reduce((accumulator, ele) => accumulator+ele, 0)

const max = arr.reduce((accumulator, ele) => Math.max(accumulator, ele), 99)
const min = arr.reduce((accumulator, ele) => Math.min(accumulator, ele))

console.log(sum)
console.log(max)
console.log(min)
*/



const users = [
    {firstName: "Sourav", lastName: "Roy", age: 21},
    {firstName: "Shahrukh", lastName: "Khan", age: 60},
    {firstName: "Virat", lastName: "Kohli", age: 38},
    {firstName: "Amitabh", lastName: "Bachchan", age: 38},
]

const ageGroups = users.reduce((acc, ele) => {
    if(acc[ele.age]) acc[ele.age]++ ;
    else acc[ele.age] = 1 ; 

    return acc
}, {})
console.log(ageGroups)