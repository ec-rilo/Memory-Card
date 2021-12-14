import React from 'react';

const HeaderContent = () => {
  return (
    <header className="header-container">
      <h1 className="logo-container">
        <span className="full-text">MOVIE MEMORY</span>
        <span className="short-text">MM</span>
      </h1>
      <div className="score-container">
        <p>SCORE: 0</p>
        <p>BEST: 0</p>
      </div>
    </header>
  );
};

export default HeaderContent;
