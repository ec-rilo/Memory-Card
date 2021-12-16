const gameboard = (() => {
  let cardsArr = [];

  const allSelected = () => {
    let allSelected = true;
    cardsArr.forEach((card) => {
      if (card.selected === false) allSelected = false;
    });
    return allSelected;
  };

  const updateCardsArr = (arr) => {
    cardsArr = arr;
  };

  return { allSelected, updateCardsArr };
})();

export default gameboard;
