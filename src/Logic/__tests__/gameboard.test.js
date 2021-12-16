import { gbAllSelected, gbOneNotSelected } from '../mocks/allSelected';
import { gbreceiveHit, gbreceiveHit2 } from '../mocks/receiveHit';
import gbResetHits from '../mocks/resetHits';

describe('gameboard() tests', () => {
  test('function allSelected() returns true if all items in cardsArr are selected', () => {
    expect(gbAllSelected.allSelected()).toBeTruthy();
  });

  test("function allSelected() returns false if one item's `selected` prop is false in cardsArr", () => {
    expect(gbOneNotSelected.allSelected()).toBeFalsy();
  });

  test('function receiveHit() can mark an obj in the cardsArr as hit: true', () => {
    expect(gbreceiveHit.getCardsArr()[5].selected).toBeTruthy();
    for (let i = 0; i < 5; ++i) {
      expect(gbreceiveHit.getCardsArr()[i].selected).toBeFalsy();
    }
    for (let i = 6; i < 12; ++i) {
      expect(gbreceiveHit.getCardsArr()[i].selected).toBeFalsy();
    }
  });

  test('function isDoubleHit() returns false when a card calls receiveHit() once', () => {
    expect(gbreceiveHit.isDoubleHit()).toBeFalsy();
  });

  test('function isDoubleHit() returns true when a card calls receiveHit() twice', () => {
    expect(gbreceiveHit2.isDoubleHit()).toBeTruthy();
  });

  test('function resetHits() resets doubleHit and all `selected` properties on cards in cardsArr to false', () => {
    gbResetHits.resetHits();
    expect(gbResetHits.isDoubleHit()).toBeFalsy();

    for (let i = 0; i < 12; ++i) {
      expect(gbResetHits.getCardsArr()[i]).toBeTruthy();
    }
  });
});
