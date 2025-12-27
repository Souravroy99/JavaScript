const original = {
    name: "Sourav Roy",
    roll: {
        myRoll: 21
    }
}

const shallowCopy = { ...original }  // Shallow Copy

shallowCopy.roll.myRoll = 22

console.log(original);
console.log(shallowCopy);