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

  return { allSelected, updateCardsArr, receiveHit, isDoubleHit };
})();

export default gameboard;
