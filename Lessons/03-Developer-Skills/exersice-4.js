"use strict";

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
/*
function solution(str, ending) {
	str = String(str);
	ending = String(ending);
	if (str.length < ending.length) {
		return false;
	} else {
		for (let i = 1; i <= Math.min(str.length, ending.length); i++) {
			const result = str[str.length - i] === ending[ending.length - i];
			if (result === false) return result;
		}
		return true;
	}
}
console.log(solution(`ails`, `ails`));
*/
