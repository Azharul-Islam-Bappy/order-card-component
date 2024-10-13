// JavaScript promises
// JavaScript promises

const jsonURL = "data.json";
const tableElem = document.querySelector('table.table-data');

function createElem(elem) {
  // elem should be a html element tag nam & inside double or single quote
  return document.createElement(elem);
}

function addElem(parentElem, childElem) {
  // Both parentElem & childElem should be a html element
  parentElem.appendChild(childElem);
}
function addClassName(elem,className) {
  elem.classList.add(className);
}

function fetchData(url) {
  const promise = new Promise((resolve, reject) => {
    // creating an instance of xhr 
    const data = new XMLHttpRequest();
    data.open('GET',`${url}`);
    data.send(null);
    data.onload = () => {
      if (data.readyState == 4 && data.status == 200) {
        resolve(data.responseText);
      }
      else {
        reject("Sorry, couldn't fetch data");
      }
    }
  });
  promise.then(data => {
    const jsonData = JSON.parse(data);
    // console.log(jsonData);
    jsonData.forEach(data => {
      // creating element
      let row = createElem('tr');
      let name = createElem('td');
      let age = createElem('td');
      let birthday = createElem('td');
      console.log(name);
      
      // adding content 
      name.textContent = data.name;
      age.textContent = data.age;
      birthday.textContent = data.birthday;
      
      addClassName(row,'tr-data')
      
      addElem(row,name);
      addElem(row,age);
      addElem(row, birthday);
      addElem(tableElem, row);
    });
  });
}
console.log(typeof fetchData);
console.log(fetchData.constructor);
fetchData(jsonURL);