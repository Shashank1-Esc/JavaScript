// singleton


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Shashank",
    "fullName": "Shashank Gautam",
    [mySym]: "mykey1", // using MySym as symbol type not string type
    age: 19,
    location: "Ghaziabd",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(typeof jsUser.age);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.email = "123@gmail.com"
//Object.freeze(jsUser) // no further change of value

jsUser.email = "shashank@microsoft.com"
//console.log(jsUser.email);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());