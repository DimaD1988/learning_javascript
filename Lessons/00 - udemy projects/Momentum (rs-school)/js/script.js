"use strict";
// IMPORT
import quotesDataEn from "./quotesEn.js";
import quotesDataRu from "./quotesRu.js";
import playList from "./playList.js";
import appSettings from "./appSettings.js";
// VARIABLES
// LANGUAGE and SETTINGS
const gbBtn = document.querySelector(".flag-gb");
const ruBtn = document.querySelector(".flag-ru");
const gearBtn = document.querySelector(".gear");
const pigGameBtn = document.querySelector(".pigGameBtn");
const pigGameClose = document.querySelector(".g-btn--exit");
const closeBtn = document.querySelector(`.closeBtn`);
const set = document.querySelector(`.set`);
const overlay = document.querySelector(`.overlay`);
const tag = document.querySelector(".imageTag");
const setEn = document.querySelectorAll(".setEn");
const setRu = document.querySelectorAll(".setRu");
let language = 0;
// CLOCKS and CALENDAR
const time = document.querySelector(".time");
const calendar = document.querySelector(".date");
// USERNAME
const username = document.querySelector(".name");
const greeting = document.querySelector(".greeting");
// BACKGROUND IMAGES
const body = document.querySelector("body");
const prevBtn = document.querySelector(".slide-prev");
const nextBtn = document.querySelector(".slide-next");
let num = Math.floor(Math.random() * 20) + 1;
// WEATHER
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
// QUOTES
const changeQtBtn = document.querySelector(".change-quote");
const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
// AUDIOPLAYER
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");
const musicList = document.querySelector(".play-list");
const trackName = document.querySelector(".trackName");
const currentTime = document.querySelector(".current-time");
const totalTime = document.querySelector(".total-time");
const volumeOn = document.querySelector(".volume-on");
const volumeOff = document.querySelector(".volume-off");
const volumeRange = document.querySelector(".volume-range-input");
const timelineRange = document.querySelector(".timeline-range-input");
const audio = new Audio();
let playNum = 0;
// PRESET VISIBILITY
const greetVis = document.getElementById("greet");
const playerVis = document.getElementById("musicPlay");
const weatherVis = document.getElementById("weatherMenu");
const timeVis = document.getElementById("showTime");
const dateVis = document.getElementById("showDate");
const quoteVis = document.getElementById("showQuote");
// PIG-GAME
const Game = document.querySelector(".game");
const player0El = document.querySelector(`.g-player--0`);
const player1El = document.querySelector(`.g-player--1`);
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.g-dice`);
const btnNew = document.querySelector(`.g-btn--new`);
const btnRoll = document.querySelector(`.g-btn--roll`);
const btnHold = document.querySelector(`.g-btn--hold`);
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`close`);
let scores, currentScore, activePlayer, playing;
///////////////////////////////////////////////

// FUNCTIONS
// LOCAL STORAGE
const setLocalStorage = () => {
	localStorage.setItem("name", username.value);
	localStorage.setItem("photoSource", appSettings.photoSource);
	localStorage.setItem("language", appSettings.language);
	localStorage.setItem("time", appSettings.time);
	localStorage.setItem("date", appSettings.date);
	localStorage.setItem("greeting", appSettings.greeting);
	localStorage.setItem("quote", appSettings.quote);
	localStorage.setItem("weather", appSettings.weather);
	localStorage.setItem("weatherCity", city.value);
	localStorage.setItem("audio", appSettings.audio);
	localStorage.setItem("tag", tag.value);
};

// LANGUAGE
const currLang = (v) => {
	if (v === 0) {
		language = 0;
		gbBtn.classList.add(`close`);
		ruBtn.classList.remove(`close`);
		tag.placeholder = `Input your tag here`;
		setRu.forEach((el, i) => {
			setRu[i].classList.add(`close`);
			setEn[i].classList.remove(`close`);
		});
	} else {
		language = 1;
		gbBtn.classList.remove(`close`);
		ruBtn.classList.add(`close`);
		tag.placeholder = `Введите сюда свой Тэг`;
		setEn.forEach((el, i) => {
			setEn[i].classList.add(`close`);
			setRu[i].classList.remove(`close`);
		});
	}
	localStorage.getItem("weather") === `weatherOn` && getWeather();
	localStorage.getItem("quote") === `quoteOn` && currQuote();
};
gbBtn.addEventListener(`click`, () => {
	currLang(0);
});
ruBtn.addEventListener(`click`, () => {
	currLang(1);
});

// ONLOAD FROM LOCAL STORAGE and PRESET VISIBILITY
const getLocalStorage = () => {
	localStorage.getItem("language") && localStorage.getItem("language") === "ru"
		? currLang(1)
		: currLang(0);
	appSettings.language = localStorage.getItem("language");
	(localStorage.getItem("greeting") === `greetingOn` ||
		localStorage.getItem("date") === `dateOn` ||
		localStorage.getItem("quote") === `quoteOn` ||
		localStorage.getItem("weather") === `weatherOn`) &&
		(gbBtn.style.visibility = "visible") &&
		(ruBtn.style.visibility = "visible");
	/////////////////////////////////////////////
	localStorage.getItem("name") &&
		(username.value = localStorage.getItem("name"));
	appSettings.name = localStorage.getItem("name");
	/////////////////////////////////////////////
	localStorage.getItem("greeting") === `greetingOn` &&
		(greetVis.style.visibility = "visible");
	appSettings.greeting = localStorage.getItem("greeting");
	/////////////////////////////////////////////
	localStorage.getItem("audio") === `audioOn` &&
		(playerVis.style.visibility = "visible");
	appSettings.audio = localStorage.getItem("audio");
	/////////////////////////////////////////////
	localStorage.getItem("time") === `timeOn` &&
		(timeVis.style.visibility = "visible");
	appSettings.time = localStorage.getItem("time");
	/////////////////////////////////////////////
	localStorage.getItem("date") === `dateOn` &&
		(dateVis.style.visibility = "visible");
	appSettings.date = localStorage.getItem("date");
	/////////////////////////////////////////////
	localStorage.getItem("quote") === `quoteOn` &&
		(quoteVis.style.visibility = "visible");
	appSettings.quote = localStorage.getItem("quote");
	/////////////////////////////////////////////
	localStorage.getItem("weather") === `weatherOn` &&
		(weatherVis.style.visibility = "visible");
	appSettings.weather = localStorage.getItem("weather");
	/////////////////////////////////////////////
	localStorage.getItem("weatherCity") &&
		(city.value = localStorage.getItem("weatherCity"));
	appSettings.weatherCity = localStorage.getItem("weatherCity");
	/////////////////////////////////////////////
	localStorage.getItem("photoSource") &&
		(appSettings.photoSource = localStorage.getItem("photoSource"));
	/////////////////////////////////////////////
	localStorage.getItem("tag") && (tag.value = localStorage.getItem("tag"));
};

// SETTINGS
const openSettings = () => {
	set.classList.remove(`close`);
	overlay.classList.remove(`close`);
};
const closeSettings = () => {
	set.classList.add(`close`);
	overlay.classList.add(`close`);
};
gearBtn.addEventListener(`click`, openSettings);
closeBtn.addEventListener(`click`, closeSettings);
overlay.addEventListener(`click`, closeSettings);

// TIME of DAY
const timeOfDay = {
	night: [`Good night`, `Спокойной ночи`],
	morning: [`Good morning`, `Доброе утро`],
	afternoon: [`Good afternoon`, `Добрый день`],
	evening: [`Good evening`, `Добрый вечер`],
	greeting(message) {
		greeting.textContent = `${message},`;
		username.placeholder = language === 0 ? `[Enter name]` : `[Введите имя]`;
	},
	dayPart(h) {
		h === 0 && this.greeting(this.night[language]);
		h === 1 && this.greeting(this.morning[language]);
		h === 2 && this.greeting(this.afternoon[language]);
		h === 3 && this.greeting(this.evening[language]);
	},
};

// CLOCKS and CALENDAR
const showTime = () => {
	const options = {
		weekday: "long",
		month: "long",
		day: "numeric",
	};
	const lang = language === 0 ? "en-en" : "ru-ru";
	const date = new Date();
	const currentTime = date.toLocaleTimeString("it-IT");
	const currentDate = date.toLocaleDateString(lang, options);
	setTimeout(showTime, 1000);
	time.textContent = currentTime;
	calendar.textContent = currentDate;
	timeOfDay.dayPart(Math.floor(date.getHours() / 6));
};
window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
showTime();

// BACKGROUND IMAGES
const bgImage = {
	currentImg(bi) {
		const img = new Image();
		img.src = bi;
		img.addEventListener("load", () => {
			body.style.backgroundImage = `url('${bi}')`;
		});
	},
	async getLink() {
		try {
			const tags =
				localStorage.getItem("tag") === ""
					? `nature`
					: localStorage.getItem("tag").toLowerCase();
			const unsplash = `https://api.unsplash.com/photos/random?query=${tags}&client_id=9r_PChdY8olz8iIlGh6ftS9VMVqhIida7aAwpbhhUqQ`;
			const flickr = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=52ee9e9291fdda69fd0d3df25f72b4d1&tags=${tags}&extras=url_h&format=json&nojsoncallback=1`;
			const url =
				localStorage.getItem("photoSource") === `flickr` ? flickr : unsplash;
			const res = await fetch(url);
			const data = await res.json();
			localStorage.getItem("photoSource") === `flickr`
				? this.currentImg(
						data.photos.photo[Math.floor(Math.random() * 100)].url_h
				  )
				: this.currentImg(data.urls.regular);
		} catch (err) {
			alert(
				language === 0
					? "Input correct image tag (on english language)`"
					: "Введите корректный тег изображения (на английском языке)"
			);
		}
	},
	slyder(n) {
		n = String(n).padStart(2, "0");
		const currentIndex = Math.floor(new Date().getHours() / 6);
		const partDay = [`night`, `morning`, `afternoon`, `evening`];
		const imageSrc = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${partDay[currentIndex]}/${n}.jpg`;
		this.currentImg(imageSrc);
	},
	res(n) {
		const currTag =
			localStorage.getItem("tag") === ""
				? `nature`
				: localStorage.getItem("tag").toLowerCase();
		localStorage.getItem("photoSource") === `github` && this.slyder(n);
		localStorage.getItem("photoSource") !== `github` && this.getLink();
	},
	prevClick() {
		num > 1 ? num-- : (num = 20);
		bgImage.res(num);
	},
	nextClick() {
		num < 20 ? num++ : (num = 1);
		bgImage.res(num);
	},
};
prevBtn.addEventListener(`click`, () => {
	bgImage.prevClick();
});
nextBtn.addEventListener(`click`, () => {
	bgImage.nextClick();
});
bgImage.nextClick();

// WEATHER
async function getWeather(e) {
	try {
		const landSelect = [`en`, `ru`];
		const langMinsk = language === 0 ? "Minsk" : "Минск";
		let url;
		if (e !== "") {
			url = `https://api.openweathermap.org/data/2.5/weather?q=${
				e || localStorage.getItem("weatherCity") || langMinsk
			}&lang=${
				landSelect[language]
			}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
		} else {
			url = `https://api.openweathermap.org/data/2.5/weather?q=${
				localStorage.getItem("weatherCity") || langMinsk
			}&lang=${
				landSelect[language]
			}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
		}
		const res = await fetch(url);
		const data = await res.json();
		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
		weatherDescription.textContent = data.weather[0].description;
		wind.textContent = `${Math.trunc(data.wind.speed)} m/s`;
		humidity.textContent = `${data.main.humidity} %`;
		city.placeholder = langMinsk;
	} catch (err) {
		alert(language === 0 ? "City not found" : "Город не найден");
	}
}
city.addEventListener(`change`, () => {
	getWeather(city.value);
});

// QUOTES
const currQuote = () => {
	const quotesData = language === 0 ? quotesDataEn : quotesDataRu;
	const randomNum = Math.floor(Math.random() * quotesData.length);
	const { text, author } = quotesData[randomNum];
	quoteText.textContent = text;
	quoteAuthor.textContent = author;
};
changeQtBtn.addEventListener(`click`, () => {
	currQuote();
});
currQuote();

// AUDIOPLAYER
const audioPlayer = {
	playMusic(e) {
		if (e !== `p`) {
			this.timeReset();
			playBtn.classList.add(`close`);
			pauseBtn.classList.remove(`close`);
			typeof e === `string` ? (playNum = Number(e)) : (playNum += e);
			playNum <= -1 && (playNum = playList.length - 1);
			playNum >= playList.length && (playNum = 0);
			audio.src = playList[playNum].src;
			trackName.textContent = playList[playNum].title;
			setInterval(this.update, 500);
			setInterval(() => {
				timelineRange.value = (audio.currentTime / audio.duration) * 100;
				this.update;
			}, 500);
			timelineRange.max = audio.duration;
			audio.play();
			this.style(playNum);
			setInterval(() => {
				Math.floor(audio.currentTime) === Math.floor(audio.duration) &&
					this.playMusic(1);
			}, 500);
		} else {
			playBtn.classList.remove(`close`);
			pauseBtn.classList.add(`close`);
			audio.pause();
		}
	},
	style(n) {
		list.forEach((el, i) => {
			list[i].classList.remove(`now`);
		});
		document.getElementById(`now${n}`).classList.add(`now`);
	},
	volume(v) {
		if (v !== false) {
			audio.volume = volumeRange.value / 100;
			volumeOn.classList.add(`close`);
			volumeOff.classList.remove(`close`);
		} else {
			audio.volume = 0;
			volumeOn.classList.remove(`close`);
			volumeOff.classList.add(`close`);
		}
	},
	timeReset() {
		currentTime.textContent = `00:00 /`;
		totalTime.textContent = `00:00`;
	},
	timeSelect() {
		if (audio.src !== ``) {
			audio.play();
			audio.currentTime = audio.duration * (timelineRange.value / 100);
		}
	},
	update() {
		currentTime.textContent = `${String(
			Math.floor(audio.currentTime / 60)
		).padStart(2, 0)}:${String(Math.trunc(audio.currentTime % 60)).padStart(
			2,
			0
		)} /`;
		totalTime.textContent = `${String(Math.floor(audio.duration / 60)).padStart(
			2,
			0
		)}:${String(Math.trunc(audio.duration % 60)).padStart(2, 0)}`;
	},
};
volumeRange.addEventListener(`change`, () => audioPlayer.volume());
timelineRange.addEventListener(`change`, () => audioPlayer.timeSelect());
playBtn.addEventListener("click", () => audioPlayer.playMusic(0));
playNext.addEventListener("click", () => audioPlayer.playMusic(1));
playPrev.addEventListener("click", () => audioPlayer.playMusic(-1));
pauseBtn.addEventListener("click", () => audioPlayer.playMusic(`p`));
volumeOn.addEventListener("click", () => audioPlayer.volume(true));
volumeOff.addEventListener("click", () => audioPlayer.volume(false));

// PLAY_LIST_GENERATOR
const playListGen = () => {
	musicList.innerHTML = ``;
	playList.forEach((el, i) => {
		const li = `<li class="play-item" id="now${i}">${playList[i].title}</li>`;
		musicList.insertAdjacentHTML(`beforeend`, li);
	});
};
playListGen(playList);

// ACTIVE PLAYLIST
const list = document.querySelectorAll(`li`);
list.forEach((el, i) => {
	list[i].addEventListener(`click`, () => {
		audioPlayer.playMusic(`${i}`);
	});
});

// PIG-GAME
const pigGame = {
	start() {
		scores = [0, 0];
		currentScore = 0;
		activePlayer = 0;
		playing = true;
		current0El.textContent = 0;
		current1El.textContent = 0;
		score0El.textContent = 0;
		score1El.textContent = 0;
		diceEl.classList.add(`close`);
		player0El.classList.remove(`g-player--winner`);
		player1El.classList.remove(`g-player--winner`);
		player0El.classList.add(`g-player--active`);
		player1El.classList.remove(`g-player--active`);
	},
	activePlayerCurent(p) {
		activePlayer === 0
			? (current0El.textContent = p)
			: (current1El.textContent = p);
	},
	switchPlayer() {
		this.activePlayerCurent(0);
		activePlayer = activePlayer === 0 ? 1 : 0;
		currentScore = 0;
		player0El.classList.toggle(`g-player--active`);
		player1El.classList.toggle(`g-player--active`);
	},
	btnRoll() {
		if (playing) {
			const dice = Math.floor(Math.random() * 6) + 1;
			diceEl.classList.remove(`close`);
			diceEl.src = `assets/img/dice-${dice}.png`;
			if (dice !== 1) {
				currentScore += dice;
				this.activePlayerCurent(currentScore);
			} else {
				this.switchPlayer();
			}
		}
	},
	btnHold() {
		if (playing) {
			scores[activePlayer] += currentScore;

			activePlayer === 0
				? (score0El.textContent = scores[activePlayer])
				: (score1El.textContent = scores[activePlayer]);

			if (scores[activePlayer] >= 100) {
				playing = false;
				document
					.querySelector(`.g-player--${activePlayer}`)
					.classList.add(`g-player--winner`);
				document
					.querySelector(`.g-player--${activePlayer}`)
					.classList.remove(`g-player--active`);
			} else {
				this.switchPlayer();
			}
		}
	},
};
btnRoll.addEventListener(`click`, () => {
	pigGame.btnRoll();
});
btnHold.addEventListener(`click`, () => {
	pigGame.btnHold();
});
btnNew.addEventListener(`click`, () => {
	pigGame.start();
});
pigGameClose.addEventListener(`click`, () => {
	Game.classList.add(`close`);
});
pigGameBtn.addEventListener(`click`, () => {
	Game.classList.remove(`close`);
	pigGame.start();
});
