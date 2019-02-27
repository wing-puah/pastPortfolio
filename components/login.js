import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.secondary.contrastText
  }
});

function LoginBtn(props) {
  const { classes } = props;

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}>
      Login
    </Button>
  )
}

LoginBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginBtn);
