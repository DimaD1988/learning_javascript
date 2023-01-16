"use strict";

/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height)
// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
const mark = {
  fullName: `Mark Miller`,
	mass: 78,
	height: 1.69,
	calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: `John Smith`,
	mass: 92,
	height: 1.95,
	calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
mark.calcBMI();
john.calcBMI();
console.log(Math.round(mark.bmi), Math.round(john.bmi));

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
console.log(
  Math.round(mark.bmi) < Math.round(john.bmi)
  ? `${john.fullName}'s BMI (${Math.round(john.bmi)}) is higher than ${
    mark.fullName
  }'s (${Math.round(mark.bmi)})!`
  : `${mark.fullName}'s BMI (${Math.round(mark.bmi)}) is higher than ${
    john.fullName
  }'s (${Math.round(john.bmi)})!`
  );
  
*/
