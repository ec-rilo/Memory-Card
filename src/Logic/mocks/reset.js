import uniqid from 'uniqid';
// arr in the parameter is placeholder, ideally arr will be definied in gameboard
// as cardsArr
const gameboard = (arr) => {
  let cardsArr = arr;
  let doubleHit = true;

  const reset = () => {
    cardsArr = [];
    doubleHit = false;
  };

  /* Function made for testing purposes */
  const getDoubleHit = () => {
    return doubleHit;
  };

  /* Function made for testing purposes */
  const getCardsArr = () => {
    return cardsArr;
  };

  return { getDoubleHit, getCardsArr, reset, doubleHit };
};

let cardsArr = [];
for (let i = 0; i < 12; ++i) {
  const key = uniqid();
  cardsArr.push({
    key: key,
    placeholder2: 2,
    uniqid: key,
    selected: false,
  });
}
const gbReset = gameboard(cardsArr);
gbReset.reset();

export default gbReset;
