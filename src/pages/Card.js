import React from 'react';
import FlexCard from '../components/Card/FlexCard';
import GridCard from '../components/Card/GridCard';

const CardPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <FlexCard />
      <GridCard />
    </div>
  );
};

export default CardPage;
