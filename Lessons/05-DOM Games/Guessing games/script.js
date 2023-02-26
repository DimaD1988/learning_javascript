'use strict';

// VARIABLES
let score = 10;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 30) + 1;

// CALL FUNCTIONS
const displayMessage = message =>
  (document.querySelector(`.message`).textContent = message);
const displayNumber = number =>
  (document.querySelector(`.number`).textContent = number);
const displayScore = score =>
  (document.querySelector(`.score`).textContent = score);
const displayHighscore = highscore =>
  (document.querySelector(`.highscore`).textContent = highscore);
const bodyStyle = color =>
  (document.querySelector(`body`).style.backgroundColor = color);
const styleWidth = width =>
  (document.querySelector(`.number`).style.width = width);

// RESTART
document.querySelector(`.again`).addEventListener(`click`, function () {
  // Style
  bodyStyle(`#222`);
  styleWidth(`15rem`);
  // RESET
  score = 10;
  document.querySelector(`.guess`).value = ``;
  secretNumber = Math.floor(Math.random() * 30) + 1;
  displayNumber(`?`);
  displayScore(score);
  displayMessage(`Start guessing...`);
  displayHighscore(highscore);
});

// GAME LOGIC
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess) displayMessage(`😢 No Number!`);
  else if (guess < 1 || guess > 30 || guess % 1 !== 0)
    displayMessage(`Integer, Between 1 and 30`);
  else if (guess === secretNumber) {
    displayMessage(`🏆 Correct Number!`);
    displayNumber(secretNumber);

    // STYLE
    bodyStyle(`#60b347`);
    styleWidth(`30rem`);

    // HIGHSCORE UPDATE
    highscore > score ? highscore : (highscore = score);
    displayHighscore(highscore);
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // TURN LOGIC
      let hint = guess > secretNumber ? `Too High ⏬` : `Too Low ⏫`;
      displayMessage(hint);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You lost the game! 😭`);
      bodyStyle(`#e44e50`);
      styleWidth(`30rem`);
    }
  }
});
