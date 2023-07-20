'use strict';
/*
console.log('Test start'); //Cynh code
setTimeout(() => console.log('0 sec timer'), 0); // Callback code
Promise.resolve('Resolved promise 1').then(res => console.log(res)); // MicroTask code

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10; i++) {}
  console.log(res);
});
console.log('Test end'); //Cynh code
*/

/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject('You lose');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeut
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));
wait(2)
  .then(() => {
    console.log('I waited 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited 1 second'));

Promise.resolve('You win again').then(x => console.log(x));
*/

// const getPosition = () => {
//   new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(err)
//     );
//   });
// };

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
*/
