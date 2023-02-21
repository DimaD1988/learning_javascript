'use strict';
/*
// SCOPPPING
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
  }
  printAge();
  return age;
}

const firstName = `Dima`;
calcAge(1988);
// console.log(age); NOT ACCESED
*/

// HOISTING
// Variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = `Dima`;
let job = `Hauler`;
const year = 1988;
*/
// Functions
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//  Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All product deleted`);
}

var x = 1;
let y = 2;
let z = 3;
console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);
*/

// FIRST ~THIS~ KEYWORD
/*
console.log(this);

const calcAge = function birthYear(birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAge(1988);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};
calcAgeArrow(1988);

const dima = {
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};
dima.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = dima.calcAge;
matilda.calcAge();


const f = dima.calcAge;
f();
const dima = {
  firstName: `Dima`,
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
    
    // 1
    // const self = this; //self
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    
    // 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
dima.greet();
dima.calcAge();

*/
// PRIMITIVES and OBJECTS
/*
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge, age);

const me = {
  name: `Dima`,
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me, friend);

let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName, oldLastName);

const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = `Davis`;
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

const jessica2 = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davis`;

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`John`);

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);
*/
///////////////////////////////////////////////
/*
function add(num1, num2) {
  let a, b, x, y, z;
  let acc = '';
  const strA = String(num1);
  const strB = String(num2);
  strA.length >= strB.length
    ? ((a = strA), (b = strB))
    : ((b = strA), (a = strB));
  x = a.length;
  y = b.length;
  z = x - y;
  console.log(x, y);
  // console.log(a.length, b.length);

  for (let i = 0; i < x; i++) {
    if (i >= z) {
      acc += String(Number(a[i]) + Number(b[i - z]));
      console.log(acc);
    } else {
      acc += String(Number(a[i]));
      console.log(acc);
    }

    // co
  }
}

console.log(add(38810, 1383));
console.log(add(38810, 1383));

*/

