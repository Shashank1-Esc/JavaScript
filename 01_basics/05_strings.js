const name = "shashank"
const repoCount = 50


// With normal quotes ("" or ''), you have to join strings using +:
console.log("Hello my name is " + name + " and my repo count is " + repoCount);

// With backticks, JavaScript lets you embed variables directly using ${}:
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('a hero whoes power still not awaken, but soon.')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

// how many methods we have of string 

// 1. length
//console.log(gameName.length);

// 2. anchor
//console.log(gameName.anchor("shashank"));

// 3. at(), charAt() -> take a number and give the word at index ; indexOf() -> take the character and return index number
let index = 5
let index1 = -7
//console.log(gameName.charAt(19));

// 4. big() -> display the string into <big>....</big> 
//console.log(gameName.big());

// 5. charCodeAt() -> return ascii value
//console.log(gameName.charCodeAt(5));

// 6. charPointAt(index number) -> return ascii value
//console.log(gameName.codePointAt(5));

//console.log(gameName.toString());


const newString = gameName
console.log(newString.slice(0, 5)); 


const url = "https://shashank.com/shashank%20gautam"
console.log(url.replace("%20",'-'));

const Name = "the-quick-brown-fox-jumps-over-the-lazy-dog"
console.log(Name.split('-'));
