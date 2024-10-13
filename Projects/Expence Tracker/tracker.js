//      START----START----START----

const date = document.querySelector("#date");
const amount = document.querySelector('#amt');
const button = document.querySelector('#add-data');
const tablebody = document.querySelector('tbody');


let  data = JSON.parse(localStorage.getItem("data")) || [];
function dsplay() {
  tablebody.innerHTML = '';
  data.forEach((pair) =>{
    
    const r = document.createElement('tr');
    const dCell = document.createElement('td');
    const aCell = document.createElement('td');
    
    dCell.textContent = pair.date;
    aCell.textContent = pair.amount;
    
    r.appendChild(dCell);
    r.appendChild(aCell);
    tablebody.appendChild(r);
  });
}


button.addEventListener('click', () => {
  if (date.value !== '' && amount.value !== '')
  {
    const pair = {
      date: date.value,
      amount: parseFloat(amount.value).toFixed(2)
    }
    data.push(pair);
    localStorage.setItem("data", JSON.stringify(data));
    dsplay();
    
    date.value = '';
    amount.value = '';
    amount.placeholder = 'Enter amount';
  } else {
    alert('please fill up the input field');
  } 
  
});
dsplay();