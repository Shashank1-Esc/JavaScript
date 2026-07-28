// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["ironman", "thor"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

// Array methods

myArr.push(6)
//console.log(myArr);

myArr.pop()

//myArr.unshift(9)  //unshift push all the values just to add a value in front
//console.log(myArr)

//myArr.shift() //remove the element front the front
//console.log(myArr)

const newArr = myArr.join() // <---_
                            //      |
//console.log(myArr);         //     |
//console.log(newArr);// type string |


// slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3) // splice takes all the element from original array within a range and store it in new array
console.log("C ",myArr);// expected: [0, 1, 2, 3, 4, 5] ; real output -> [0, 4, 5]
console.log(myn2);// op -> [1, 2, 3]