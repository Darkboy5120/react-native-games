import {
  getUpdatedGameFrames,
  getInitialCells,
  getFixedCellPosition,
  getUpdatedCellPosition,
  getFixedSnakeBody,
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
  expect(getFixedCellPosition([-1, 0])).toEqual([9, 0]);
  expect(getFixedCellPosition([0, 11])).toEqual([0, 0]);
  expect(getFixedCellPosition([0, -1])).toEqual([0, 9]);
  expect(getFixedCellPosition([10, 10])).toEqual([0, 0]);
  expect(getFixedCellPosition([-1, -1])).toEqual([9, 9]);
});

test('get updated cell position', () => {
  expect(getUpdatedCellPosition([0, 0], 'right')).toEqual([0, 1]);
  expect(getUpdatedCellPosition([0, 9], 'right')).toEqual([0, 0]);
  expect(getUpdatedCellPosition([0, 0], 'left')).toEqual([0, 9]);
  expect(getUpdatedCellPosition([0, 9], 'left')).toEqual([0, 8]);
  expect(getUpdatedCellPosition([0, 0], 'top')).toEqual([9, 0]);
  expect(getUpdatedCellPosition([9, 0], 'top')).toEqual([8, 0]);
  expect(getUpdatedCellPosition([0, 0], 'bottom')).toEqual([1, 0]);
  expect(getUpdatedCellPosition([9, 0], 'bottom')).toEqual([0, 0]);
});

test('get updated snake', () => {
  expect(
    getFixedSnakeBody(
      [0, 0],
      [
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
    ),
  ).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ]);
  expect(
    getFixedSnakeBody(
      [8, 8],
      [
        [9, 8],
        [9, 9],
        [9, 0],
        [0, 0],
        [1, 0],
      ],
    ),
  ).toEqual([
    [8, 8],
    [9, 8],
    [9, 9],
    [9, 0],
    [0, 0],
  ]);
});
