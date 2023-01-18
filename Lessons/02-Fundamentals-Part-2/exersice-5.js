"use strict";
/*
// There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for (let v = 0; v <= 50; v++) {
	console.log(`Voter number ${v} is currently voting`);
}

// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the  percentages of the world population for the 4 population values. Use the function 'percentageOfWorld' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
const percentageOfWorld = (popul) => popul / 80;
const populations = new Array(143, 62, 10, 33);
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
	let percent = percentageOfWorld(populations[i]);
	percentages2.push(percent);
}
console.log(percentages2);

// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];

// 2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this.
for (let row = 0; row < listOfNeighbours.length; row++) {
	for (let col = 0; col < listOfNeighbours[row].length; col++) {
		console.log(`Neighbour: ${listOfNeighbours[row][col]}`);
	}
}

// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
// but this time using a while loop (call the array 'percentages3')
// 2. Reflect on what solution you like better for this task: the for loop or the while loop
const percentages3 = [];
let z = 0;
while (z < populations.length) {
	let percent = percentageOfWorld(populations[z]);
	percentages3.push(percent);
	z++;
}
console.log(percentages3);
*/
