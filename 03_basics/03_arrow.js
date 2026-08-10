const user = {
    username: "Shashank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" //context change ho gya
// user.welcomeMessage()

//console.log(this) //when we run this on console it shows window object-> global object

// function chai(){
//     let username = "Shashank"
//     console.log(this.username); // undefined
// }

// chai()

// const chai = function(){
//     let username = "Shashank"
//     console.log(this.username); // underfined
// }

// chai()

// const chai = () => {
//     let username = "Shashank"
//     console.log(this); // undefinedwith .username // {} with this only
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1, num2) => (num1 + num2)  

const addTwo = (num1, num2) => ({username: "Shashank"}) 

console.log(addTwo(3, 4));