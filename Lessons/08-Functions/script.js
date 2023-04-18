'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 3);
createBooking(`LH123`, 2, 800);
*/
/*
const flight = `LH234`;
const dima = {
  name: `Dima D`,
  passport: 2451966,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;
  passenger.passport === 2451966
    ? alert(`Checked in`)
    : alert(`Wrong passport!`);
};

// checkIn(flight, dima);
// console.log(flight, dima);

const newPassport = p => (p.passport = Math.floor(Math.random() * 1000000));

newPassport(dima);
console.log(dima);
checkIn(flight, dima);
console.log(flight, dima);
*/
/*
const oneWord = str => str.replaceAll(/ /g, ``).toLowerCase();

const upperFirstWord = str => {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer(`Javascript is the best!`, upperFirstWord);
transformer(`Javascript is the best!`, oneWord);
*/
/*
const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet(`Hey`);
greeterHey(`Jonas`);
greeterHey(`Dima`);
greet(`Hello`)(`Dima D`);
*/
/*
const lufthansa = {
  airline: `Lufthansa`,
  dataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.dataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.dataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Dima D`);
lufthansa.book(635, `John Smith`);

const eurowings = {
  airline: `Eurowings`,
  dataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// book(23, `Sarah Williams`);
book.call(eurowings, 23, `Sarah Williams`);
book.call(lufthansa, 235, `Jessica Davis`);

const swiss = {
  airline: `Swiss Air Lines`,
  dataCode: `LX`,
  bookings: [],
};
console.log(lufthansa, eurowings);
book.call;

book.call(swiss, 434, `Jonathan Nolan`);
console.log(swiss);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, `Steven Wl`);

const bookEW23 = book.bind(eurowings, 23);
bookEW23(`Dima D`);
bookEW23(`Jonas Schmedtmann`);

// WITH EVENT LISTENERS
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
*/
/*
// debugger;
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
// booker();
// booker();
debugger;
let f;
const g46 = () => {
  const a = 23;
  f = () => console.log(a * 2);
};
const h780 = () => {
  const b = 777;
  f = () => console.log(b + 3);
};
// f();
g46();
f();
h780();
f();

*/
