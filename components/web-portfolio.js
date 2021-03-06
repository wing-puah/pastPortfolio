import styled from 'styled-components';
import theme from './styles/theme';

const img = [
  'blockchain-education.jpg',
  'edusage.jpg',
  'ikibook.jpg',
  'aman-amanah.jpg',
  'katalyst.jpg',
  'NBC.jpg',
  'TGW.jpg',
  'VBC.jpg',
];

const PortfolioImg = styled.div`
  overflow: hidden;
  margin: 20px 0;
  .img-container {
    height: 250px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
  }

  ${theme.breakpoints.up('md')} {
    .img-container {
      height: 350px;
    }
  }
`;

const WebPortfolio = () => {
  return (
    <div className="p-4 p-sm-5">
      <h2>Static + Wordpress websites</h2>
      <div className="row">
        {img.map((el) => (
          <PortfolioImg className="col-sm-6 col-md-4 p-3" key={el}>
            <div className="border">
              <div className="m-3 img-container">
                <img src={`/static/${el}`} alt={el} />
              </div>
            </div>
          </PortfolioImg>
        ))}
      </div>
    </div>
  );
};

export default WebPortfolio;
