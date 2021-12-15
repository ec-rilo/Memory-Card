/*
 * This is the modern version of the Fisher-Yates Shuffle introduced by Richard Durstenfeld.
 *
 * For more information please visit the link below
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 *
 */
const shuffle = (arr) => {
  const tempArr = arr;
  let tempNum1;
  let tempNum2;
  for (let i = tempArr.length - 1; i > 0; --i) {
    tempNum1 = Math.floor(Math.random() * (i + 1));
    tempNum2 = tempArr[i];
    tempArr[i] = tempArr[tempNum1];
    tempArr[tempNum1] = tempNum2;
  }
  return tempArr;
};

export default shuffle;
