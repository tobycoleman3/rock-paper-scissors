// get the modal
var modal = document.getElementById('rulesModal');
// get the button that opens the modal
var btn = document.getElementById('rulesBtn');
// get the span element that closes the modal
var span = document.getElementsByClassName('close')[0];
// when the user clicks the button it opens the modal
btn.onclick = function () {
  modal.style.display = "block"
}
// when the user clocks on span closes the modal 
span.onclick = function () {
  modal.style.display = "none"
}
// when the user clicks anywhere else closes the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

let playerScore = 0;
let computerScore = 0;
let moves = 0;

// Function to
const playGame = () => {
  const rockBtn = document.querySelector('.rock');
  const paperBtn = document.querySelector('.paper');
  const scissorsBtn = document.querySelector('.scissors');
  const lizardBtn = document.querySelector('.lizard');
  const spockBtn = document.querySelector('.spock');
  const playerOptions = [rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn];
  const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  //Funtion to start playing the game
  playerOptions.forEach(option => {
    option.addEventListener('click', function () {

      const movesLeft = document.querySelector('.movesleft');
      moves++;
      movesLeft.innerText = `Moves Left: ${10 - moves}`;


      const choiceNumber = Math.floor(Math.random() * 5);
      const computerChoice = computerOptions[choiceNumber];

      // Function to check who wins
      winner(this.innerText, computerChoice)

      // Calling gameOver function after 10 moves
      if (moves == 10) {
        gameOver(playerOptions, movesLeft);
      }
    })
  })
}

// How to decide winner
const winner = (player, computer) => {
  const result = document.querySelector('.result');
  console.log("results:", result)
  const playerScoreBoard = document.querySelector('.p-count');
  const computerScoreBoard = document.querySelector('.c-count');
  player = player.toLowerCase();
  computer = computer.toLowerCase();
  if (player === computer) {
    result.textContent = 'Tie'
  }
  else if (player == 'rock') {
    if (computer == 'paper') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'paper') {
    if (computer == 'scissors') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'lizard') {
    if (computer == 'rock') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'spock') {
    if (computer == 'lizard') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'scissors') {
    if (computer == 'spock') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'lizard') {
    if (computer == 'scissors') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'paper') {
    if (computer == 'lizard') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'spock') {
    if (computer == 'paper') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'rock') {
    if (computer == 'spock') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
  else if (player == 'scissors') {
    if (computer == 'rock') {
      result.textContent = 'Computer Won';
      computerScore++;
      computerScoreBoard.textContent = computerScore;
    } else {
      result.textContent = 'Player Won'
      playerScore++;
      playerScoreBoard.textContent = playerScore;
    }
  }
}

// Funtion to run when game is over
const gameOver = (playerOptions, movesLeft) => {
  const chooseMove = document.querySelector('.move');
  const result = document.querySelector('.result');
  const reload = document.querySelector('.reload');
  playerOptions.forEach(option => {
    option.style.display = 'none';
  })

  chooseMove.innerText = 'Game Over!'
  movesLeft.style.display = 'none';

  if (playerScore > computerScore) {
    result.style.fontSize = '2rem';
    result.innerText = 'Congratulations! You Won The Game!';
    result.style.color = '#308D46';
    result.style.textAlign = 'center';
  }
  else if (playerScore < computerScore) {
    result.style.fontSize = '2rem';
    result.innerText = 'Unlucky! You Lost The Game!';
    result.style.color = 'red';
    result.style.textAlign = 'center';
  }
  else {
    result.style.fontSize = '2rem';
    result.innerText = 'Tie!!';
    result.style.color = 'black';
    result.style.textAlign = 'center';
  }

  const btnRestart = document.getElementById("restartBtn");
  function handleClick() {
    window.location.reload();
  }
  btnRestart.addEventListener('click', handleClick)
}

playGame();

// Hide the rules button when the game has started
function myFunction() {
  document.getElementById("rulesBtn").hidden = true;
  document.getElementById("restartBtn").style.display = "center";
}