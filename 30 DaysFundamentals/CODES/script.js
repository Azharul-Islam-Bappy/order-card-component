// Calculator

document.addEventListener("DOMContentLoaded", () =>{
  let prevInput = "", currentInput = "", operator = "";
  
  let display = document.querySelector(".display");
  let buttons = document.querySelectorAll(".btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.hasAttribute("data-num")) {
        handleNumber(button.getAttribute("data-num"));
      } 
      else if(button.hasAttribute("data-op")) {
        handleOperator(button.getAttribute("data-op"));
      }
      else if(button.id === "all-clear") {
        clearDisplay();
      }
      else if(button.id === "delete"){
        deleteDigit();
      }
      else if(button.id === "op-equal") {
        calculateResult();
      }
      
    });
  });
  
  function handleNumber(number) {
    if (number === "." && currentInput.includes(".")) return;
    
    
    currentInput += number;
    let value = prevInput !== "" ? prevInput + operator + currentInput : currentInput;
    updateDisplay(value);
  }
  function handleOperator(op) {
    let value = "";
    if (operator.includes(['/','*','+','-'])) return;
    operator = op;
    prevInput = currentInput;
    currentInput = '';
    
    value += prevInput+operator;
    updateDisplay(value);
    
  }
  function clearDisplay() {
    prevInput = "";
    currentInput = "";
    operator = "";
    let value = "0";
    
    updateDisplay(value);
  }
  function calculateResult() {
    if(prevInput === "" || operator === ""  || currentInput === "") return;
    
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);
    let result;
    
    switch(operator) {
      case '+': 
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default: break;
      
    }
    updateDisplay(result);
    currentInput = result.toString();
    prevInput = "";
    operator = "";
  }
  
  function deleteDigit() {
     currentInput = currentInput.slice(0, -1);
     let value = prevInput + operator + currentInput;
     
     updateDisplay(value || "0");
  }
  function updateDisplay(value) {
    display.textContent = value;
  }
  
});
