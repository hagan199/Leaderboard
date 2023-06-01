class Store {
  static getStoredScores() {
    try {
      const scores = localStorage.getItem('scores');
      return scores ? JSON.parse(scores) : [];
    } catch (error) {
      console.error('Error getting scores from local storage:', error);
      return [];
    }
  }

  static addScoreToStorage(score) {
    try {
      const scores = Store.getStoredScores();
      score.index = scores.length + 1;
      scores.push(score);
      localStorage.setItem('scores', JSON.stringify(scores));
    } catch (error) {
      console.error('Error adding score to local storage:', error);
    }
  }
}

export default Store;
