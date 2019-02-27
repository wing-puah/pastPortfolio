import { useState, useEffect, Fragment } from 'react';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MontyHallGameApp from './utils'
import GameBoxes from './gameBoxes';
import SwapBtns from './swapBtns';

const styles = theme => ({
  root: {
    justifyContent: 'center'
  }
});

const { showInstructions, generateWinningBox, setResults, swapAndSetResults, setHint } = MontyHallGameApp

function MontyHallGame(props) {
  const { classes } = props;

  let [userChoice, setUserChoice] = useState(),
      [userStep, setUserStep] = useState(0),
      [winningBox, setWinningBox] = useState(),
      [dummyBox, setDummyBox] = useState(),
      [resultsMsg, setReultsMsg] = useState(),
      hint = '';

  useEffect(() => {
    return setWinningBox(generateWinningBox());
  }, [])

  let getUserChoice = (idx) => {
    if (userChoice === undefined) {
      return setUserChoice(idx)
    }
  }

  const GetHints = (props) => {
    let hints = setHint(props.winningBox, props.userChoice),
        box =  hints.dummyBox;

    if (dummyBox === undefined) {
      setDummyBox(box);
    }

    hint = hints.hint;
    return hint;
  }

  return (
     <div className={classes.root}>
       <Typography variant="h1" align="center" gutterBottom={true}>
         Monty Hall Game
       </Typography>
       <Typography variant="h2" align="center" gutterBottom={true}>
         {showInstructions(userStep)}
       </Typography>
       { userStep === 1 && (
         <Fragment>
           <Typography variant="body1" align="center">
             <GetHints
               winningBox={winningBox}
               userChoice={userChoice}
              />
           </Typography>
           <SwapBtns
             swap={() => {
               setReultsMsg(swapAndSetResults(winningBox, dummyBox, userChoice));
               setUserStep(userStep+1);
             }}
             noSwap={() => {
               setReultsMsg(setResults(winningBox, userChoice, -1));
               setUserStep(userStep+1);
             }}
          />
         </Fragment>
       )}
       { userStep === 2 && (
         <Typography variant="body1" align="center" gutterBottom={true}>
           { resultsMsg }
         </Typography>
       )}
       <Grid
         container spacing={24}
         className={classes.boxes}
         data-choice={userChoice}
        >
        <GameBoxes
          userChoice = {userChoice}
          setUserChoice={(el) => {
            getUserChoice(el);
            if (userStep === 0) {
              setUserStep(userStep+1);
            }
          }}
         />
       </Grid>
     </div>
  );
}

MontyHallGame.propTypes = {
 classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MontyHallGame);
