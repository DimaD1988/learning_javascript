'use strict';
/*
// Page Navigation
navLink.forEach(function (el) {
  el.addEventListener(`click`, function (e) {
    e.preventDefault();
    const id = this.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// 1.Add event listener to common parent element
// 2.Determine what element originated the event
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  // Match strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// PARENTS / CHILDRENS / SIBLINGS
const h1 = document.querySelector(`h1`);
// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(0.5)`;
});
*/
