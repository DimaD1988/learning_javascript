'use strict';

// SELECTING ELEMENTS
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// STARTING CONDITIONS
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

// VARIABLES
let scores, currentScore, activePlayer, playing;

// NEW GAME
const start = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};

// INIT
start();

// CURRENT PLAYER SCORE
const activePlayerCurent = function (p) {
  activePlayer === 0
    ? (current0El.textContent = p)
    : (current1El.textContent = p);
};

// SWITCH PLAYER
const switchPlayer = function () {
  activePlayerCurent(0);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

// ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `img/dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      activePlayerCurent(currentScore);
    } else {
      switchPlayer();
    }
  }
});

// "HOLD" BUTTON
btnHold.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    activePlayer === 0
      ? (score0El.textContent = scores[activePlayer])
      : (score1El.textContent = scores[activePlayer]);

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      switchPlayer();
    }
  }
});

// NEW GAME
btnNew.addEventListener(`click`, start);
