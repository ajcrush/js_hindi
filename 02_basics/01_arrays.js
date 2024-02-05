// Arrays

const myArr = [0,1,2,3,4,5]
const myHero = ["shaktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// Add or delete element from array from starting index
console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()
// Join bind the element also convert it into string
// console.log(myArr);
// console.log(newArr);

// slice , splice

// console.log("A ",myArr);
const myn1 = myArr.slice(1 , 3)

console.log(myn1);
console.log("B : ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("B : ",myArr);


/* Differnece b/w slice and splice is slice do not modify array and 
starting point is inclusive and end point is exclusive but in case of 
splice starting point and ending point both inclusive and also array 
the portion which print the splice element will be removed from original 
array */
