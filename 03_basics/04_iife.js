(function chai(){
    console.log(`DB CONNECTED`);
})(); // => ";" stops the execution of function because compiler doesn't know where to stop it 

/*  "IIFE stands for Immediately Invoked Function Expression. It is a function 
expression that is executed immediately after it is created. It is commonly used 
to create an isolated scope so that variables inside it don't become accessible 
in the surrounding or global scope. This was especially useful before modern 
JavaScript had let, const, and modules." */

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shashank');


 