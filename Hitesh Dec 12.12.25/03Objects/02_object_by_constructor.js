const user = new Object();

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = {...obj1, ...obj2}
console.log(obj3);

// Access all the keys and values

const allKeys = Object.keys(obj3)
const allValues = Object.values(obj3)

console.log(allKeys);
console.log(allValues);