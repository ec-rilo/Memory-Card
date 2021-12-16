const gameboard = (() => {
  let cardsArr = [];
  let doubleHit = false;

  const allSelected = () => {
    let allSelected = true;
    cardsArr.forEach((card) => {
      if (card.selected === false) allSelected = false;
    });
    return allSelected;
  };

  const receiveHit = (id) => {
    cardsArr.forEach((card) => {
      if (card.selected === false && card.uniqid === id) {
        card.selected = true;
      } else if (card.selected === true && card.uniqid === id) {
        doubleHit = true;
      }
    });
  };

  const isDoubleHit = () => {
    if (doubleHit === false) return false;
    return true;
  };

  const updateCardsArr = (arr) => {
    cardsArr = arr;
  };

  const resetHits = () => {
    doubleHit = false;
    cardsArr.forEach((card) => {
      if (card.selected === true) card.selected = false;
    });
  };

  return {
    allSelected,
    updateCardsArr,
    receiveHit,
    isDoubleHit,
    resetHits,
  };
})();

export default gameboard;
