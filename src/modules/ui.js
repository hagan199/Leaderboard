import Score from './score.js';

const req = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/u7kNvsXmXdu1EufOu2CH/scores/';

class UI {
  static displayScores = async () => {
    try {
      const response = await fetch(req);
      const scores = await response.json();
      scores.result.forEach((score) => UI.addScoreToList(score));
    } catch (error) {
      console.error('Error fetching scores:', error);
    }
  }

  static getNewScore = () => {
    const user = document.querySelector('#name').value;
    const score = document.querySelector('#score').value;
    // validate empty form
    if (user !== '' && score !== '') {
      // create a new Score instance
      const newScore = new Score(user, score);

      // add Score to UI
      UI.addScoreToList(newScore);

      // Add data to API
      UI.postData(user, score);

      // clear fields
      UI.clearFields();
    }
  }

  static addScoreToList = (score) => {
    const list = document.querySelector('#score-list');
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerHTML = `${score.user} : ${score.score}`;

    li.appendChild(span);
    list.appendChild(li);
  }

  static postData = async (user, score) => {
    try {
      const response = await fetch(req, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user, score }),
      });
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Error posting data:', error);
    }
  }

  static clearFields = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#score').value = '';
  }

  static refreshScores = () => {
    window.location.reload();
  }

  static deleteScore = async (user, score) => {
    try {
      const response = await fetch(`${req}/${user}/${score}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting score:', error);
    }
  }
}

export default UI;
