import './styles/main.css';
import { displayScores, getNewScore, deleteScore, refreshScores } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', displayScores);

document.querySelector('#add-form').addEventListener('submit', handleFormSubmit);
document.querySelector('#refresh').addEventListener('click', handleRefresh);

function handleFormSubmit(e) {
  e.preventDefault();

  const playerName = document.querySelector('#name').value;
  const playerScore = document.querySelector('#score').value;

  getNewScore(playerName, playerScore);
  deleteScore('Emmanuel hagan', 42);
  deleteScore('Light', 67);
  deleteScore('All', 20);
}

function handleRefresh() {
  refreshScores();
}
