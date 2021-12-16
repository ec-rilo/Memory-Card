import React from 'react';

const Card = (props) => {
  const { src, alt, shuffleCards, uniqid } = props;
  // style the card
  // populate an image within it from a prop passed down to it
  return (
    <div className="card">
      <img src={src} alt={alt} onClick={() => shuffleCards()} id={uniqid}></img>
    </div>
  );
};

export default Card;
