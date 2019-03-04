import React from 'react';
import PortfolioGrid from '../components/index/portfolioGrid';

const mockData = [
  { img: 'monty-hall.jpg', title: 'Monty Hall Mini Game', url: 'monty-hall' },
  { img: 'choose-one/choose-3.jpg', title: 'Choose One Mini Game', url: 'choose-one' },
  { img: 'calendar.jpg', title: 'Calendar', url: 'calendar' },
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
