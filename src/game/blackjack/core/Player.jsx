// Player.js
import React from "react";
import './Style.css'

const Player = ({ cards, points }) => (
  <div className="Player">
    <h2>Player Cards ({points} points):</h2>
    <div className="flex-column">
      {cards.map((card, index) => (
        <div key={index}>
          <img
            className="card-size"
            src={card.image}
            alt={`${card.value} of ${card.suit}`}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Player;
