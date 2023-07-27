'use strict';

// Nested callbacks
/*
const consoleLog = (msg, delay, callback) => {
  setTimeout(() => {
    console.log(msg);
    if (callback) callback();
  }, delay);
};

consoleLog('One second', 1000, () => {
  consoleLog('Two seconds', 1000, () => {
    consoleLog('Three seconds', 1000, () => {
      consoleLog('Four seconds', 1000, () => {
        consoleLog('Five seconds, finish!', 1000);
      });
    });
  });
});
*/
/*
A Promise is an object representing the eventual completion or failure of an asynchronous operation

A Promise is a returned object to which you attach callbacks, instead of passing callbacks into a function
*/
/*
const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject({ status: 404 });
      } else {
        const pages = {
          '/users': [
            { id: 1, username: 'Bilbo' },
            { id: 2, username: 'Esmeralda' },
          ],
          '/about': 'This is the about page!',
        };
        const data = pages[url];
        resolve({ status: 200, data });
      }
    }, 1000);
  });
};

fakeRequest('/about')
.then(response => {
  console.log('Status code', response.status);
  console.log('Data', response.data);
  console.log('Request Worked!');
})
  .catch(err => {
    console.log(err.status);
    console.log('Request rejected');
  });
  */

/*
const consoleLog = (msg, delay) => {
  return new Promise(resolve => {
    if (resolve) {
      setTimeout(() => {
        console.log(msg);
      }, delay);
    }
  });
};

consoleLog('One second', 1000);
*/
