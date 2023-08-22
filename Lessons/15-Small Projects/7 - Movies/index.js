"use strict";
const autoCopmleteConfig = {
	renderOption(movie) {
		const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
		return `
		<img src="${imgSrc}" alt="${movie.Title}"/>
		${movie.Title} (${movie.Year})
		`;
	},
	inputValue(movie) {
		return movie.Title;
	},
	async fetchData(searchTerm) {
		const response = await axios.get("http://www.omdbapi.com/", {
			params: {
				apikey: "f64a0049",
				s: searchTerm,
			},
		});
		// If not found movie by name or else
		if (response.data.Error) return [];
		return response.data.Search;
	},
};

createAutoComplete({
	...autoCopmleteConfig,
	root: document.querySelector("#left-autocomplete"),
	onOptionSelect(movie) {
		document.querySelector(".tutorial").classList.add("is-hidden");
		onMovieSelect(movie, document.querySelector("#left-summary"), "left");
	},
});

createAutoComplete({
	...autoCopmleteConfig,
	root: document.querySelector("#right-autocomplete"),
	onOptionSelect(movie) {
		document.querySelector(".tutorial").classList.add("is-hidden");
		onMovieSelect(movie, document.querySelector("#right-summary"), "right");
	},
});

let leftMovie, rightMovie;
const onMovieSelect = async (movie, summaryEl, side) => {
	const response = await axios.get("http://www.omdbapi.com/", {
		params: {
			apikey: "f64a0049",
			i: movie.imdbID,
		},
	});
	summaryEl.innerHTML = movieTemplate(response.data);

	if (side === "left") leftMovie = response.data;
	else rightMovie = response.data;

	if (leftMovie && rightMovie) runCoparison();
};

const runCoparison = () => {
	const leftSideStats = document.querySelectorAll(
		"#left-summary .notification"
	);
	const rightSideStats = document.querySelectorAll(
		"#right-summary .notification"
	);

	leftSideStats.forEach((leftStat, i) => {
		const rightStat = rightSideStats[i];

		const leftsideValue = parseInt(leftStat.dataset.value);
		const rightsideValue = parseInt(rightStat.dataset.value);

		if (leftsideValue > rightsideValue) {
			leftStat.classList.remove("isPrimary");
			leftStat.classList.add("is-warning");
		} else {
			rightStat.classList.remove("isPrimary");
			rightStat.classList.add("is-warning");
		}
	});
};

const movieTemplate = (movieDetail) => {
	const dollars = parseInt(
		movieDetail.BoxOffice.replace(/\$/g, "").replace(/,/g, "")
	);
	const metascore = parseInt(movieDetail.Metascore);
	const imdbRAting = parseFloat(movieDetail.imdbRating);
	const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ""));

	const awards = movieDetail.Awards.split(" ").reduce((prev, word) => {
		const value = parseInt(word);
		return !isNaN(value) ? (prev += value) : prev;
	}, 0);

	return `
	<article class="media">
		<figure class="media-left">
			<p class="image">
				<img src="${movieDetail.Poster}"
			</p>
		</figure>
		<div class="media-content">
			<h1>${movieDetail.Title}</h1>
			<h4>${movieDetail.Genre}</h4>
			<p>${movieDetail.Plot}</p>
		</div>
	</article>
	<article data-value=${awards} class="notification is-primary">
		<p class="title">${movieDetail.Awards}</p>
		<p class="subtitle">Awards</p>
	</article>
	<article data-value=${dollars} class="notification is-primary">
		<p class="title">${movieDetail.BoxOffice}</p>
		<p class="subtitle">Box Office</p>
	</article>
	<article data-value=${metascore} class="notification is-primary">
		<p class="title">${movieDetail.Metascore}</p>
		<p class="subtitle">Metascore</p>
	</article>
	<article data-value=${imdbRAting} class="notification is-primary">
		<p class="title">${movieDetail.imdbRating}</p>
		<p class="subtitle">IMDB Rating</p>
	</article>
	<article data-value=${imdbVotes} class="notification is-primary">
		<p class="title">${movieDetail.imdbVotes}</p>
		<p class="subtitle">IMDB Votes</p>
	</article>
	`;
};
