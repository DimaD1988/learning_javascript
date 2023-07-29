'use strict';
/*
fetch('https://restcountries.com/v2/name/portugal')
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then(([data]) => {
      console.log(data);
    });
    return fetch('https://restcountries.com/v2/name/france');
  })
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then(([data]) => {
      console.log(data);
    });
    return fetch('https://restcountries.com/v2/name/spain');
  })
  .then(response => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then(([data]) => {
      console.log(data);
    });
  })
  .catch(err => {
    console.log('SOMETHING WENT WRONG WITH FETCH');
    console.log(err);
  });
*/
/*
const checkStatusAndParse = response => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

fetch('https://restcountries.com/v2/name/portugal')
  .then(checkStatusAndParse)
  .then(([data]) => {
    console.log(data);
    return fetch('https://restcountries.com/v2/name/france');
  })
  .then(checkStatusAndParse)
  .then(([data]) => {
    console.log(data);
    return fetch('https://restcountries.com/v2/name/spain');
  })
  .then(checkStatusAndParse)
  .then(([data]) => console.log(data))
  .catch(err => {
    console.log('SOMETHING WENT WRONG WITH FETCH');
    console.log(err);
  });
*/

// Async function always feturn a promise. If the function returns a value, the promise will be be resolved with that value. If the function throws an exeption, the promise will be rejected

/*
const checkStatusAndParse = response => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  return response.json();
};

async function getCountryData() {
  const results = await Promise.all([
    fetch('https://restcountries.com/v2/name/portugal'),
    fetch('https://restcountries.com/v2/name/france'),
    fetch('https://restcountries.com/v2/name/spain'),
  ]);
  results.forEach((_, el) => {
    checkStatusAndParse(results[el]).then(([data]) => console.log(data));
  });
}
getCountryData();
*/
