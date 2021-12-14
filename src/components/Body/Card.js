import React from 'react';

const Card = (props) => {
  // style the card
  // populate an image within it from a prop passed down to it
  return (
    <div className="card">
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
};

export default Card;
