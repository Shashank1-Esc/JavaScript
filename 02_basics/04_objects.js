// const tinderUser = new Object() // singelton object
const tinderUser = {} // non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = "False"

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Shashank",
            lastname: "Gautam"
        }
    }
}

//console.log(regularUser.fullname.userfullname); // --> "?" checking fullname exist or not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) // {} -> target object ; obj1, obj2 -> source

const obj3 = {...obj1, ...obj2} // spread operator
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "shashank@microsoft.com"
    },
    {
        id: 2,
        email: "shashank@microsoft.com"
    },
    {
        id: 3,
        email: "shashank@microsoft.com"
    },
    {
        id: 4,
        email: "shashank@microsoft.com"
    }
]

// console.log(users[1].email); // accessing a element of an object in array
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor -> normal way to extract a value from object
const {courseInstructor: instructor} = course // -> extract value using only its key name
                                              // -> destructring
//console.log(courseInstructor); 
console.log(instructor);



