'use strict';
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// console.log(dogs);
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const ownersEatTooMuch = [];
const ownersEatingAnOKAY = [];
const ownersEatTooLittle = [];
dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
  if (dog.owners.includes(`Sarah`)) {
    dog.curFood < dog.recFood * 0.9 &&
    console.log(`Sarah's dog eating too little`);
    dog.curFood > dog.recFood * 1.1 &&
    console.log(`Sarah's dog eating too much`);
  }
  dog.curFood < dog.recFood * 0.9 && ownersEatTooLittle.push(dog.owners);
  dog.curFood > dog.recFood * 1.1 && ownersEatTooMuch.push(dog.owners);
  dog.curFood >= dog.recFood * 0.9 &&
  dog.curFood <= dog.recFood * 1.1 &&
  ownersEatingAnOKAY.push(dog.owners);
});

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(
  `${ownersEatTooLittle.join(
    ' and '
    )} dogs eat too little and ${ownersEatTooMuch.join(
      ' and '
      )} dogs eat too much`
      );
      
      // 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
      console.log(dogs.some(dog => dog.curFood === dog.recFood));
      // 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
      console.log(
        dogs.some(
    dog => dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1
  )
);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

*/
