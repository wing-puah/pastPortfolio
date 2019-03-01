import React from 'react';
import PortfolioGrid from './portfolioGrid';

const mockData = [
  { img: 'monty-hall.jpg', title: 'Monty Hall Game App', url: 'monty-hall' },
  { img: 'choose-one/choose-1.jpg', title: 'Choose One Game App', url: 'choose-one' },
];

function Home() {
  return (
    <div>
      <h1 className="mb-4 text-center">React and website portfolio</h1>
      <PortfolioGrid tileData={mockData} />
    </div>
  );
}

export default Home;
