// JS Calculator || Project 1 

const dsply = document.querySelector('#dsply');

let currInput = '';
let prevInput = '';
let operator = '';

function updateDisplay(num) {
  dsply.value = currInput || 0;
}
function appendNum(num) {
  if (num === "." && currInput.includes(".")) return;
  currInput += num;
  updateDisplay();
}

function chooseOperator(op) {
  if (currInput === "") return;
  if (prevInput !== "") {
    result();
  }
  operator = op;
  prevInput = currInput;
  currInput = "";
}

function result() {
 let computed;
 let pre = parseFloat(prevInput);
 let cur = parseFloat(currInput);
 if (isNaN(pre) || isNaN(cur)) return;
 
 switch (operator) {
   case "+": 
     computed = pre + cur;
     break;
   case "-":
     computed = pre - cur;
     break;
   case "/":
     computed = pre / cur;
     break;
   case "*":
     computed = pre * cur;
     break;
   default: return;
 }
 currInput = computed.toString();
 operator ="";
 prevInput = "";
 updateDisplay();
}
function ac() {
  prevInput = "";
  currInput = "";
  operator = "";
  updateDisplay();
}
function del() {
  currInput = currInput.slice(0, -1);
  updateDisplay();
}
document.querySelector("#b1").onclick = ac;
document.querySelector("#b2").onclick = del;
document.querySelector("#b18").onclick = result;