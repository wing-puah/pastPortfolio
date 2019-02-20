import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
        justifyContent: 'center'
  },
  swapBtn: {
    margin: theme.spacing.unit *3
  },
  primaryButton: {
    background: theme.palette.primary.dark,
  },
  secondaryButton: {
    background: theme.palette.secondary.dark,
  },
});

const SwapBtns = (props) => {
  const { classes } = props;

  return (
    <Grid container alignContent="center" alignItems="center" className={classes.root}>
      <Grid item>
        <Button
          variant="contained"
          className={`${classes.swapBtn} ${classes.primaryButton}`}
          onClick={ props.swap }>
          Swap
        </Button>
        <Button
          variant="contained"
          className={`${classes.swapBtn} ${classes.secondaryButton}`}
          onClick={ props.noSwap }>
          Don't swap
        </Button>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(SwapBtns);
