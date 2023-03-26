"use strict";
const appSettings = {
	photoSource: "github",
	language: "en",
	time: "timeOn",
	date: "dateOn",
	greeting: "greetingOn",
	quote: "quoteOn",
	weather: "weatherOn",
	weatherCity: "Minsk",
	audio: "audioOn",
};
document.getElementById("github").onclick = () => {
	appSettings.photoSource = "github";
};
document.getElementById("unsplash").onclick = () => {
	appSettings.photoSource = "unsplash";
};
document.getElementById("flickr").onclick = () => {
	appSettings.photoSource = "flickr";
};
document.getElementById("en").onclick = () => {
	appSettings.language = "en";
};
document.getElementById("ru").onclick = () => {
	appSettings.language = "ru";
};
document.getElementById("timeOn").onclick = () => {
	appSettings.time = "timeOn";
};
document.getElementById("timeOff").onclick = () => {
	appSettings.time = "timeOff";
};
document.getElementById("dateOn").onclick = () => {
	appSettings.date = "dateOn";
};
document.getElementById("dateOff").onclick = () => {
	appSettings.date = "dateOff";
};
document.getElementById("greetingOn").onclick = () => {
	appSettings.greeting = "greetingOn";
};
document.getElementById("greetingOff").onclick = () => {
	appSettings.greeting = "greetingOff";
};
document.getElementById("quoteOn").onclick = () => {
	appSettings.quote = "quoteOn";
};
document.getElementById("quoteOff").onclick = () => {
	appSettings.quote = "quoteOff";
};
document.getElementById("weatherOn").onclick = () => {
	appSettings.weather = "weatherOn";
};
document.getElementById("weatherOff").onclick = () => {
	appSettings.weather = "weatherOff";
};
document.getElementById("audioOn").onclick = () => {
	appSettings.audio = "audioOn";
};
document.getElementById("audioOff").onclick = () => {
	appSettings.audio = "audioOff";
};
export default appSettings;
