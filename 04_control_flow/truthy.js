// const usename = "sdfae" ------> True
// const username = ""  ---------> False
// const username = []  ---------> True

/*
    Falsy values
*/
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

/*
    Truthy values
*/
// "0", 'false', " ", [], {}, function(){}


// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log(`Empty object`);
// }



// if( false === 0){
//     console.log(`true`);
// }else{
//     console.log(`false`);
// }

/*
   Nullish Coalescing Operator (??): null undefined

   The nullish coalescing operator (??) is used when you want to provide a default value 
   only when the left side is null or undefined.
*/

let username = null;
let result = username ?? "Guest";
console.log(result);

let val1;
val1 = 5 ?? 10 // call from database 
console.log(val1);


/*
    Terniary Operator
    
    condition ? true : false
*/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);