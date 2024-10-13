// Rock🥌 Paper📜 Scissor✂️  GAME 

let computerMove = '', result = '', autoPlayerMove = '';
// button elem for rock paper scissors option and for auto play 
const elem1 = document.getElementById('button-1');
const elem2 = document.getElementById('button-2');
const elem3 = document.getElementById('button-3');
const autoPlayElem = document.querySelector('.auto-play');
let intervalID = setInterval(autoPlay,2000);
let isAutoPlaying = false;


function computerPick() {
  const num = Math.random();
  
  // logic to determine computer move
  if(num >= 0 && num < 1/3) {
    computerMove = "rock";
  }
  else if(num >= 1/3 && num < 2/3) {
    computerMove = "paper";
  }
  else if(num >= 2/3 && num < 1) {
    computerMove = "scissor";
  }
}

function playerPick(playerMove) {
  computerPick();
  
  // logic to check who win
  switch(playerMove) {
    case 'rock':
      if(computerMove === "rock") {
        result = 'Tie Up!';
      } else if(computerMove ===  "paper") {
        result = 'You lose :(';
      } else if(computerMove === 'scissor') {
        result = 'You Win :)';
      }
      break;
      
    case 'paper':
      if(computerMove === 'paper') {
        result = 'Tie Up!';
      } else if(computerMove === 'scissor') {
        result = 'You lose :(';
      } else if(computerMove === 'rock') {
        result = 'You Win :)';
      }
      break;
      
    case 'scissor':
      if(computerMove === 'scissor') {
        result = 'Tie Up!';
      } else if(computerMove === 'rock') {
        result = 'You lose :(';
      } else if(computerMove === 'paper') {
        result = 'You Win :)';
      }
      break;
  }
  alert(`Result : ${result}`)
}


function autoPlay() {
  const num = Math.random();
  
  // logic to determine computer move
  if(num >= 0 && num < 1/3) {
    autoPlayerMove = "rock";
  }
  else if(num >= 1/3 && num < 2/3) {
    autoPlayerMove = "paper";
  }
  else if(num >= 2/3 && num < 1) {
    autoPlayerMove = "scissor";
  }
  computerPick();
  
  
  switch(autoPlayerMove) {
    case 'rock':
      if(computerMove === "rock") {
        result = 'Tie Up!';
      } else if(computerMove ===  "paper") {
        result = 'You lose :(';
      } else if(computerMove === 'scissor') {
        result = 'You Win :)';
      }
      break;
      
    case 'paper':
      if(computerMove === 'paper') {
        result = 'Tie Up!';
      } else if(computerMove === 'scissor') {
        result = 'You lose :(';
      } else if(computerMove === 'rock') {
        result = 'You Win :)';
      }
      break;
      
    case 'scissor':
      if(computerMove === 'scissor') {
        result = 'Tie Up!';
      } else if(computerMove === 'rock') {
        result = 'You lose :(';
      } else if(computerMove === 'paper') {
        result = 'You Win :)';
      }
      break;
  }
  alert(`Result : ${result}`)
  
}


elem1.addEventListener('click', () => {
  playerPick('rock');
});
elem2.addEventListener('click', () => {
  playerPick('paper');
});
elem3.addEventListener('click', () => {
  playerPick('scissor');
});

autoPlayElem.addEventListener('click', () => {
  if(isAutoPlaying) {
    clearInterval(intervalID);
    isAutoPlaying = false;
    alert('Auto play stoped');
  } else{
    intervalID = setInterval(autoPlay,2000);
    isAutoPlaying = true;
    alert('Auto play started');
  }
});