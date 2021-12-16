import React from 'react';

const Card = (props) => {
  const { src, alt, shuffleCards, uniqid } = props;
  return (
    <div className="card">
      <img src={src} alt={alt} onClick={() => shuffleCards()} id={uniqid}></img>
    </div>
  );
};

export default Card;
