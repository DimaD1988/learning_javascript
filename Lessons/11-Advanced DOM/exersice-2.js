'use strict';

/*
// SMOOTH SCROLLING
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);

  console.log(
    `heigth/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });
  section1.scrollIntoView({ behavior: `smooth` });
});

// ONCE eventListener
const alertH1 = e => {
  alert(`yes`);
  console.log(e);
  h1.removeEventListener(`mouseenter`, alertH1);
};

const h1 = document.querySelector(`h1`);
h1.addEventListener(`mouseenter`, alertH1);


*/
