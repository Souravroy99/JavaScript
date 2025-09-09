/*
const arr = [1,2,3,4,5]
 
// const double = arr.map(x => x*2)
const double = arr.map((ele) => {
    return ele * 2 ;
})


console.log(double)
*/


const users = [
    {firstName: "Sourav", lastName: "Roy", age: 21},
    {firstName: "Shahrukh", lastName: "Khan", age: 60},
    {firstName: "Virat", lastName: "Kohli", age: 38},
    {firstName: "Amitabh", lastName: "Bachchan", age: 80},
]

const names = users.map((x) => x.firstName + " " + x.lastName)
console.log(names)