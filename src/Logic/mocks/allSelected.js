// arr in the parameter is placeholder, ideally arr will be definied in gameboard
// as cardsArr
const gameboard = (arr) => {
  let cardsArr = arr;

  const allSelected = () => {
    let allSelected = true;
    cardsArr.forEach((card) => {
      if (card.selected === false) allSelected = false;
    });
    return allSelected;
  };

  return { allSelected };
};

let cardsArr = [];
for (let i = 0; i < 12; ++i) {
  cardsArr.push({
    placeholder1: 1,
    placeholder2: 2,
    placeholder3: 3,
    selected: true,
  });
}
const gbAllSelected = gameboard(cardsArr);

cardsArr = [];
for (let i = 0; i < 12; ++i) {
  if (i === 5) {
    cardsArr.push({
      placeholder1: 1,
      placeholder2: 2,
      placeholder3: 3,
      selected: false,
    });
  } else {
    cardsArr.push({
      placeholder1: 1,
      placeholder2: 2,
      placeholder3: 3,
      selected: true,
    });
  }
}
const gbOneNotSelected = gameboard(cardsArr);

export { gbAllSelected, gbOneNotSelected };
