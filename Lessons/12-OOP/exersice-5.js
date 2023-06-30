'use strict';
/*
const Person = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(Person);

const Student = Object.create(Person);

Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};
Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(Student);
jay.init(`Jay`, 1998, `Computer Science`);
jay.introduce();
*/

/*
// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4) Private Methods
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  //  2)Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }

  // 3) Public Methods
  // PUBLIC INTERFACE
  getMovements() {
    return this.#movements;
  }

  // 4) Private Methods
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account(`Dima`, `Rp`, 1111);
//
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1);
console.log(acc1.pin);
console.log(acc1.getMovements());
// console.log(acc1.#movements());
// console.log(acc1.#pin());
// console.log(acc1._approveLoan());

// CHAINIG
acc1.deposit(300).deposit(500).withdraw(30).requestLoan(25000).withdraw(4000);
console.log(acc1);
*/
