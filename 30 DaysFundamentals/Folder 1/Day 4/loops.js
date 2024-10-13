// Day 4 : Loops in JavaScript 
// Loops are used to repeat a block of code

// for loops 
// loops are executed based on if the condition is true  //example :
let array = ["Facebook","Instagram","Google","What'sApp","Pinterest","ChatGPT"]
for (i=0; i<array.length; i++)  {
  console.log(i + ': ' + array[i]);
  //console.log(x);
}

// while loop  //example:
let x=0;
while (x < array.length) {
  console.log(array[x]);
  x++;
}
// do-while loop // example:
let n = 0;
do{
  console.log(x);
  x++;
} while(x < 10) // this loop will run for once even if the condition is false, check it out by changing the condition from 10 to 0 

// Advance JavaScript: for-of and for-in loop 