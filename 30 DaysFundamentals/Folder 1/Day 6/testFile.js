let global = "This variable is global"; // this variable has global scope because it is not declared inside function or block scope that means it can be accessed anywhere in the script 

function firstFunc() {
  let a = true;
  
  function secondFunc() {
    let b=false; // this variable can not be accessed outside this function, so that is why it has function scope
    {
      var varA = "A String Number 2"; // when a variable is declared with "var" keyword inside a "{}" it does not have block scope but rather function level scope
      
      let letA = 15; // when a variable is declared with "let" keyword inside a "{}" it has block scope
    }
    var c = "A String";
    console.log(varA);
    console.log(letA);
  }
  secondFunc();
  
  console.log(b); // the variable  "b" is not accessible outside the function that's why it has block level scope
  
  console.log(c);// same as the "b" variable
}
firstFunc();

