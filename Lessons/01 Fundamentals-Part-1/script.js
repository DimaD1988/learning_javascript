// BEGIN
/*
let js = `amazing`;
console.log(40 + 8 + 23 - 10);

console.log(`Dima`);
console.log(12);

let firstName = `Puspita`;
console.log(firstName);
console.log(firstName);
console.log(firstName);

let dima_puspita = `dp`;
let $function = 27;

let person = `dima`;
let E = 2.717;
let myFirstJob = `deliver`;
let myLastJob = `hauler`;

console.log(myFirstJob);

let country = `Indonesia`;
let continent = `South Asia`;
let population = `275000000`;

console.log(country);
console.log(continent);
console.log(population);
*/

// DATA TYPES
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 12);
console.log(typeof `Dima`);

javascriptIsFun = `YES`;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let isIsland = true;
let language;
let country = `Indonesia`;
let population = 275000000;

console.log(isIsland);
console.log(typeof isIsland);
console.log(language);
console.log(typeof language);
console.log(country);
console.log(typeof country);
console.log(population);
console.log(typeof population);
*/

// LET, CONST and VAR
/*
let age = 34;
age = 30;

const birthyear = 1988;

var job = `deliver`;
job = `hauler`;
*/

// BASIC OPERATORS
/*
let now = 2044;
const ageDima = now - 1988;
const agePuspita = now - 1988;
console.log(ageDima, agePuspita);

const firstName = `Dima`;
const lastName = `Don`;
console.log(firstName + " " + lastName);

let x = 3 + 8;
console.log(x);
x++;
console.log(x);
x += 10;
console.log(x);
x *= 3;
console.log(x);
x--;
console.log(x);

let population = 275000000;
console.log(population);
population /= 2;
console.log(population);
population++;
console.log(population);

const finland = 6000000;
console.log(population > finland);

const avrPopulation = 33000000;
console.log(population < finland);

let description =
"Portugal is in Europe, and its 11 million people speak portuguese";
console.log(description);
*/

//COMPARISON OPERATORS
/*
let now = 2044;
const ageDima = now - 1988;
const agePuspita = now - 1988;
console.log(ageDima > agePuspita);
console.log(ageDima === agePuspita);
console.log(ageDima <= 18);
console.log(agePuspita >= 18);

console.log(26 - 12 - 4);
let x = (y = 26 - 12 - 4);
console.log(x, y);

let a = 8;
let b = 3;
console.log(a, b);
a = a - b;
b = b + a;
a = b - a;
console.log(a, b);
*/

// STRINGS and CONCATENATION
/*
const firstName = "Dima";
const job = "student";
const birthyear = 1988;
const year = 2022;

const dima =
	`I'm ` + firstName + `, a ` + (year - birthyear) + ` years old ` + job + `!`;
console.log(dima);

const dimaNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(dimaNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);
*/

// IF / ELSE
/*
const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log(`Dima can start driving license 🚗`);
} else {
	console.log(`Dima is too young. ✋
Wait another ${18 - age} years 👋`);
}

const birthyear = 1988;
let century;
if (birthyear <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(century);


let populCountry = 275;
// populCountry = 13;
// populCountry = 130;
if (populCountry > 33) {
	console.log(
		`Indonesian's population is ${populCountry - 33} million above average`
		);
	} else {
		console.log(
		`Indonesian's population ${33 - populCountry} million below average`
		);
	}
*/

// CONVERCION and COERTION
/*
// CONVERCION
const inputYear = `1988`;
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number(`dima`));
console.log(typeof NaN);

console.log(String(25), 25);

// COERTION
console.log(`I am ` + 34 + ` years old`);
console.log(`24` - `12` - 3);
console.log(`24` + `12` + 3);
console.log(`12` * `3`);
console.log(`12` / `3`);

let n = `1` + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + `5`);
console.log(`10` - `4` - `3` - `2` + `5`);

console.log(`9` - `5`);
console.log(`19` - `13` + `17`);
console.log(`19` - `13` + 17);
console.log(`123` < 57);
console.log(5 + 6 + `4` + 9 - 4 - 2);
*/

// TRULY and FALSY
/*
// 6 falsy values: false, 0, ``, undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Dima D`));
console.log(Boolean({}));
console.log(Boolean(``));

const money = 10;
if (money) {
	console.log(`Don't spend it all 😌`);
} else {
	console.log(`You should get a job! 😒`);
}

let height;
// height = 0;
// height = 10;
if (height) {
	console.log(`YAY! Height is defined`);
} else if (height === 0) {
	console.log(`Height is Zero`);
} else {
	console.log(`Height is UNDEFINED`);
}
*/

// EQUALITY OPERATORS: == vs. ===
/*
const age = 20;
if (age == `20`) console.log(`You are 20 years old (loose)`);
if (age === `20`) console.log(`You are 20 years old (strict)`);
if (age === 20) console.log(`You are 20 years old (strict)`);

const favorite = Number(prompt(`What's your favorite number`));
console.log(favorite, typeof favorite);

if (favorite > 0) {
	console.log(`${favorite} is positive number`);
} else if (favorite < 0) {
	console.log(`${favorite} is negative number`);
} else {
	console.log(`${favorite} is equal zero`);
}

const numNeighbours = Number(
	prompt(`How many neighbour countries does your country have?`)
);

if (numNeighbours === 0) {
	console.log(`No borders`);
} else if (numNeighbours === 1) {
	console.log(`Only 1 border!`);
} else {
	console.log(`More than 1 border`);
}
*/

// LOGICAL OPERATORS
/*
const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(hasGoodVision);

const canDrive = hasDriverLicence && hasGoodVision;

if (canDrive) {
	console.log(`Dima can to drive!`);
} else {
	console.log(`Someone cannot to drive...`);
}

const isTired = true;
console.log(hasDriverLicence && hasGoodVision && !isTired);

const shouldDrive = hasDriverLicence && hasGoodVision && !isTired;

if (shouldDrive) {
	console.log(`Dima is able to drive!`);
} else {
	console.log(`Someone else should drive...`);
}

	const population = 32;
	
	const confortPopulation = population < 50;
	const languageEnglish = true;
	const isIsland = false;
	
	if (languageEnglish && confortPopulation && !isIsland) {
		console.log(`My country has this criteria!`);
	} else {
		console.log(
			`My country does not meet your criteria, prefer to chouce Portugal or Canada.`
			);
		}
*/

// SWITCH STATEMENT
/*
const day = `monday`;
switch (day) {
	case "monday":
		console.log(`Pass new tests`);
		console.log(`Start new theme`);
		break;
	case "tuesday":
	case "wednesday":
	case "thursday":
		console.log(`Continue to learn`);
		break;
	case "friday":
		console.log(`Resting`);
		break;
	case "saturday":
	case "sunday":
		console.log(`Preparing to tests`);
		break;
	default:
		console.log(`Not a valid day!`);
}

const language = `chinese`;
switch (language) {
	case `chinese`:
	case `mandarin`:
		console.log("MOST number of native speakers!");
		break;
	case `spanish`:
		console.log("2nd place in number of native speakers");
		break;
	case `english`:
		console.log("3rd place");
		break;
	case `hindi`:
		console.log("Number 4");
		break;
	case `arabic`:
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}
*/

// EXPRESSIONS and STATEMENTS
/*
// expession - contain value itself!
3 + 4;
1988;

// statement - declarate `how to find value'
if (24 > 12) {
	const str = `24 is bigger`;
}
*/

// THE CONDITIONAL (TERNARY) OPERATOR
// full
/*
const age = 24;
age >= 18
? console.log(`I can drive car 🚗`)
: console.log(`I'm too young for driving 😢`);


// short
const age = 20;
const can = age >= 18 ? `can drive car 🚗` : `I'm too young for driving 😢`;
console.log(can);

// same - but ~IF~
let can2;
if (age >= 18) {
	can2 = `can drive 🚗`;
} else {
	can2 = `cannot drive 😢`;
}
console.log(can2);

// Use As Expression
console.log(age >= 18 ? `can drive 🚗` : `I'm too young 😢`);

const populationIndonesia = 275;
const message =
populationIndonesia > 33
? `Indonesia's population is above average`
: `Indonesia's population is below average`;
console.log(message);
*/

// STRINGS METHODS
/*
// Valid:  `` , '', ""

const firstName = `Gadget`;
const lastName = `Hackwrench`;
console.log(firstName, lastName);

let fullName = firstName + ` ` + lastName;
console.log(fullName);

// STRING INDICES
const firstNameLenght = firstName.length;
const lastNameLenght = lastName.length;
const fullNameLenght = fullName.length;
console.log(firstName, firstNameLenght);
console.log(lastName, lastNameLenght);
console.log(fullName, fullNameLenght);

console.log(
	firstName[0], // G
	firstName[1], // A
	firstName[2], // D
	firstName[3], // G
	firstName[4], // E
	firstName[5], // T
	firstName[10] // undefined
);

console.log(firstName[firstName.length - 1]);

// METHODS
let msg = `today is a nice day`;
console.log(msg);

// not change value
console.log(msg.toUpperCase(), `"not change value"`);
console.log(msg);

// change value
msg = msg.toUpperCase();
console.log(msg, `"change value"`);

// TRIM
let character = `    mouse     			`;
console.log(character);
console.log(character.trim());
console.log(character.trim().toUpperCase());
console.log(character);
character = character.trim().toUpperCase();
console.log(character);

//IndexOF
let tvShow = `catdog`;

console.log(
	tvShow,
	tvShow.indexOf(`cat`),
	tvShow.indexOf(`dog`),
	tvShow.indexOf(`z`)
);

let sport = `Baseball`;

console.log(
	sport,
	sport.indexOf(`ball`),
	sport.indexOf(`B`),
	sport.indexOf(`b`),
	sport.indexOf(`m`)
);

// SLICE and REPLACE
console.log(sport.slice(4), sport.slice(0, 4), sport.slice(40));

let phrase = `football is entertaiment as entertaiment`;
console.log(phrase);
console.log(phrase.replace(`entertaiment`, `ok`));
*/
