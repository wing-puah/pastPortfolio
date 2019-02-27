function generateRandomArr(max, lengthOfGame, min) {
  const pairIdxArr = [];
  const shuffledIdxArr = [];
  let randomIdxArr = [];

  function generateAllPairs() {
    const minInt = min || 0;
    let i = minInt;
    let j;

    for (i; i < max; i++) {
      for (j = i + 1; j < max; j++) {
        pairIdxArr.push([i, j]);
      }
    }
  }

  function generateRandomIdx() {
    const totalLength = pairIdxArr.length;
    let currentIdx = (lengthOfGame || pairIdxArr.length) - 1;
    let tempArray = [];

    tempArray = [...Array(totalLength).keys()];

    while (currentIdx > 1) {
      const randomIdx = Math.floor(Math.random() * totalLength);
      const temp = tempArray[currentIdx];

      tempArray[currentIdx] = tempArray[randomIdx];
      tempArray[randomIdx] = temp;
      currentIdx -= 1;
    }

    randomIdxArr = tempArray;
  }

  function getShuffledPairArr() {
    let idx = 0;
    const len = lengthOfGame || pairIdxArr.length;

    while (idx < len) {
      shuffledIdxArr.push(pairIdxArr[randomIdxArr[idx]]);
      idx += 1;
    }
  }

  function shufflePair() {
    generateAllPairs();
    generateRandomIdx();
    getShuffledPairArr();
  }

  shufflePair();
  return shuffledIdxArr;
}

export default generateRandomArr;
