// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null > 0) // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* the reason is that an equality check == and comparison > < >= <= work differently; 
comparison convert null to a number */


console.log(undefined == 0); // faslse
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// strict check " === " check datatype also

console.log("2" === 2);