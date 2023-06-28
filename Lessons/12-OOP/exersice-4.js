'use strict';
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype.constructor = EV;

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeTo = function (charge) {
  this.charge = charge;
};
EV.prototype.chargeBattery = function () {
  this.charge = 90;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
};

const tesla = new EV(`Tesla`, 120, 30);
*/

/*
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

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${2023 - this.birthYear} years old, but as a student I feel like ${
        2013 - this.birthYear
      }`
    );
  }
}

const martha = new Student(`Martha Jones`, 1992, `Computer Science`);
martha.introduce();
martha.calcAge();
*/
