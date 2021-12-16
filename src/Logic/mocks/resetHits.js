import uniqid from 'uniqid';
// arr in the parameter is placeholder, ideally arr will be definied in gameboard
// as cardsArr
const gameboard = (arr) => {
  let cardsArr = arr;
  let doubleHit = true;

  const resetHits = () => {
    doubleHit = false;
    cardsArr.forEach((card) => {
      if (card.selected === true) card.selected = false;
    });
  };

  /* Function made for testing purposes */
  const getCardsArr = () => {
    return cardsArr;
  };

  const isDoubleHit = () => {
    if (doubleHit === false) return false;
    return true;
  };

  return { resetHits, getCardsArr, isDoubleHit };
};

let cardsArr = [];
const key2 = uniqid;
for (let i = 0; i < 12; ++i) {
  if (i === 10) {
    cardsArr.push({
      key: key2,
      placeholder2: 2,
      uniqid: key2,
      selected: false,
    });
  } else {
    const key = uniqid();
    cardsArr.push({
      key: key,
      placeholder2: 2,
      uniqid: key,
      selected: true,
    });
  }
}
const gbResetHits = gameboard(cardsArr);

export default gbResetHits;
