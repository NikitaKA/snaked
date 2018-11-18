export default class ScoreBoard {
  static get score() {
    let savedScore = localStorage.getItem('snaked-score') || '[]';
    let parsedScore = null;

    try {
      parsedScore = JSON.parse(savedScore);
    } catch (e) {
      parsedScore = [];
    }

    return parsedScore;
  }

  static checkScore(points) {
    if (!points) return;

    let score = ScoreBoard.score;
    let index = score.length ? -1 : 0;

    score.forEach(({points: p}, i) => {
      if (index < 0) {
        if (points > p) {
          index = i;
        }
      }
    });

    ScoreBoard.addScore(points, index);
  }

  static addScore(points, index) {
    const name = prompt(`Whats your name?`);

    if (!name) return;

    const date = new Date();

    const entry = {
      name, points, date
    };

    let score = ScoreBoard.score;

    if (index < 0) {
      score.push(entry);
    } else {
      score.splice(index, 0, entry);
    }

    if (score.length > 10) {
      score.pop();
    }

    localStorage.setItem('snaked-score', score |> JSON.stringify);
  }
}
