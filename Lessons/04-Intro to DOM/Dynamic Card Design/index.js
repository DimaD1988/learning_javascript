const svg = document.querySelector(".background-svg");
const strokes = document.querySelectorAll(".background-stroke");
const card1 = document.querySelector(".card:nth-of-type(1)");
const card2 = document.querySelector(".card:nth-of-type(2)");
const card3 = document.querySelector(".card:nth-of-type(3)");

card1.addEventListener("mouseover", function () {
	svg.style.cssText = "fill:#0000ff; transition: all 0.5s ease;";
	strokes.forEach(function (j) {
		j.style.cssText = "stroke:#0000ff; transition: all 0.5s ease;";
	});
});

card2.addEventListener("mouseover", function () {
	svg.style.cssText = "fill:#ff0000; transition: all 0.5s ease;";
	strokes.forEach(function (j) {
		j.style.cssText = "stroke:#ff0000; transition: all 0.5s ease;";
	});
});

card3.addEventListener("mouseover", function () {
	svg.style.cssText = "fill:#ffff00; transition: all 0.5s ease;";
	strokes.forEach(function (j) {
		j.style.cssText = "stroke:#ffff00; transition: all 0.5s ease;";
	});
});
