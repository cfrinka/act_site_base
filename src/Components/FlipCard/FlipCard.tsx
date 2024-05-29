import React, { useState } from "react";
import "./FlipCard.css";

interface FlipCardProps {
  photo: string;
  name: string;
  role: string;
  description: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  photo,
  name,
  role,
  description,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={photo} alt={name} className="card-photo" />
          <h2 className="card-name">{name}</h2>
          <p className="card-role">{role}</p>
        </div>
        <div className="card-back">
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
