import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function SwapBtns(props) {
  const { classes } = props;

  return (
    <Grid container className="justify-content-center">
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          className="m-3"
          onClick={ props.swap }>
          Swap
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="m-3"
          onClick={ props.noSwap }>
          Don't swap
        </Button>
      </Grid>
    </Grid>
  )
}

// export default withStyles(styles)(SwapBtns);
export default SwapBtns
