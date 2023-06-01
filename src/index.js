import './styles/main.css';
import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayScores);

document.querySelector('#add-form').addEventListener('submit', (e) => {
  // prevent default submits
  e.preventDefault();

  UI.getNewScore();
});