/*
const arr = [1,2,3,4,5]
 
const odd = arr.filter((ele) => {
    return ele%2 == 1 ;
})

console.log(odd)
*/



const users = [
    {firstName: "Sourav", lastName: "Roy", age: 21},
    {firstName: "Shahrukh", lastName: "Khan", age: 60},
    {firstName: "Virat", lastName: "Kohli", age: 38},
    {firstName: "Amitabh", lastName: "Bachchan", age: 81},
]

/*
const youngPeople = users.filter((ele) => ele.age < 40)
console.log(youngPeople)
*/


const youngPeopleName = users.filter((ele) => ele.age < 40).map((obj) => obj.firstName)
console.log(youngPeopleName)