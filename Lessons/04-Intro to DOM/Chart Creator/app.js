'use strict';
// IMPORT
import warriorsGames from './data.js';
// VARIABLES
const gsSection = document.getElementById(`gs`);
const hrSection = document.getElementById(`hr`);
// FUNCTIONS
const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement(`ul`);

  for (let game of games) {
    const gameLi = document.createElement(`li`);
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? `win` : `loss`);
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};
const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  const scoreLine =
    aPoints > hPoints
      ? `<b>${aPoints}</b>-${hPoints}`
      : `${aPoints}-<b>${hPoints}</b>`;
  return `${teamNames} ${scoreLine}`;
};

const gsChart = makeChart(warriorsGames, `Golden State`);
const hrChart = makeChart(warriorsGames, `Houston`);
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);
