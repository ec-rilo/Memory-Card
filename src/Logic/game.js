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

  return { isPlaying, setCardsArr, reset };
})();

export default game;
