import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MontyHallGameApp  from '../../pages/monty-hall/utils';

const { showInstructions, generateWinningBox, setResults, swapAndSetResults, setHint } = MontyHallGameApp

describe( 'MontyHallGameApp', () => {

  it('generates the instructions', () => {
    const firstInstruction = showInstructions(0);
    expect(firstInstruction).toBe('Please pick a box.');
  });

  it('picks a random box for prize', () => {
    const winningBox = generateWinningBox();
    expect(winningBox).toBeGreaterThan(-1);
    expect(winningBox).toBeLessThan(3);
  });

  it('returns the correct message at the end of the game', () => {
    const prize = 1,
          result1NoSwap = setResults(prize, 2, -1),
          result2NoSwap = setResults(prize, 1, -1),
          result1Swap = swapAndSetResults(prize, 2, 0),
          result2Swap = swapAndSetResults(prize, 2, 1);

    expect(result1NoSwap).toContain('Better luck next time');
    expect(result1NoSwap).toContain('You did not swapped.');
    expect(result2NoSwap).toContain('You have chosen the prize');
    expect(result2NoSwap).toContain('You did not swapped.');

    expect(result1Swap).toContain('You have chosen the prize');
    expect(result1Swap).toContain('You have swapped from box 1');
    expect(result2Swap).toContain('Better luck next time');
    expect(result2Swap).toContain('You have swapped from box 2');
  });

  it('shows the correct hint', () => {
    const prize = 1,
          hint1 = setHint(prize, 0),
          hint2 = setHint(prize, 1),
          hint3 = setHint(prize, 2);

    expect(hint1.dummyBox).toEqual(2);
    expect(hint1.hint).toContain('You choose box 1');

    expect(hint2.dummyBox).not.toEqual(1);
    expect(hint2.hint).toContain('You choose box 2');

    expect(hint3.dummyBox).toEqual(0);
    expect(hint3.hint).toContain('You choose box 3');
  });
})
