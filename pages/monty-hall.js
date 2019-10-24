import { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import MontyHallGameApp from '../components/monty-hall/utils';
import GameBoxes from '../components/monty-hall/gameBoxes';
import SwapBtns from '../components/monty-hall/swapBtns';

const {
  showInstructions,
  generateWinningBox,
  setResults,
  swapAndSetResults,
  setHint } = MontyHallGameApp;

function MontyHallGame() {
  const [userChoice, setUserChoice] = useState();
  const [userStep, setUserStep] = useState(0);
  const [winningBox, setWinningBox] = useState();
  const [dummyBox, setDummyBox] = useState();
  const [resultsMsg, setResultsMsg] = useState();
  let hint = '';

  useEffect(() => { // eslint-disable-line arrow-body-style
    return setWinningBox(generateWinningBox());
  }, []);

  const getUserChoice = (idx) => {
    if (userChoice === undefined) {
      return setUserChoice(idx);
    }
  };

  const GetHints = () => {
    const hints = setHint(winningBox, userChoice);
    const box = hints.dummyBox;

    if (dummyBox === undefined) {
      setDummyBox(box);
    }T

    hint = hints.hint; // eslint-disable-line prefer-destructuring
    return hint;
  };

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
              setResultsMsg(swapAndSetResults(winningBox, dummyBox, userChoice));
              setUserStep(userStep + 1);
            }}
            noSwap={() => {
              setResultsMsg(setResults(winningBox, userChoice, -1));
              setUserStep(userStep + 1);
            }}
          />
        </Fragment>
      )}
      { userStep === 2 && (
        <p> { resultsMsg } </p> // eslint-disable-line react/jsx-one-expression-per-line
      )}
      <Grid
        container
        spacing={24}
        data-choice={userChoice}
        className="py-5"
      >
        <GameBoxes
          userChoice={userChoice}
          setUserChoice={(el) => {
            getUserChoice(el);
            if (userStep === 0) {
              setUserStep(userStep + 1);
            }
          }}
        />
      </Grid>
    </div>
  );
}

export default MontyHallGame;
