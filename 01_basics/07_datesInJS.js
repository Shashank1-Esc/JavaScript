//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString('en-IN', {timezone: "Asia/Kolkata"}));
// console.log(myDate.toLocaleString('en-IN', {timezone: "Asia/Kolkata"}));
// console.log(myDate.toLocaleTimeString('en-IN', {timeZone: "Asia/Kolkata"}));
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());

//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("07-28-2026")
// onsole.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

/* 
convert into seconds 
*/
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})