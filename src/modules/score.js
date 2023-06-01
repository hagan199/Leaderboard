class Score {
  constructor(name, score) {
    this._name = name;
    this._score = score;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get score() {
    return this._score;
  }

  set score(score) {
    this._score = score;
  }

  // Example of a static method
  static calculateAverage(scores) {
    if (scores.length === 0) {
      return 0;
    }

    const totalScore = scores.reduce((sum, score) => sum + score.score, 0);
    return totalScore / scores.length;
  }
}

export default Score;
