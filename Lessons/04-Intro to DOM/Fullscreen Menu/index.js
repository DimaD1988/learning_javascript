const menu = document.querySelector("button");
const navigation = document.querySelector("nav");
const sections = document.querySelectorAll(".menu div");
const button = document.querySelector("button");
const strokeTop = document.querySelector(".top");
const strokeMiddle = document.querySelector(".middle");
const strokeBottom = document.querySelector(".bottom");

menu.addEventListener("click", () => {
	navigation.classList.toggle("nav-active");
	sections.forEach((i) => {
		i.style.display = "block";
		i.classList.toggle("rotate-active");
		i.classList.toggle("closed");
	});
});

button.addEventListener("click", function () {
	strokeTop.classList.toggle("top-active");
	strokeMiddle.classList.toggle("middle-active");
	strokeBottom.classList.toggle("bottom-active");
});
