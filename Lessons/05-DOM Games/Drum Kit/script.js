"use strict";
const drum = document.querySelectorAll(`.drum`);
const drumScript = {
	songSrc: [
		"sounds/tom-1.mp3",
		"sounds/tom-2.mp3",
		"sounds/tom-4.mp3",
		"sounds/tom-3.mp3",
		"sounds/snare.mp3",
		"sounds/kick-bass.mp3",
		"sounds/crash.mp3",
	],
	currKey: [`w`, `a`, `s`, `d`, `j`, `k`, `l`],
	keyPress(e) {
		this.currKey.indexOf(e.key) !== -1 &&
			this.sound(this.currKey.indexOf(e.key));
	},
	sound(i) {
		const song = new Audio(`${this.songSrc[i]}`);
		song.play();
		this.btnAnimation(i);
	},
	btnAnimation(i) {
		document.querySelector(`.${this.currKey[i]}`).classList.add("pressed");
		setTimeout(() => {
			document.querySelector(`.${this.currKey[i]}`).classList.remove("pressed");
		}, 80);
	},
};

document.addEventListener(`keydown`, (e) => {
	drumScript.keyPress(e);
});
drum.forEach((el, i) =>
	drum[i].addEventListener(`click`, () => {
		drumScript.sound(i);
	})
);
