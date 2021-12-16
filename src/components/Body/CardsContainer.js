import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import movieData from './Logic/TMDb';
import shuffle from './Logic/Algorithms/shuffle';
import game from '../../Logic/game';
import MediaQuery, { useMediaQuery } from 'react-responsive';

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

  const isMobile = useMediaQuery({ maxWidth: 750 });
  const isTablet = useMediaQuery({ maxWidth: 1200 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return (
    <section className="cards-container">
      {cards.map((card) => {
        let posterSrc;
        if (isDesktop) posterSrc = card.posterSizes.largeSrc;
        if (isTablet) posterSrc = card.posterSizes.mediumSrc;
        if (isMobile) posterSrc = card.posterSizes.smallSrc;

        return (
          <Card
            shuffleCards={shuffleCards}
            key={card.key}
            src={posterSrc}
            alt={card.alt}
            uniqid={card.uniqid}
          />
        );
      })}
    </section>
  );
};

export default CardsContainer;
