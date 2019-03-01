import PropTypes from 'prop-types';
import Link from 'next/link'

import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Container__fade } from '../../components/styles/container';
import WebPortfolio from '../../components/web-portfolio';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function PortfolioGrid(props) {
  const { classes, tileData } = props;

  return (
    <div className={`py-5 ${classes.root}`}>
      <div className={`mb-5 mx-5 ${classes.flex}`}>
        <GridList cellHeight={180}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <h2>The apps</h2>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img} className="text-center">
              <Container__fade>
                <Link href={tile.url}>
                  <a>
                    <img src={`/static/${tile.img}`} alt={tile.title} className="img-fluid"/>
                        <GridListTileBar
                          title={tile.title}
                        />
                  </a>
                </Link>
              </Container__fade>
            </GridListTile>
          ))}
        </GridList>
      </div>
      <WebPortfolio />
    </div>
  );
}

PortfolioGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default withStyles(styles)(PortfolioGrid);
