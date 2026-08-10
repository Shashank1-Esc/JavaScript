function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("K");
}

//sayMyName()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(2, 4)
//console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
    
}

//console.log(loginUserMessage("Shashank"));

function calculateCartPrice(val1, val2, ...num1){ // we call it rest operator and spread operator acc to its case
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Shashank",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)
handleobject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));