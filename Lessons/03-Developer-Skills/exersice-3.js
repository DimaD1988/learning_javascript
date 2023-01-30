"use strict";
/*
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

function isValidPassword(password, username) {
	let char = password.length < 8;
	let space = password.indexOf(` `) !== -1;
	let name = password.indexOf(username) !== -1;
	return !char && !space && !name;
}

const password1 = isValidPassword("89Fjj1nms", "dogLuvr"); //true
const password2 = isValidPassword("dogLuvr123!", "dogLuvr"); //false
const password3 = isValidPassword("hello1", "dogLuvr"); //false
console.log(password1, password2, password3);

// Write a function to find the average value in an array of numbers
//avg([75,76,80,95,100]) //85.2
function avg(average) {
	let total = 0;
	for (let num of average) {
		total += num;
	}
	return total / average.length;
}

const result1 = avg([0, 50]); //25
const result2 = avg([75, 76, 80, 95, 100]); //85.2
console.log(result1, result2);

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"
// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of `abcdefghijklmnopqrstuvwxyz`) {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

const exam1 = isPangram("The five boxing wizards jump quickly"); //true
const exam2 = isPangram("The five boxing wizards jump quick"); //false
console.log(exam1, exam2);

*/
