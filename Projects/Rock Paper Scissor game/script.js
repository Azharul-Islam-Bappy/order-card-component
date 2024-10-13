// creating function for reusable code in a game.

let computerMove = '' , result = '' ;
//let score2 = JSON.parse(localStorage.getItem('score')); // experimental

function computerPick() {
    const num = Math.random();
    
    if (num >= 0 && num < 1/3) {
      computerMove = 'Rock';
    } else if (num >= 1/3 && num < 2/3) {
      computerMove = 'Paper';
    } else if (num >= 2/3 && num < 1) {
      computerMove = 'Scissor';
    }
}


let score =   JSON.parse(localStorage.getItem('score'));  


function  playerPicked(playerMove) {
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie .' ;
    } else if (computerMove === 'Paper') {
      result = 'You lose .' ;
    } else if (computerMove === 'Scissor') {
      result = 'You Win .' ;
    }
  }  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win .';
    } else if (computerMove === 'Paper') {
      result = 'Tie .';
    } else if (computerMove === 'Scissor') {
      result = 'You lose .';
    }
  }  else if (playerMove === 'Scissor') {
    if (computerMove === 'Rock') {
      result = 'You lose .';
    } else if (computerMove === 'Paper') {
      result = 'You Win .';
    } else if (computerMove === 'Scissor') {
      result = 'Tie .';
    }
  }
  
  if (result === 'You Win .') {
    score.wins += 1;
  } else if (result === 'You lose .') {
    score.loses += 1;
  } else if (result === 'Tie .') {
    score.ties += 1;
  }
  
  localStorage.setItem('score',JSON.stringify(score)); 
  
  let show_move = document.getElementById('js-move');
  show_move.innerText = 'You pick ' + playerMove + ' - Computer pick ' + computerMove;
  
alert(`Computer pick ${computerMove}. You pick ${playerMove}. ${result}
Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`); 
}

function showResult() {
  let show_result = document.getElementById('js-result');
  show_result.innerText = result;
}
