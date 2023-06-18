'use strict';
/*
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/
/*
// document.addEventListener(`DOMContentLoaded`, function (e) {
//   console.log(`HTML parsed and DOM tree built!`, e);
// });
// window.addEventListener(`load`, function (e) {
//   console.log(`Page fully loaded`, e);
// });
// window.addEventListener(`beforeunload`, function (e) {
//   e.preventDefault();
//   console.log(`yes2`, e);
//   e.returnValue = ``;
// });
 */
/*
function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (v) {
      secret = v;
    },
  };
}
// console.log(createSecretHolder(5));
createSecretHolder(5);
// const obj = createSecretHolder(5);
// console.log(obj.getSecret);
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret()
const object = {
  user: {
    name: {
      first: 'John',
      last: 'Snow',
    },
  },
};
let path = 'user.name.first';
function find(object, path) {
  return path.split('.').reduce(function (acc, pathName) {
    return acc && acc.hasOwnProperty(pathName) ? acc[pathName] : undefined;
  }, object);
}
find(object, path);

// function find(object, path) {
// describe('#find', function () {
//   let object = {
//     user: {
//       name: {
//         first: 'John',
//         last: 'Snow',
//       },
//     },
//   };
//   it('should find the first name', function () {
//     let path = 'user.name.first';
//     let actual = find(object, path);
//     let expected = 'John';
//     Test.assertEquals(actual, expected);
//   });
// });
*/
/*
debugger;
const a = 10;
let b = 5;
console.log(a + b);
a++;
b++;
console.log(a + b);
*/
