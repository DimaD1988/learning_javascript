"use strict";
/*
function deepCount(a) {
	let counter = 0;
	for (let i = 0; i < a.length; i++) {
		if (typeof a[i] === `object`) {
			a.push(...a[i]);
		}
		counter++;
	}
	return counter;
}
deepCount([]); //, 0
deepCount([1, 2, 3]); //, 3
deepCount(["x", "y", ["z"]]); //, 4
deepCount([1, 2, [3, 4, [5]]]); //, 7
deepCount([[[[[[[[[]]]]]]]]]); //, 8
*/
/*
function head(a) {
	return a[0];
}
function tail(a) {
	return a.slice(1);
}
function init(a) {
	return a.slice(0, -1);
}
function last(a) {
	return a[a.length - 1];
}

head([5, 1]); // 5);
tail([1]); // []);
init([1, 5, 7, 9]); // [1, 5, 7]);
last([7, 2]); // 2);
*/
/*
function duplicateEncode(word) {
	const wordToLow = word.toLowerCase();
	let str = "";
	for (let i = 0; i < wordToLow.length; i++) {
		let sym = "";
		for (let j = 0; j < wordToLow.length; j++) {
			wordToLow[i] === wordToLow[j] && (sym += wordToLow[j]);
		}
		sym.length === 1 ? (str += `(`) : (str += `)`);
	}
	console.log(wordToLow, str);
	return str;
}
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
duplicateEncode("din"); // "((("
duplicateEncode("recede"); // "()()()"
duplicateEncode("Success"); // ")())())", "should ignore case"
duplicateEncode("(( @"); // "))(("
*/
/*
function nthFibo(n) {
	if (n <= 1) return 0;
	if (n === 2) return 1;
	if (n > 2) {
		const arr = [0, 1];
		for (let i = 2; i < n; i++) {
			arr[i] = arr[i - 1] + arr[i - 2];
		}
		return arr[arr.length - 1];
	}
}
nthFibo(1); // 0, "1-st Fibo"
nthFibo(2); // 1, "2-nd Fibo"
nthFibo(3); // 1, "3-rd Fibo"
nthFibo(4); // 2, "4-th Fibo"
nthFibo(5); // 3, "1-st Fibo"
nthFibo(6); // 5, "2-nd Fibo"
nthFibo(7); // 8, "3-rd Fibo"
nthFibo(8); // 13, "4-th Fibo"
*/
/*
function formatDuration(seconds) {
	if (seconds !== 0) {
		const info = {
			word: [`year`, `day`, `hour`, `minute`, `second`],
			time: [31536000, 86400, 3600, 60, 1],
			curr: [],
			prot: [],
			devider: [`, `, ` and `],
		};
		let sec = Math.abs(seconds);
		let counter = 0;
		let str = "";
		for (let i = 0; i < 5; i++) {
			info.curr[i] = Math.floor(sec / info.time[i]);
			sec -= info.time[i] * info.curr[i];
			info.curr[i] > 0 && counter++;
			info.curr[i] !== 1
				? (info.prot[i] = `${info.curr[i]} ${info.word[i]}s`)
				: (info.prot[i] = `${info.curr[i]} ${info.word[i]}`);
		}
		counter--;
		for (let ix = 0; ix < 5; ix++) {
			info.curr[ix] !== 0 && (str += info.prot[ix]);
			if (info.curr[ix] !== 0 && counter === 1) {
				str += info.devider[1];
				counter--;
			}
			if (info.curr[ix] !== 0 && counter > 1) {
				str += info.devider[0];
				counter--;
			}
		}
		console.log(info, str);
		return str;
	}
	if (seconds === 0) return `now`;
}

formatDuration(0); // "now"
formatDuration(1); // "1 second"
formatDuration(62); // "1 minute and 2 seconds"
formatDuration(120); // "2 minutes"
formatDuration(3600); // "1 hour"
formatDuration(3662); // "1 hour, 1 minute and 2 seconds"
formatDuration(86401); // "1 day and 1 second"
formatDuration(864062); // "10 days, 1 minute and 2 seconds"
formatDuration(3600 * 24 * 365); // "1 year"
formatDuration(3600 * 48 * 365 + 120); // "2 year and 2 minutes"
*/
