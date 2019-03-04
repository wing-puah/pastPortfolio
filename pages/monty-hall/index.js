import { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import MontyHallGameApp from './utils';
import GameBoxes from './gameBoxes';
import SwapBtns from './swapBtns';


const {
  showInstructions,
  generateWinningBox,
  setResults,
  swapAndSetResults,
  setHint } = MontyHallGameApp;

function MontyHallGame(props) {
  const [userChoice, setUserChoice] = useState();
  const [userStep, setUserStep] = useState(0);
  const [winningBox, setWinningBox] = useState();
  const [dummyBox, setDummyBox] = useState();
  const [resultsMsg, setReultsMsg] = useState();
  let hint = '';

  useEffect(() => {
    return setWinningBox(generateWinningBox());
  }, [])

  const getUserChoice = (idx) => {
    if (userChoice === undefined) {
      return setUserChoice(idx)
    }
  }

  const GetHints = () => {
    const hints = setHint(winningBox, userChoice);
    const box = hints.dummyBox;

    if (dummyBox === undefined) {
      setDummyBox(box);
    }

    hint = hints.hint;
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
              setReultsMsg(swapAndSetResults(winningBox, dummyBox, userChoice));
              setUserStep(userStep + 1);
            }}
            noSwap={() => {
              setReultsMsg(setResults(winningBox, userChoice, -1));
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
