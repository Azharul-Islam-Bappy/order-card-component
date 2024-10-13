// Day 5: Function In JavaScript 

//Function execute a task it is designed for when the function is being invoked (called

// 4 Types of function: 1.function declaration  2.function expression 3.arrow function 4.IIFEs (Immediately Invoked Function Expression)

//function declaration //example and syntax:

function functionName(parameters) {
  // code to be executed 
}

// 1. "function" keyword declare a function and then give a name to the function just like "functionName" here (you can give it any name as long as it follows syntax) so you can use it later by calling it 
// parameters: are variables listed as part of the function body 
// "//code to be executed:" in this block you write the that will be executed when the function is being invoked


// Function Expression:
const functin = function (parameters) {
  //code to be executed;
}  // this is the syntax of a function expression 


// Arrow Function:
const arwFunctn = () => {
  // Code to be executed;
} // syntax of Arrow Function


// IIFEs:
(function() {
  // code to be executed;
  console.log("IIFEs function executed");
}()) // this will be immediately invoked when the interpreter come across the function

