"use strict";
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	let flag = true;
	console.log(enteredCode, correctCode, currentDate, expirationDate);
	enteredCode !== correctCode && (flag = false);
	new Date(currentDate).getTime() > new Date(expirationDate).getTime() &&
		(flag = false);
	return flag;
}
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	return (
		enteredCode === correctCode &&
		Date.parse(expirationDate) >= Date.parse(currentDate)
	);
}
checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"); //true
checkCoupon("123", "123", "September 6, 2014", "September 1, 2014"); //true
checkCoupon("123", "123", "September 5, 2015", "October 1, 2014"); //true
checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"); //false
*/
/*
function unluckyDays(year) {
	let counter = 0;
	for (let i = 0; i < 13; i++) {
		new Date(`${i}/13/${year}`).getDay() === 5 && counter++;
		console.log(new Date(`${i}/13/${year}`));
	}
	console.log(counter);
	return counter;
}

unluckyDays(1586); // 1
unluckyDays(1001); // 3
unluckyDays(2819); // 2
unluckyDays(2792); // 2
unluckyDays(2723); // 2
unluckyDays(1909); // 1
unluckyDays(1812); // 2
unluckyDays(1618); // 2
unluckyDays(2132); // 1
unluckyDays(2065); // 3
  */
/*
function handAngle(date) {
	const hourArrow = date.getHours() * 5 + date.getMinutes() / 12;
	const minArrow = date.getMinutes();
	const dif = Math.abs(hourArrow - minArrow);
	const med = dif > 30 ? 30 - (dif - 30) : dif;
	console.log((med / 30) * 3.141592653589793);
	return (med / 30) * 3.141592653589793;
}

function makeDate(hours, minutes) {
	const date = new Date();
	date.setMinutes(minutes);
	date.setHours(hours);
	handAngle(date);
}
makeDate(0, 0); //0.0;
makeDate(12, 0); //0.0;
makeDate(6, 0); //3.141592653589793;
makeDate(1, 0); //0.5235987755982988;
makeDate(9, 0); //1.5707963267948966;
makeDate(10, 0); //1.0471975511965976;
makeDate(0, 15); //1.4398966328953218;
makeDate(0, 45); //1.9634954084936207;
makeDate(12, 30); //2.8797932657906435;
makeDate(7, 15); //2.2252947962927703;
makeDate(6, 5); //2.6616271092913526;
*/
/*
function myLanguages(results) {
	const arr = [];
	for (let k in results) {
		results[k] >= 60 && arr.push([results[k], k]);
	}
	arr.sort(([a], [b]) => [b] - [a]);
	arr.forEach((_, i) => {
		const [score, name] = arr[i];
		arr[i] = name;
	});
	return arr;
}
function myLanguages(results) {
	return Object.keys(results)
		.filter((r) => results[r] > 59)
		.sort((a, b) => results[b] - results[a]);
}

myLanguages({ Java: 10, Ruby: 80, Python: 65 }); // ["Ruby","Python"]
myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }); // ["Dutch","Greek","Hindi"]
myLanguages({ "C++": 50, ASM: 10, Haskell: 20 }); //[]
*/
/*
function runLengthEncoding(str) {
	const arr = str.split(``);
	const result = [];
	let counter = 1;
	arr.forEach((_, i) => {
		arr[i] !== arr[i - 1] && result.push([1, arr[i]]) && (counter = 1);
		arr[i] === arr[i - 1] && (result[result.length - 1] = [++counter, arr[i]]);
	});
	return result;
}
runLengthEncoding(""); // []
runLengthEncoding("abc"); // [[1,'a'],[1,'b'],[1,'c']]
runLengthEncoding("aab"); // [[2,'a'],[1,'b']]
runLengthEncoding("hello world!"); // [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]
runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"); // [[34,'a'], [3,'b']]
runLengthEncoding(
	"WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"
); // [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
*/
