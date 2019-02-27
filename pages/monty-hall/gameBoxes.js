import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  buttonBase: {
    paddingTop: theme.spacing.unit * 15,
    paddingBottom: theme.spacing.unit * 15,
    textAlign: 'center',
    width: '100%',
    fontSize: 40,
    color: theme.palette.text.secondary,
    background: theme.palette.secondary.light,
    '&:hover' : {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    }
  },
  activeButton: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover' : {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    }
  }
});

function GameBoxes(props) {
  const { classes } = props;
  let gameBoxes = [];

  for (var i=0; i<3; i++){
    gameBoxes.push(
      <Grid item xs={6} sm={4} key={i}>
        <ButtonBase
          className={ props.userChoice == i ?
            `${classes.buttonBase} ${classes.activeButton}` :
             classes.buttonBase
          }
          value={i}
          onClick={(el) => {
            props.setUserChoice(el.target.value);
          }}
        >
          Box {i+1}
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
