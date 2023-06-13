'use strict';

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(`.section`);
console.log(allSections);

document.getElementById(`section--1`);
const allBtns = document.getElementsByTagName(`button`);
console.log(allBtns);

console.log(document.getElementsByClassName(`btn`));

// Creating and inserting elements
// .insertAdjacentHTML
const msg = document.createElement(`div`);
msg.classList.add(`cookie-message`);
// msg.textContent = `We use cookies for improved functionality and analytics.`;
msg.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(msg.cloneNode(true)); //Front
// header.append(msg); //Bottom

// header.before(msg);
header.after(msg);

// Delete elements
document.querySelector(`.btn--close-cookie`).addEventListener(`click`, () => {
  msg.remove();
});

// Styles
msg.style.backgroundColor = `#37383d`;
msg.style.width = `120%`;
console.log(msg.style.backgroundColor);

console.log(getComputedStyle(msg).color);

msg.style = Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.setAttribute(`company`, `Bankist`);

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute(`href`));

// Data attributes
// <img data-version-number="3.0"/>  //HTML
console.log(logo.dataset.versionNumber); // 3.0 (from HTML)

// Classes
logo.classList.add(`a`);
logo.classList.remove(`a`);
logo.classList.toggle(`a`);
logo.classList.contains(`a`);
*/
