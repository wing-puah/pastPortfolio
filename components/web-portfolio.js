import PropTypes from 'prop-types';
import styled from 'styled-components';

const img = [
  'blockchain-education.jpg',
  'edusage.jpg',
  'ikibook.jpg',
  'katalyst.jpg',
  'NBC.jpg',
  'TGW.jpg',
  'VBC.jpg',
];

const PortfolioImg = styled.div`
  overflow: hidden;
  margin: 20px 0;

  .img-container {
    height: 380px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const WebPortfolio = (props) => {
  return (
    <div className="p-4 p-sm-5">
      <h2>Static + Wordpress websites</h2>
      <div className="row">
        {img.map((el, idx) => (
          <PortfolioImg className="col-xs-6 col-sm-4 p-3" key={idx}>
            <div className="border">
              <div className="m-3 img-container">
                <img src={`/static/${el}`} key={idx} />
              </div>
            </div>
          </PortfolioImg>
        ))}
      </div>
    </div>
  )
}

export default WebPortfolio;
