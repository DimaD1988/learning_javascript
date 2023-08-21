"use strict";

// Typing in  input (delay for search - 2sec)
const debounce = (func, delay) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay * 1000);
	};
};
