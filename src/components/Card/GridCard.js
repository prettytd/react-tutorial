import React from 'react';
import './GridCard.css';

const GridCard = ({
  imageUrl = 'https://www.w3schools.com/css/paris.jpg',
  title = 'Title',
  description = 'description',
}) => {
  return (
    <div className="grid-card">
      <div className="grid-card-image">
        <img src={imageUrl} alt="card" />
      </div>

      <div className="grid-card-title">{title}</div>

      <div className="grid-card-description">{description}</div>

      <div className="grid-card-actions">
        <p>Action</p>
        <div className="buttons">
          <button
            onClick={() => {
              console.log('clicked');
            }}
          >
            action
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
