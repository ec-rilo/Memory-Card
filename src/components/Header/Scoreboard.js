import React from 'react';

const Scoreboard = (props) => {
  return (
    <div className="score-container">
      <p>
        SCORE: <span className="score">0</span>
      </p>
      <p>
        BEST: <span className="best-score">0</span>
      </p>
    </div>
  );
};

export default Scoreboard;
