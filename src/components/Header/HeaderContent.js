import React from 'react';
import Scoreboard from './Scoreboard';

const HeaderContent = () => {
  return (
    <header className="header-container">
      <h1 className="logo-container">
        <span className="full-text">MOVIE MEMORY</span>
        <span className="short-text">MM</span>
      </h1>
      <Scoreboard />
    </header>
  );
};

export default HeaderContent;
