const h1 = document.querySelector("article h1");
const h2 = document.querySelector("article h2");
const btn = document.querySelector("article button");
const boxes = document.querySelectorAll("main div");

btn.addEventListener("mouseover", () => {
	h1.classList.add("heading-active");
	h2.classList.add("heading-active");
	btn.classList.add("btn-active");

	boxes.forEach((j) => {
		j.style.cssText = `transform: scale(0);`;
		j.classList.add("scale-up");
		j.classList.remove("scale-down");
	});
});

btn.addEventListener("mouseout", () => {
	h1.classList.remove("heading-active");
	h2.classList.remove("heading-active");
	btn.classList.remove("btn-active");

	boxes.forEach((j) => {
		j.style.cssText = `transform: scale(1);`;
		j.classList.add("scale-down");
		j.classList.remove("scale-up");
	});
});
