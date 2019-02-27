import { useState, useEffect, Fragment } from 'react';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import MontyHallGameApp from './utils';
import GameBoxes from './gameBoxes';
import SwapBtns from './swapBtns';

const { showInstructions, generateWinningBox, setResults, swapAndSetResults, setHint } = MontyHallGameApp

function MontyHallGame(props) {
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
     <div className="text-center">
       <h1 className="text-center">
         Monty Hall Game
       </h1>
       <h2 className="text-center">
         {showInstructions(userStep)}
       </h2>
       { userStep === 1 && (
         <Fragment>
           <p>
             <GetHints
               winningBox={winningBox}
               userChoice={userChoice}
              />
          </p>
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
         <p> { resultsMsg } </p>
       )}
       <Grid
         container spacing={24}
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


export default MontyHallGame;
