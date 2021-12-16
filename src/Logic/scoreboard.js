const scoreboard = (() => {
  let currScore = 0;

  const incrementScore = () => {
    currScore += 1;
  };

  const getScore = () => {
    return currScore;
  };

  const resetCurrScore = () => {
    currScore = 0;
  };

  let bestScore = 0;

  const getBestScore = () => {
    return bestScore;
  };

  const setBestScore = () => {
    bestScore = currScore;
  };

  const reset = () => {
    currScore = 0;
    bestScore = 0;
  };

  return {
    incrementScore,
    getScore,
    resetCurrScore,
    setBestScore,
    reset,
    getBestScore,
  };
})();

export default scoreboard;
