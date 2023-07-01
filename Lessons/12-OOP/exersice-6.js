'use strict';
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 10;
  }
}
class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 10;
    return this;
  }
  brake() {
    this.speed -= 20;
    this.#charge += 5;
    return this;
  }
}
const rivian = new EV(`Rivian`, 100, 55);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().brake();
console.log(rivian);
// debugger;
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const hi = greet(`Hi`);
const yo = greet(`Yo, c'mon`);
const goodA = greet(`Good afternoon,`);
hi(`Dima`);
yo(`Dima`);
goodA(`Dima`);
console.dir(hi);
// console.log(hi(`Dima`).greeting);

function sayHello() {
  console.log(`${this.greeting}, ${this.name}`);
}
const person1 = {
  name: 'Анна',
  greeting: 'Привет',
};
const person2 = {
  name: 'Борис',
  greeting: 'Привет',
};
const helloAnna = sayHello.bind(person1);
const helloBoris = sayHello.bind(person2);
helloAnna();
helloBoris();
*/
