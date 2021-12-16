import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import movieData from './Logic/TMDb';
import shuffle from './Logic/Algorithms/shuffle';
import game from '../../Logic/game';

const CardsContainer = () => {
  const [cards, setCards] = useState([]);

  const createCard = async (index) => {
    const obj = await movieData.getPosterData(index);
    obj.selected = false;
    return obj;
  };

  const addCards = async () => {
    const tempArr = [];
    for (let i = 0; i < 12; ++i) {
      const obj = await createCard(i);
      tempArr.push(obj);
    }
    setCards(tempArr);
  };
  useEffect(() => {
    if (cards.length < 12) {
      addCards();
    }
  });

  const shuffleCards = () => {
    const tempArr = shuffle(cards);
    setCards([...tempArr]);
    return;
  };

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      if (!game.isPlaying()) game.startGame(cards);
    }
  });

  return (
    <section className="cards-container">
      {cards.map((card) => {
        return (
          <Card
            shuffleCards={shuffleCards}
            key={card.key}
            src={card.src}
            alt={card.alt}
            uniqid={card.uniqid}
          />
        );
      })}
    </section>
  );
};

export default CardsContainer;
