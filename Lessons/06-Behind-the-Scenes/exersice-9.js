"use strict";
function find(object, path) {
	const pArr = path.split(`.`);
	pArr.unshift(object);
	console.log(object, path, pArr);
	// pathArr.forEach((_, i) => {

	// });
	console.log(`${object.user.name.first}`);
}

let object = {
	user: {
		name: {
			first: "John",
			last: "Snow",
		},
	},
	people: ["John", "Dave", "Lisa"],
	userName: { name: "Dan" },
};

let actual1 = find(object, "user.name.first"); //"John"
// let actual2 = find(object, "people.1"); //'Dave'
// let actual3 = find(object, "user.wallet.money"); //undefined
