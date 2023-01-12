"use strict";

// STRICT MODE
/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log(`I can drive!`);

// CATCHED by "use strict"
// const interface = `Audio`;
// const private = 543;
// const if = 24;
*/

// FUNCTIONS
/*
function logger() {
	console.log(`My name is Dima`);
}
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

console.log(fruitProcessor(7, 5));

const fruitJuice = fruitProcessor(8, 3);
console.log(fruitJuice);
const appleJuice = fruitProcessor(7, 1);
console.log(appleJuice);

const num = Number("12");
console.log(num);

function describeCountry(describeCountry, population, capitalCity) {
	const str = `${describeCountry} has ${population} million people and its capital city is ${capitalCity}.`;
	return str;
}

const belarus = describeCountry(`Belarus`, 9, `Minsk`);
const russia = describeCountry(`Russia`, 140, `Moscov`);
const indonesia = describeCountry(`Indonesia`, 275, `Jakarta`);
console.log(belarus);
console.log(russia);
console.log(indonesia);
*/

// FUNCTIONS DECLARATION vs. EXPRESSION
/*
// FUNCTIONS DECLARATION
function calcAge1(birthYear) {
	return 2040 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

// FUNCTIONS EXPRESSION
const calcAge2 = function (birthYear) {
	return 2040 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

function percentageOfWorld1(population) {
	return `it's around ${Number(population) / 80} % of world population`;
}

const romania = percentageOfWorld1(20);
const usa = percentageOfWorld1(300);
const india = percentageOfWorld1(1500);

console.log(romania);
console.log(usa);
console.log(india);


const percentageOfWorld2 = function (population) {
	return `it's around ${Number(population) / 80} % of world population`;
};
const finland = percentageOfWorld2(6);
const sweden = percentageOfWorld2(10);
const norway = percentageOfWorld2(5);

console.log(finland);
console.log(sweden);
console.log(norway);
*/

// ARROW FUNCTION
/*
const calcAge3 = (birthYear) => 2050 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2040 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1988, "Dima"));
console.log(yearsUntilRetirement(1980, "Sam"));

const percentageOfWorld3 = (population) =>
	`it's around ${Number(population) / 80} % of world population`;

const portugal = percentageOfWorld3(10);
const spain = percentageOfWorld3(40);
const france = percentageOfWorld3(65);

console.log(portugal);
console.log(spain);
console.log(france);
*/

// FUNCTION CALL ANOTHER FUNCTION
/*
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangesPieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));

const percentageOfWorld = (population) => Number(population) / 80;

function describePopulation(country, population) {
	const percent = percentageOfWorld(population);
	const str = `${country} has ${population} million people, which is about ${percent} of the world.`;
	return str;
}

console.log(describePopulation(`China`, 1441));
console.log(describePopulation(`Mexico`, 77));
console.log(describePopulation(`Japan`, 131));
*/

// REVIEWING FUNCTIONS
/*
const calcAge4 = function (birthYear) {
	return 2042 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge4(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		return `${firstName} retires in ${retirement} years`;
	} else {
		return `${firstName} already retired`;
	}
};

console.log(yearsUntilRetirement(2000, `John`));
console.log(yearsUntilRetirement(1950, `Jim`));
*/

//////////////////////////////////////////////////////////

// ARRAY
/*
const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const years = new Array(1988, 1991, 1984, 2008, 2020);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay;`;
console.log(friends);

const firstName = `Jonas`;
const jonas = [firstName, `Schmedtmann`, 2037 - 1991, `teacher`, friends];
console.log(jonas);
console.log(jonas.length);

// Exersice
const calcAge = (birthYear) => 2037 - birthYear;
const years1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years1[0]),
	calcAge(years1[1]),
	calcAge(years1[years1.length - 1]),
];
console.log(ages);

const percentageOfWorld = (population) => population / 80;
const baltic = new Array(33, 3, 2, 4);
const percentages = [
	percentageOfWorld(baltic[0]),
	percentageOfWorld(baltic[1]),
	percentageOfWorld(baltic[2]),
	percentageOfWorld(baltic[3]),
];

console.log(percentages);
const output = [];
let count = 1;
function fizzBuzz() {
	if (count % 15 == 0) {
		output.push(`FIZZBIZZ`);
	} else if (count % 3 == 0) {
		output.push(`FIZZ`);
	} else if (count % 5 == 0) {
		output.push(`BIZZ`);
	} else {
		output.push(count);
	}
	count++;
	
	console.log(output);
}
fizzBuzz();

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
	console.log(
		`${names[Math.floor(Math.random() * 5)]} is going to buy lunch today!`
		);
	}
	whosPaying(names);
	*/

// console.log(whosPaying);
// ARRAY METHODS
/*
const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`);

console.log(friends);
console.log(newLength);

friends.unshift(`John`);
console.log(friends);

// Remove elements
friends.pop(); //LAST
const popped = friends.pop();

console.log(friends);

friends.shift(); //FIRST
console.log(friends);

console.log(friends.indexOf(`Steven`));
console.log(friends.indexOf(`Bob`));

console.log(friends.includes(`Steven`));
console.log(friends.includes(`Bob`));
friends.push(24);
console.log(friends.includes(`24`));
console.log(friends.includes(24));

if (friends.includes(`Steven`)) {
	console.log(`You have a friend with name Steven`);
}

const neighbours = new Array(`Canada`, `Mexico`);
console.log(neighbours);
neighbours.push(`Utopia`);
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes(`Germany`)) {
} else {
	console.log(`Probably not a central European country :D'`);
}

neighbours[0] = `Sweden`;
console.log(neighbours);
console.log(neighbours.indexOf(`Sweden`));
neighbours[neighbours.indexOf(`Sweden`)] = `Republic of Sweden`;
console.log(neighbours);
*/

// OBJECTS
/*
// DOT vs BRACKET notation
const jonas = {
	firstName: `Jonas`,
	lastName: `Schmedtmann`,
	age: 2040 - 1991,
	job: `teacher`,
	friends: [`Michael`, `Peter`, `Steven`],
};
console.log(jonas);

// DOT
console.log(jonas.lastName);

// BRACKET
console.log(jonas[`lastName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

const interestIn = prompt(
	`What do you want to know about Jonas? Choose between firstName, LastName, age, job, and friends`
);

if (jonas[interestIn]) {
	console.log(jonas[interestIn]);
} else {
	console.log(
		`Wrong request! Choose between firstName, LastName, age, job, and friends`
	);
}

jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtmann`;
console.log(jonas);

const msg = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`;
console.log(msg);
*/

// OBJECT METHODS
/*
const jonas = {
	firstName: `Jonas`,
	lastName: `Schmedtmann`,
	birthYear: 1991,
	job: `teacher`,
	friends: [`Michael`, `Peter`, `Steven`],
	hasDriversLicense: true,
	
	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
		// 	// console.log(this);
		// 	return 2037 - this.birthYear;
		// },
		
		calcAge: function () {
			this.age = 2037 - this.birthYear;
			return this.age;
		},
		getSummary: function () {
			return `${this.firstName} is a ${this.age}-year old teacher, and he has ${
				this.hasDriversLicense ? `a` : `no`
			} driver's licence`;
		},
	};
	
	console.log(jonas.calcAge());
	// console.log(jonas[`calcAge`](1991));
	
	console.log(jonas.age);
	console.log(jonas.age);
	console.log(jonas.age);
	
	const msg2 = `${jonas.firstName} is a ${
		jonas.age
	}-year old teacher, and he has ${
		jonas.hasDriversLicense ? `a` : `no`
	} driver's licence`;
	console.log(msg2);
	
	console.log(jonas.getSummary());
	
	const myCountry = {
		country: `Indonesia`,
	capital: `Jakarta`,
	language: `Bahasa-Indonesia `,
	population: 275,
	neighbours: [
		`Brunei`,
		`Malaysia`,
		`East Timor`,
		`Austrailia`,
		`New Guinea`,
		`Phillipines`,
	],
	
	getSummary1: function () {
		return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
	},
	
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
	},
};

console.log(myCountry);
console.log(myCountry.getSummary1());

// DOT
console.log((myCountry.population += 2));
// BRACKET
console.log((myCountry[`population`] -= 2));

console.log(myCountry.population);

myCountry.checkIsland();
console.log(myCountry);
*/

// LOOP
/*
for (let rep = 1; rep <= 5; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

const jonasArray = [
	`Jonas`,
	`Schmedtmann`,
	1991,
	`teacher`,
	[`Michael`, `Peter`, `Steven`],
	true,
];

const types = [];
for (let i = 0; i < jonasArray.length; i++) {
	console.log(jonasArray[i], typeof jonasArray[i]);
	// Filling types to array
	// types[i] = typeof jonasArray[i];
	types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 1988, 2008, 1977, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2023 - years[i]);
}
console.log(ages);

// CONTINUE and BREAK
// CONTINUE ->> print ONLY strings
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] !== `string`) continue;
	console.log(jonasArray[i], typeof jonasArray[i]);
}

// BREAK ->> break with boolean
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] === `boolean`) continue;
	console.log(jonasArray[i], typeof jonasArray[i]);
}

// REVERSE LOOP
for (let i = jonasArray.length - 1; i >= 0; i--) {
	console.log(jonasArray[i], typeof jonasArray[i]);
}

for (let exersice = 1; exersice <= 3; exersice++) {
	console.log(`______Starting exersice ${exersice}`);
	for (let repet = 1; repet <= 4; repet++) {
		console.log(`Lifting weight reperition ${repet}`);
	}
}

// WHILE LOOP
// Usual Loop
for (let rep = 1; rep <= 5; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

// While Loop
let rep = 1;
while (rep <= 5) {
	console.log(`WHILE: Lifting weights repetition ${rep}`);
	rep++;
}

let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.floor(Math.random() * 6) + 1;
	if (dice === 6) console.log(`Loop is about to end...`);
}

// NESTED LOOPS
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
let attempt = 0;
while (guess !== target) {
	console.log(guess);
	guess = Math.floor(Math.random() * 10);
	attempt++;
}
console.log(
	`CONGRATS YOU WIN! Target: ${target} Guess: ${guess} Used attemps: ${attempt}.`
);
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (true) {
  if (target === guess) break;
	console.log(`Guess: ${guess}`);
	guess = Math.floor(Math.random() * 10);
}
console.log(`CONGRATS YOU WIN! Target: ${target} Guess: ${guess}.`);

// FOR .. OF ..
const movieReviews = {
  Arrival: 9.5,
	Alien: 9,
	Amelie: 8,
	"In Bruges": 9,
	Amadeus: 10,
	"Kill Bill": 8,
	"Little Miss Sunshine": 8.5,
	Coraline: 7.5,
};

for (let movie of Object.keys(movieReviews)) {
	console.log(movie, movieReviews[movie]);
}

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avr = total / ratings.length;
console.log(avr);

// FOR .. IN ..
const jeopardyWinnings = {
  regularPlay: 2522700,
	watsonChallenge: 300000,
	tournamentOfChampions: 500000,
	battleOfDecades: 100000,
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
	console.log(jeopardyWinnings[prop]);
}

let total = 0;
for (let prop in jeopardyWinnings) {
  total += jeopardyWinnings[prop];
}

console.log(total);
*/
