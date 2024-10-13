// Building the next version of of Quiz Project . This is Quiz 2.0

// Creating Quiz Database
let quizDatabase = [
  {
    que: 'What does HTML stand for?',
    opt: ['Hyper Text Markup Language', 'Hyper Text Markup Level', 'Hyper Text Markup Lab'],
    ans: 'Hyper Text Markup Language'
  },
  {
    que: 'What does CSS stand for?',
    opt: ['Cascading Style Server', 'Cascading Server Sheet', 'Cascading Style Sheet'],
    ans: 'Cascading Style Sheet'
  },
  {
    que: 'What does HTML used for in Web Development?',
    opt: ['For Styling Purpose', 'For Structuring Web page', 'For Logic'],
    ans: 'For Structuring Web page'
  }
];

// Getting the Element from document to Populatae the quiz form with Question from quizDatabase.
let queHolder = document.querySelector('#queHolder');
let input1 = document.querySelector('#one');
let input2 = document.querySelector('#two');
let input3 = document.querySelector('#three');

let opt1 = document.querySelector('#opt1');
let opt2 = document.querySelector('#opt2');
let opt3 = document.querySelector('#opt3');

let opt1Holder = document.querySelector('#opt1-holder');
let opt2Holder = document.querySelector('#opt2-holder');
let opt3Holder = document.querySelector('#opt3-holder');

let submitBtn = document.querySelector('#submit');

let index = 0;

function quiz() {
  if (index < quizDatabase.length) {
    queHolder.innerText = quizDatabase[index].que;
    
    opt1.innerText = quizDatabase[index].opt[1];
    opt2.innerText = quizDatabase[index].opt[0];
    opt3.innerText = quizDatabase[index].opt[2];
    
    input1.value = opt1.innerText;
    input2.value = opt2.innerText;
    input3.value = opt3.innerText;
    
    input1.checked= false;
    input2.checked= false;
    input3.checked= false;
  } else {
    queHolder.innerText = 'Quiz Completed!';
    queHolder.className = 'Completed'
    
    input1.style.display = 'none';
    input2.style.display = 'none';
    input3.style.display = 'none';
    
    opt1.innerText = '';
    opt2.innerText = '';
    opt3.innerText = '';
    
    opt1Holder.style.display = 'none';
    opt2Holder.style.display = 'none';
    opt3Holder.style.display = 'none';
    submitBtn.style.display = 'none';
  }
}

function submit() {
  let selectedAns = document.querySelector('input[name="option"]:checked').value;
  let actualAns = quizDatabase[index].ans;
  
  if (selectedAns === actualAns) {
    alert('Correct!');
    
  }
  else{
    alert(`Incorrect! Correct answer is  "${quizDatabase[index].ans}."`);
  }
  index++;
  quiz();
}

submitBtn.addEventListener("click", submit);

quiz();