import scoreboard from './scoreboard';
import gameboard from './gameboard';
import { renderToStaticMarkup } from 'react-dom/server';
import WinPopup from '../components/Body/WinPopup';

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
    const screenScore = document.querySelector('.score');
    const screenBestScore = document.querySelector('.best-score');

    scoreboard.reset();
    gameboard.reset();
    screenScore.innerText = scoreboard.getScore();
    screenBestScore.innerText = scoreboard.getBestScore();
  };

  const showWin = () => {
    const winpopup = document.querySelector('.dark-bg');
    winpopup.style.display = 'block';
    const playAgain = document.querySelector('.play-again');

    playAgain.addEventListener(
      'click',
      () => {
        reset();
      },
      { once: true }
    );
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
