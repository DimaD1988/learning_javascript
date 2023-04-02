"use strict";
/*
function numberOfPairs(gloves) {
	const init = gloves.slice();
	if (gloves.length < 2) return 0;
	const gSort = init.sort();
	const arr = [];
	let index = 0;
	for (let i = 0; i < gSort.length; i++) {
		if (gSort[i] === gSort[i - 1]) {
			arr[index]++;
		} else {
			i !== 0 && index++;
			arr[index] = 1;
		}
	}
	// return arr.reduce((acc, curr) => acc + Math.floor(curr / 2), 0);
	console.log(arr.reduce((acc, curr) => acc + Math.floor(curr / 2), 0));
}

numberOfPairs(["red", "red"]); // 1
numberOfPairs(["red"]); // 0
numberOfPairs(["red", "green", "blue"]); // 0
numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"]); //, 3
numberOfPairs(["red", "red", "red", "red", "red", "red"]); // 3
numberOfPairs([
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
	"red",
]); // 6
*/
/*
function recycle(arr) {
	const output = [[], [], [], []]; //paper, glass, organic, plastic
	arr.forEach((_, i) => {
		const { type, material, secondMaterial } = arr[i];
		(material === "paper" || secondMaterial === "paper") &&
			output[0].push(type);
		(material === "glass" || secondMaterial === "glass") &&
			output[1].push(type);
		(material === "organic" || secondMaterial === "organic") &&
			output[2].push(type);
		(material === "plastic" || secondMaterial === "plastic") &&
			output[3].push(type);
	});
	console.log(output);
	return output;
}
recycle([
	{ type: "rotten apples", material: "organic" },
	{
		type: "out of date yogurt",
		material: "organic",
		secondMaterial: "plastic",
	},
	{ type: "wine bottle", material: "glass", secondMaterial: "paper" },
	{ type: "amazon box", material: "paper" },
	{ type: "beer bottle", material: "glass", secondMaterial: "paper" },
]);

// output = [
// 	["wine bottle", "amazon box", "beer bottle"],
// 	["wine bottle", "beer bottle"],
// 	["rotten apples", "out of date yogurt"],
// 	["out of date yogurt"],
// ];
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
*/
/*
const calculate =
	(...x) =>
	(...y) => {
		return (
			x.reduce((acc, cur) => acc + cur, 0) +
			y.reduce((acc, cur) => acc + cur, 0)
		);
	};

console.log(
	calculate(1)(1), // 2
	calculate(1, 1)(1), // 3
	calculate(1, 1)(1, -1), // 2
	calculate(2, 4)(3, 7, 1) // 17
*/
/*
function sortByBit(array) {
	array = array.sort((a, b) => a - b);
	const arr = [];
	array.forEach((_, i) => {
		arr.push([array[i].toString(2).replaceAll("0", "").length, array[i]]);
	});
	arr.sort(([a], [b]) => [a] - [b]);
	console.log(arr);
	arr.forEach((_, i) => {
		array[i] = arr[i][1];
	});
	console.log(array);
	// return array;
}
sortByBit([8, 1, 3, 3, 6, 5, 9, 7]);
*/
