"use strict";

/* Given an array of forecasted maximum and minimum temperatures, the termometer displays a string with these temperatures.

Create a function `printForecast` witch takes in an array `arr` and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5 -5, 0, 4]
*/

// 1. create function `printForecast`
// 2. Build a loop where is calculate current value for string
// 3 Find the maximum and minimum temp
// 4 Generate the string in console
/*
function printForecast(arr) {
	let max = arr[0];
	let min = arr[0];
	let str = `...`;
	let i = 0;
	while (i < arr.length) {
		max = arr[i] > max ? arr[i] : max;
		min = arr[i] < min ? arr[i] : min;
		str =
			str +
			` Maximum temperature ${max}C and minimum temperature ${min}C in ${
				i + 1
			} days ...`;
		i++;
	}
	console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
