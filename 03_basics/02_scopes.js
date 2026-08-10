// not using var in local scope because there is no scope for var even though it is local
let a = 300

if (true) {
    const b = 20
    console.log(a);
}

//console.log(a);
//console.log(b);
console.log(a);

addone(5) //we can use call function before function
function addone(num){
    return num + 1
}


addTwo(5) // but if the function is store in a var and if call before var then it will raise error
const addTwo = function(num){
    return num + 2
}

