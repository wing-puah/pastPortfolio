import React from 'react';
import PortfolioGrid from './portfolioGrid';

const mockData = [
  { img: 'Monty Hall Game App', title: 'Monty Hall Game App', url: 'monty-hall' },
  { img: 'Choose One Game App', title: 'Choose One Game App', url: 'choose-one' },
];

function Home() {
  return (
    <div>
      Welcome to the portfolio page
      <PortfolioGrid tileData={mockData} />
    </div>
  );
}

export default Home;
