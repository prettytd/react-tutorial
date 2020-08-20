import React from 'react';
import './FlexCard.css';

const FlexCard = ({
  imageUrl = 'https://www.w3schools.com/css/paris.jpg',
  title = 'Title',
  description = 'description',
}) => {
  return (
    <div className="flex-card">
      <div className="flex-card-image">
        <img src={imageUrl} alt="card" />
      </div>

      <div className="flex-card-body">
        <div className="flex-card-title">{title}</div>

        <div className="flex-card-description">{description}</div>

        <div className="flex-card-actions">
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
    </div>
  );
};

export default FlexCard;
