import PortfolioGrid from './portfolioGrid'

const mockData = [
  {img: 'lame', title: 'lame', author: 'lame'},
  {img: 'lame2', title: 'lame2', author: 'lame2'},
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
