import scoreboard from './scoreboard';
import gameboard from './gameboard';

const game = (() => {
  let cardsArr = [];
  let playing = false;

  const isPlaying = () => {
    return playing;
  };

  const setCardsArr = (arr) => {
    cardsArr = arr;
  };

  const reset = () => {
    scoreboard.reset();
    gameboard.reset();
    cardsArr = [];
    playing = false;
  };

  const startGame = (arr) => {
    const screenScore = document.querySelector('.score');
    const screenBestScore = document.querySelector('.best-score');

    playing = true;
    cardsArr = arr;
    gameboard.updateCardsArr(arr);

    cardsArr.forEach((card) => {
      const tempCard = document.getElementById(`${card.uniqid}`);
      tempCard.addEventListener('click', () => {
        gameboard.receiveHit(card.uniqid);
        if (gameboard.allSelected()) {
          console.log('you win!');
        } else if (!gameboard.isDoubleHit()) {
          scoreboard.incrementScore();
          screenScore.innerText = scoreboard.getScore();
        } else {
          gameboard.resetHits();
          if (scoreboard.getBestScore() < scoreboard.getScore()) {
            scoreboard.setBestScore(scoreboard.getScore());
            screenBestScore.innerText = scoreboard.getBestScore();
          }
          scoreboard.resetCurrScore();
          screenScore.innerText = scoreboard.getScore();
        }
      });
    });
  };

  return { isPlaying, setCardsArr, reset, startGame };
})();

export default game;
