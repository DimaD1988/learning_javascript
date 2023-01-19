"use strict";
/*
//1. We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the themperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1. Understanding the problem
// - What is temp apmlitude?
// Answer: difference between highest and lowest temp
// - How to compute ma and min temperatures?
// - What's a sensor error? And what to do?

// 2. Breaking up into sub-problem
// How to ignore errors?
// Find max and min values in temp array
// Substract min and max and return it
// debugger;
const temp1 = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
const temp2 = [4, -9, -11, -12, `error`, 19, 1, 10, 18, 21, 20, 23];

const calcTempAmplitude = function (temps) {
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== `number`) continue;
		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	return max - min;
};
console.log(calcTempAmplitude(temp1));

// Problem 2:
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - With 2 arrays, should we emplement functionallity twice?
// Answer: No. Just merge it

const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);
	let max = temps[0];
	let min = temps[0];
	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== `number`) continue;
		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	return max - min;
};
console.log(calcTempAmplitudeNew(temp1, temp2));
*/
