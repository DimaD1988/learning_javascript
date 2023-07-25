'use strict';

/*
const getJSON = async function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// Promise Race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request too long!'));
    }, sec * 1000);
  });
};

// Promise race Example 2
Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(1)])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err.message));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
// ]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
]).then(res => console.log(res));
*/
