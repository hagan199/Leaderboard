import Score from './score.js';

const SCORES_API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u7kNvsXmXdu1EufOu2CH/scores/';

class UI {
  static displayScores = async () => {
    const scores = await (await fetch(SCORES_API_URL)).json();
    scores.result.forEach((score) => UI.addScoreToList(score));
  };

  static getNewScore = () => {
    const user = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;

    // Validate empty form
    if (user !== '' && score !== '') {
      const newScore = new Score(user, score);

      // Add Score to UI
      UI.addScoreToList(newScore);

      // Add data to API
      UI.postData(user, score);

      // Clear fields
      UI.clearFields();
    }
  };

  static addScoreToList = (score) => {
    const list = document.querySelector('#score-list');
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerHTML = `${score.user} : ${score.score}`;

    li.appendChild(span);
    list.appendChild(li);
  };

  static postData = async (user, score) => {
    const res = await fetch(SCORES_API_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ user, score }),
    });

    const data = await res.json();
    return data.result;
  };

  static clearFields = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  };

  static refreshScores = async () => {
    window.location.reload();
  };

  static deleteScore = async (user, score) => {
    const res = await fetch(`${SCORES_API_URL}/${user}/${score}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    return data;
  };
}

export default UI;
