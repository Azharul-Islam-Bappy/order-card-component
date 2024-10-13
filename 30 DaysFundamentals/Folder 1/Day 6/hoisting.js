// Day 7: Hoisting In JavaScript 

// Hoisting Is JavaScripts Default Behavior To Move  All The Declaration To The Top 

console.log("X1: " +x); // output: undefined; this is only possible because when a variable is declared it is being hoisted but not initialized except with the "var" keyword it is also being assigned a value of undefined
var x;
x = 10; // now we've changed the value of x from undefined to a number 10;
console.log("x2: "+ x); // output: "x2: 10";


console.log(y); // send reference error: cannot access 'y' before initialization 
let  y;
console.log(y);