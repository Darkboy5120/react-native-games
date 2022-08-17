import {
  getUpdatedGameFrames,
  getInitialCells,
  getFixedCellPosition,
} from '../../src/components/SnakeBox/SnakeBox';

test('get updated game frames', () => {
  const inputExample = [
    [4, 4],
    [1, 2],
  ];
  const outputExample = getInitialCells();
  outputExample[44] = '1';
  outputExample[12] = '1';
  expect(getUpdatedGameFrames(inputExample)).toEqual(outputExample);
});

test('get fixed cell position', () => {
  expect(getFixedCellPosition([0, 0])).toEqual([0, 0]);
  expect(getFixedCellPosition([10, 0])).toEqual([0, 0]);
  expect(getFixedCellPosition([-1, 0])).toEqual([0, 0]);
  expect(getFixedCellPosition([0, 11])).toEqual([0, 0]);
  expect(getFixedCellPosition([0, -1])).toEqual([0, 9]);
  expect(getFixedCellPosition([10, 10])).toEqual([0, 0]);
  expect(getFixedCellPosition([-1, -1])).toEqual([9, 9]);
});

// test('foo', () => {
//   const inputCells = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   ];
//   const outputCells = [
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   ];
//   expect(getNextFrame(fakeCells)).toBe();
// });
