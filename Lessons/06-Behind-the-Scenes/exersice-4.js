"use strict";
/*
function getLengthOfMissingArray(a) {
	try {
		const b = [...a];
		const counter = [];
		const mis = [];
		b.forEach((_, i) => counter.push(b[i].length));
		counter.sort((a, b) => a - b);
		const first = counter[0];
		for (let i = 0; i < counter.length; i++) {
			if (counter[i] !== i + first) {
				mis.push(i + first);
			}
		}
		if (counter.length === 0) {
			return 0;
		} else if (counter.length === 1) {
			return 1;
		} else {
			return counter[0] === 0 ? 0 : mis[0];
		}
	} catch (a) {
		return 0;
	}
}


getLengthOfMissingArray([[], [1, 2, 2]][(0, 3)]); // 0);
getLengthOfMissingArray([
	[],
	[2, 1, 0, 4, 1, 4],
	[4, 1, 2, 4],
	[3, 4, 3, 1, 4],
	[0],
	[4, 3],
]); // 0);
getLengthOfMissingArray([
	[2, 2, 4, 3, 0],
	[2, 4, 3, 0],
	[4, 3, 4, 2, 2, 4, 4, 0, 4, 0, 1, 2],
	[0, 3, 2, 1, 1, 4, 0, 2, 2, 0, 1],
	[3, 0, 1, 1, 4, 4, 2, 3, 3],
	[0, 0, 4],
	[0, 2, 4, 1, 4, 3, 4],
	[3, 1, 3, 3, 2, 4, 1, 2, 1, 1],
	[4, 3],
	[2, 2, 3, 0, 1, 0, 3, 4],
	[2, 4, 3, 4, 3, 2, 4, 2, 2, 0, 3, 1, 2],
]); // 6);
getLengthOfMissingArray([[4], [0, 1, 0], []]); // 1);
getLengthOfMissingArray(undefined); // 0);
getLengthOfMissingArray(null); // 0);
getLengthOfMissingArray(0); // 0);
getLengthOfMissingArray([]); // 0);
getLengthOfMissingArray([0]); // 1);
getLengthOfMissingArray([
	[1, 4, 3, 2],
	[0, 1, 4, 2, 2, 4],
	[4, 3, 0, 1, 1, 1, 3, 2, 2, 0, 0],
	[0, 3, 4, 1, 3, 4, 2],
	[1, 4, 3, 3, 3, 1, 2, 1],
	[2, 2, 0, 1, 0, 4, 4, 0, 1, 0],
	[0, 0, 0, 1, 4, 2, 4, 3, 2],
]); // 5);
getLengthOfMissingArray([
	[3, 1, 2],
	[4, 2, 1, 4],
	[0, 1, 1, 1, 3, 0],
]); // 5);
getLengthOfMissingArray([
	[4, 0],
	[4, 1, 1, 1, 1, 2],
	[4, 1, 4],
	[0, 2, 4, 3, 2],
]); // 4);
getLengthOfMissingArray([
	[],
	[0, 3, 2, 4, 0, 2, 0, 4],
	[1],
	[3, 4],
	[1, 0, 2],
	[0, 2, 4, 4, 0, 0],
	[3, 2, 0, 3],
	[0, 3, 1, 1, 4],
]); // 0);
getLengthOfMissingArray([
	[3, 4, 4, 0, 4, 4],
	[4, 2, 3, 2, 2, 3, 0, 2, 3, 2],
	[2, 2, 1, 0, 3, 1, 4, 3, 0, 2, 4],
	[1, 4, 0, 3, 4, 0, 1],
	[2, 3, 4, 4, 3, 4, 4, 2, 2],
	[0, 0, 4, 0, 4, 2, 1, 2, 4, 3, 0, 4],
	[1, 1, 2, 1],
	[2, 1, 3, 1, 4, 0, 0, 2],
]); // 5);
*/
