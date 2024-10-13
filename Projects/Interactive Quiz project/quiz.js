// Creating  Object

let quiz = {
  queOne : {  
    Que : 'Q1.  Which language is being used  to create the structure of web page?' ,
    Ans : 'HTML' 
  },
  queTwo : {
    Que : 'Q2. What does HTML stand for?',
    Ans : 'Hyper Text Markup Language'
  },
  queThree : {
    Que : 'Q3. Which Is A Programming Language  In the Below?',
    Ans : 'Python'
  }
}

const  Elem_QueOne = document.getElementById('js-queOne');
const Elem_QueTwo = document.getElementById('js-queTwo');
const Elem_QueThree = document.getElementById('js-queThree');

Elem_QueOne.innerText = quiz.queOne.Que;
Elem_QueTwo.innerText = quiz.queTwo.Que;
Elem_QueThree.innerText = quiz.queThree.Que;


let ansFeedbackOne = document.getElementById('feedbackOne');
let ansFeedbackTwo = document.getElementById('feedbackTwo');
let ansFeedbackThree = document.getElementById('feedbackThree');


const  submit =  document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from actually submitting.

    // Get the selected answer.
// const selectedAnswer = document.querySelector('input[name="js-queOne-opt"]:checked').value;

    // Now you can work with the selectedAnswer value, such as displaying it to the user.
});
   
function feedbackOne() {
  const selectedAnswer = document.querySelector('input[name="js-queOne-opt"]:checked').value;
  if (selectedAnswer === quiz.queOne.Ans) {
    ansFeedbackOne.innerText = 'Correct answer' ;
  } else {
    ansFeedbackOne.innerText = 'Wrong answer';
  }
}

function feedbackTwo() {
  const selectedAnswer = document.querySelector('input[name="js-queTwo-opt"]:checked').value;
  if (selectedAnswer === quiz.queTwo.Ans) {
    ansFeedbackTwo.innerText = 'Correct answer' ;
  } else {
    ansFeedbackTwo.innerText = 'Wrong answer';
  }
}

function feedbackThree() {
  const selectedAnswer = document.querySelector('input[name="js-queThree-opt"]:checked').value;
  if (selectedAnswer === quiz.queThree.Ans) {
    ansFeedbackThree.innerText = 'Correct answer' ;
  } else {
    ansFeedbackThree.innerText = 'Wrong answer';
  }
}