import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} 
           src={props.image} />
    </div>
    <div className="content" onClick={() => props.handleClick(props.id)} >
        <h2>
          <strong>Name:</strong> {props.name}
        </h2>
    </div>
  </div>
);

export default GameCard;