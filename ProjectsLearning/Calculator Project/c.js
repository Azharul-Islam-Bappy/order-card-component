// JS Calculator  ||  Project 1

let dsply = document.querySelector("#dsply");

document.querySelector('#b18').onclick = result;
document.querySelector('#b1').onclick = ac;
document.querySelector('#b2').onclick = del;


function appendNum(num) {
  dsply.value += num;
}
function result() {
  dsply.value = eval(dsply.value);
}
function ac() {
  dsply.value = '';
  dsply.placeholder = "0";
}
function del() {
  dsply.value = dsply.value.slice(0,-1);
}