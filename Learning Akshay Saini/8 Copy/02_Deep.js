const original = {
    name: "Sourav Roy",
    roll: {
        myRoll: 21
    }
}

const deepCopy = JSON.parse(JSON.stringify(original))  // Deep Copy

deepCopy.roll.myRoll = 22

console.log(original);
console.log(deepCopy);