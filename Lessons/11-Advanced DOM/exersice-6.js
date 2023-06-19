'use strict';
// /*
// const rebind = function (rootContext) {
//   return (childContext = rootContext) => this.call(childContext, childContext);
// };
// const rebind = inside => {
//   return (outside = inside) => this.call(outside, outside);
// };

// */
// debugger;
/*
function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
    console.log(callbacks);
  }

  console.log(callbacks, `e`);
  return callbacks;
}
console.log(callbacks);
const d = createFunctions(5);
createFunctions(3);
console.log(d);
callbacks[0]();

Array.prototype.map = function (callback, context) {
  const newArr = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) newArr[i] = callback.call(context, this[i], i, this);
  }
  return newArr;
};

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



Array.prototype.map = function (func, value) {
  const newArr = new Array(this.length);
  this.forEach(
    (_, i) => i in this && (newArr[i] = func.call(value, this[i], i, this))
  );
  return newArr;
};

Array.prototype.filter = function (func, callback) {
  const acc = [];
  this.forEach((_, i) => {
    i in this && func.call(callback, this[i], i, this) && acc.push(this[i]);
  });
  return acc;
};
*/

/*
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

// LINK WITH FORMULA https://www.studysmarter.co.uk/explanations/chemistry/nuclear-chemistry/carbon-dating/

function dateSample(sampleActivity) {
	// sampleActivity is string
	if (typeof sampleActivity !== `string`) return false;
	// sampleActivity HAS  number value
	if (isNaN(Number(sampleActivity))) return false;
	// sampleActivity > 0
	if (+sampleActivity <= 0) return false;

	// N(t)=N(0e)**-kt(1/2)
	// -kt(1/2) = -(-0.693) / 5730years
	const valueNOe = Math.log(MODERN_ACTIVITY / Number(sampleActivity));
	const kt = 0.693 / HALF_LIFE_PERIOD;
	return Math.ceil(valueNOe / kt);
}

function countCats(matrix) {
	let acc = 0;
	const arr = matrix.slice().flat();
	arr.forEach((_, i) => {
		arr[i] === "^^" && acc++;
	});
	return acc;
}

function createDreamTeam(members, b) {
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      typeof members[i] !== `string` && members.splice(i, 1);
      typeof members[i] === `object` && members.splice(i, 1);
      typeof members[i] === `undefined` && members.splice(i, 1);
      typeof members[i] === `number` && members.splice(i, 1);
      typeof members[i] === `number` && members.splice(i, 1);
      typeof members[i] === `number` && members.splice(i, 1);
      typeof members[i] === `number` && members.splice(i, 1);
      typeof members[i] === `number` && members.splice(i, 1);
      typeof members[i] === `string` &&
      (members[i] = members[i].replaceAll(` `, ``).slice(0, 1).toUpperCase());
    }
    console.log(members.sort().join(''), b);
  }
  console.log(members, b);
}
*/
