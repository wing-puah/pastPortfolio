import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  buttonBase: {
    textAlign: 'center',
    width: '100%',
    fontSize: 40,
    color: theme.palette.text.secondary,
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  activeButton: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }
  }
});

function GameBoxes(props) {
  const { classes } = props;
  const gameBoxes = [];

  for (let i = 0; i < 3; i++) {
    gameBoxes.push(
      <Grid item xs={4} key={i}>
        <ButtonBase
          className={Number(props.userChoice) === i ?
            `${classes.buttonBase} ${classes.activeButton} py-3 p-sm-5` :
             `${classes.buttonBase} p-3 p-sm-5`
          }
          value={i}
          onClick={(el) => {
            props.setUserChoice(el.target.value);
          }}
        >
          Box {i + 1}
        </ButtonBase>
      </Grid>
    )
  }

  return gameBoxes;
}

GameBoxes.propTypes = {
  classes: PropTypes.object.isRequired,
  userChoice: PropTypes.string,
  setUserChoice: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameBoxes);
