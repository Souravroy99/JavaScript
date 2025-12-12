const myArr = [1,2,3,4,5]
const myArr2 = new Array(10,20,30,40,50)

// Operations: push(), pop(), unshift(x), shift(), includes(x), indexOf(x), join(), slice(startIdx, endIdx), splice(startIdx, delete_count), concat, isArray(), from()


/*
myArr2.push(100)
console.log(myArr2);
*/

/*
myArr2.pop()
console.log(myArr2);
*/

/*
myArr2.unshift(-5); // push at front
myArr2.shift();     // pop-front-ele
console.log(myArr2);
*/

/*
console.log(myArr2.includes(101));
console.log(myArr2.indexOf(101));
*/


/*
console.log(myArr2)
const newArr = myArr2.join()
console.log(`${typeof newArr} ==> ${newArr}`);
*/



/************************ slice(startIdx, endIdx_not_includes) ************************/
/*
console.log("Before: ", myArr2);
const myn1 = myArr2.slice(3, 5)
console.log("After: ", myArr2);

console.log(myn1);
*/



/************************ splice(startIdx, delete_count) ************************/
/*
console.log("Before: ", myArr2);
const myn2 = myArr2.splice(1, 3)
console.log("After: ", myArr2);

console.log(myn2);
*/


/*********************************** CONCAT *************************************/
/*
const newArray = myArr.concat(myArr2)
console.log(myArr);
console.log(myArr2);
console.log(newArray);
*/


/******************************* SPREAD OPERATOR *******************************/
/* 
const arr1 = [1,2,3], arr2 = [11,22,33]
const newArrUsingSpreadOp = [...arr1, ...arr2]
console.log(arr1);
console.log(arr2);
console.log(newArrUsingSpreadOp);

console.log(Array.isArray(newArrUsingSpreadOp));
console.log(Array.from("SOURAV"));
*/