import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function SwapBtns(props) {
  const { swap, noSwap } = props;

  return (
    <Grid container className="justify-content-center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className="m-3"
          onClick={swap}
        >
          Swap
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="m-3"
          onClick={noSwap}
        >
          Don't swap
        </Button>
      </Grid>
    </Grid>
  );
}

SwapBtns.propTypes = {
  swap: PropTypes.func.isRequired,
  noSwap: PropTypes.func.isRequired,
};

export default SwapBtns;
