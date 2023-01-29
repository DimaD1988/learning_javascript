"use strict";

/*Fibonacci was an Italian mathematician who came up with the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.
e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5

Create a function where you can call it by writing the code: `fibonacciGenerator (n)` Where n is the number of items in the sequence. It should be able to call: fibonacciGenerator(3) and get [0,1,1] as the output.
The first two numbers in the sequence must be 0 and 1.*/
/*
function fibonacciGenerator(n) {
	if (n <= 0 || typeof n !== `number`) return n;
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	else {
		let arr = [0, 1];
		let i = 2;
		while (i < n) {
			arr.push(arr[i - 1] + arr[i - 2]);
			i++;
		}
		return arr;
	}
}

console.log(fibonacciGenerator(8));
*/
