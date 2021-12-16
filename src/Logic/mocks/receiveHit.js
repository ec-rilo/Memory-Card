import uniqid from 'uniqid';
// arr in the parameter is placeholder, ideally arr will be definied in gameboard
// as cardsArr
const gameboard = (arr) => {
  let cardsArr = arr;
  let doubleHit = false;

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

  /* Function made for testing purposes */
  const getCardsArr = () => {
    return cardsArr;
  };

  return { receiveHit, isDoubleHit, getCardsArr };
};

let cardsArr = [];

const key1 = uniqid;
for (let i = 0; i < 12; ++i) {
  if (i === 5) {
    cardsArr.push({
      key: key1,
      placeholder2: 2,
      uniqid: key1,
      selected: false,
    });
  } else {
    const key = uniqid();
    cardsArr.push({
      key: key,
      placeholder2: 2,
      uniqid: key,
      selected: false,
    });
  }
}
const gbreceiveHit = gameboard(cardsArr);
gbreceiveHit.receiveHit(key1);

cardsArr = [];
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
      selected: false,
    });
  }
}
const gbreceiveHit2 = gameboard(cardsArr);
gbreceiveHit2.receiveHit(key2);
gbreceiveHit2.receiveHit(key2);

export { gbreceiveHit, gbreceiveHit2 };
