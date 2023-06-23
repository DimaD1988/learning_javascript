'use strict';
/*
const Person = function (fName, bYear) {
  // INSTANCE PROPERTIES
  this.firstName = fName;
  this.birthYear = bYear;

  //NEVER USE THIS
  // this.calcAge = function () {
  //   return 2023 - this.birthYear;
  // };
};

const dima = new Person(`Dima`, 1988);

// 1. New {} is created
// 2. function is called, this ={}
// 3. {} linked to prototype
// 4. function automatically return {}

const sveta = new Person(`Sveta`, 1970);
const oleg = new Person(`Oleg`, 1966);
console.log(dima, sveta, oleg);
console.log(dima instanceof Person);

// PROTOTYPES
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

dima.calcAge();
console.log(Person.prototype.isPrototypeOf(dima));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.spesies = `Homo Sapiens`;

console.log(dima.spesies, sveta.spesies, oleg);

console.log(dima.hasOwnProperty(`firstName`), dima.hasOwnProperty(`spesies`));

console.log(
  dima.__proto__,
  dima.__proto__.__proto__,
  dima.__proto__.__proto__.__proto__
);
console.log(new Array().__proto__);
*/
