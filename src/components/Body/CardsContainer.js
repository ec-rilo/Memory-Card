import React, { useState, useEffect } from 'react';
import Card from './Card';
import movieData from './Logic/TMDb';

const CardsContainer = () => {
  const [cards, setCards] = useState([]);

  const addCards = async () => {
    const tempArr = [];
    for (let i = 0; i < 12; ++i) {
      const obj = await movieData.getPosterData(i);
      tempArr.push(obj);
    }
    setCards(tempArr);
  };
  useEffect(() => {
    if (cards.length < 12) {
      addCards();
    }
  });

  return (
    <section className="cards-container">
      {cards.map((card) => {
        return <Card key={card.key} src={card.src} alt={card.alt} />;
      })}
    </section>
  );
};

export default CardsContainer;
