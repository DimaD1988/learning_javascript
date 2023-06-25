'use strict';
/*
//CLASS DECLARATION
// class Person {
// }

//CLASS EXPRETION
const Person = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2023 - this.birthYear;
  }

  // SET a property that already exist
  set fullName(name) {
    if (name.includes(` `)) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // STATIC METHOD
  static hey() {
    console.log(`Hey there 👋`);
    console.log(this);
  }
};
const dima = new Person(`Dmitry Donchenko Alexandrovich`, 1988);
console.log(dima);
dima.calcAge();

Person.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
dima.greet();

// 1. Classes are NOT hoisted
// 2. Classes are firt-class citizes
// 3. Classes are executed in strict mode

const account = {
  owner: `jonas`,
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.latest);
console.log(account.movements);
console.log(dima.age);

const walter = new Person(`Walter White`, 1965);
console.log(walter, walter.fullName);

Array.from(document.querySelectorAll(`h1`));

Person.hey();
const Person = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(Person);
console.log(steven);
steven.name = `Steven`;
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__);

const sarah = Object.create(Person);
sarah.init(`Sarah`, 1979);
sarah.calcAge();

*/
