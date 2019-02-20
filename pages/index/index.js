import PortfolioGrid from './portfolioGrid'

const mockData = [
  {img: 'Monty Hall Game App', title: 'Monty Hall Game App', url: 'monty-hall'},
  {img: 'lame2', title: 'lame2', url: 'lame2'},
]

function Home() {
  return (
    <div>
      Welcome to the app lalala
      <PortfolioGrid tileData={mockData}/>
    </div>
  )
}

export default Home
