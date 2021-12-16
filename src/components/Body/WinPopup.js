import React from 'react';
import playicon from '../../images/icons/play-icon.png';

const WinPopup = () => {
  return (
    <div className="dark-bg">
      <div className="win-popup">
        <div className="logo-container">
          <p>
            <span className="short-text">MM</span>
            <span className="full-text">Movie Memory</span>
          </p>
        </div>
        <div className="win-content">
          <p>You Win!</p>
          <p>100% Match</p>
          <div className="play-again">
            <div>
              <img className="small-icon" src={playicon} alt="play-icon" />
              <p>Play Again</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinPopup;
