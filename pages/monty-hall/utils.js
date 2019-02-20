function MontyHallGameApp() {
  const instructions = [
    'Please pick a box.',
    'You have chosen a box. Will you like to swap?',
    'Thank you for playing.'
  ]

  function showInstructions(idx) {
    return instructions[idx]
  }

  function generateWinningBox() {
    return Math.floor(Math.random()*3)
  }


  function setResults(prize, choice, hasSwapped) {
    let prizeNo = Number(prize),
        choiceNo = Number(choice),
        swapNo = Number(hasSwapped);

    let winningMsg = prize == choice ?
      'The prize is at box ' + ( prizeNo+1 ) + '. You have chosen the prize.' :
      'The prize is at box ' + ( prizeNo+1 ) + '. Better luck next time.'

    let finalMsg = hasSwapped >= 0 ?
        'You have swapped from box ' + ( swapNo+1 ) + ' to box ' + ( choiceNo+1 ) + '. '  :
        'You did not swapped. ';

    return finalMsg + winningMsg;
  }

  function swapAndSetResults(prize, dummy, choice) {
    const arr = [0,1,2],
          swapChoice = arr.filter(el => (el != dummy & el != choice) );

    return setResults(prize, swapChoice, choice)
  }

  function setHint(winning, userChoice) {
    let boxArray = [0,1,2],
        winNo = Number(winning),
        userNo = Number(userChoice),
        dummyBoxIdx;

    if (winNo === userNo) {
      boxArray.splice(userNo, 1);
      dummyBoxIdx = Math.random() < 0.5 ? boxArray[0] : boxArray[1];
    } else {
      dummyBoxIdx = boxArray.filter(el => (
        el !== winNo & el !== userNo
      ));
    }

    return {
      dummyBox: Number(dummyBoxIdx),
      hint: 'You choose box ' +
           (userNo +1) +
           '. One of the dummy box is ' +
           (Number(dummyBoxIdx) +1)+ '.'
    };
  }

  return { showInstructions, generateWinningBox, setResults, swapAndSetResults, setHint };
}

export default MontyHallGameApp();
