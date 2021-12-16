import { gbAllSelected, gbOneNotSelected } from '../mocks/allSelected';

describe('gameboard() tests', () => {
  test('function allSelected() returns true if all items in cardsArr are selected', () => {
    expect(gbAllSelected.allSelected()).toBeTruthy();
  });

  test("function allSelected() returns false if one item's `selected` prop is false in cardsArr", () => {
    expect(gbOneNotSelected.allSelected()).toBeFalsy();
  });
});
