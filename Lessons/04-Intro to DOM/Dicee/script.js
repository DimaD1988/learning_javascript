"use strict";

const winner = document.querySelector(`.container h1`);
const dice1 = document.querySelector(`.img1`);
const dice2 = document.querySelector(`.img2`);

const diceThrow = () => Math.floor(Math.random() * 6) + 1;

let randomNumber1 = diceThrow();
let randomNumber2 = diceThrow();

dice1.src = `images/dice${randomNumber1}.png`;
dice2.src = `images/dice${randomNumber2}.png`;

if (randomNumber1 === randomNumber2) {
	winner.textContent = `Draw!`;
} else {
	randomNumber1 > randomNumber2
		? (winner.textContent = `🏆Play 1 wins!`)
		: (winner.textContent = `Player 2 wins!🏆`);
}
