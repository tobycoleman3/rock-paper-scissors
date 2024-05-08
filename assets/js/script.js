// get the modal
var modal = document.getElementById('rulesModal');
// get the button that opens the modal
var btn = document.getElementById('rulesBtn');
// get the span element that closes the modal
var span = document.getElementsByClassName('close')[0];
// when the user clicks the button it opens the modal
btn.onclick = function() {
  modal.style.display = "block"
}
// when the user clocks on span closes the modal 
span.onclick = function() {
  modal.style.display = "none"
}
// when the user clicks anywhere else closes the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// game logic
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  // Function to
  const playGame - () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const lizardBtn = document.querySelector('.lizard');
    const spockBtn = document.querySelector('.spock');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn];
    const computerOptions = [rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn];

    //Funtion to start playing the game
    playerOptions.forEach(option =>
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('movesleft');
        moves++;
        movesLeft.innerText = `Moves Left: ${10 - moves}`;
        const choiceNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[choiceNumber];

        // Function to check who wins
        winner(this.innerText, computerChoice)
        // Calling game over after 10 moves
        if (moves == 10) {
          gameOver(playOptions, movesLeft);
        }
      })
    )
  }
}