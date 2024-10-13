let output_area = document.getElementById("outputArea");

let display_num = (num)=> {
  output_area.value += num;
}

let result = () => {
  output_area.value = eval(output_area.value);
}

function del() {
  output_area.value = output_area.value.slice(0,-1);
}

let ac = () => {
  output_area.value = '';
}