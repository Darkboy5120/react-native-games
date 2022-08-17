import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SnakeCell from '../SnakeCell';
import styles from './SnakeBoxStyle';

interface SnakeBoxProps {
}
type GameFrame = "0" | "1";
type SnakeDirection = "right" | "top" | "left" | "bottom";
type SnakeBodyCell = [number, number];
type SnakeState = {
  body: SnakeBodyCell[],
  direction: SnakeDirection,
}

type GlobalStatus = {
  widthDivisor: number,
  heightDivisor: number,
  initialHeadPosition: SnakeBodyCell,
  initialDirection: SnakeDirection,
  initialGameFrames: GameFrame[] | undefined,
  frameRate: number,
}

let _globals: GlobalStatus = {
  widthDivisor: 10,
  heightDivisor: 10,
  initialHeadPosition: [4, 4],
  initialDirection: "right",
  initialGameFrames: undefined,
  frameRate: 200,
};
_globals.initialGameFrames = getInitialCells();

export function getInitialCells() {
  const arr: GameFrame[] = [];
  for (let i = 0; i < (_globals.widthDivisor * _globals.heightDivisor); i++) {
    arr.push("0");
  }
  return arr;
}

function getInitialState() {
  const snake: SnakeState = {
    body: [_globals.initialHeadPosition],
    direction: _globals.initialDirection,
  }
  return {
    cells: getInitialCells(),
    snake,
  };
}

export function getFixedCellPosition(cell: SnakeBodyCell) {
  const fixedCell: SnakeBodyCell = cell;
  if (cell[1] >= _globals.widthDivisor) {
    fixedCell[1] = 0;
  } if (cell[1] < 0) {
    fixedCell[1] = _globals.widthDivisor - 1;
  } if (cell[0] >= _globals.heightDivisor) {
    fixedCell[0] = 0;
  } if (cell[0] < 0) {
    fixedCell[0] = _globals.heightDivisor - 1;
  }
  return fixedCell;
}

export function getUpdatedCellPosition(cell: SnakeBodyCell, direction: SnakeDirection) {
  let updatedCell: SnakeBodyCell;
  switch(direction) {
    case "bottom": updatedCell = [cell[0]+=1, cell[1]];break;
    case "left": updatedCell = [cell[0], cell[1]-=1];break;
    case "right": updatedCell = [cell[0], cell[1]+=1];break;
    case "top": updatedCell = [cell[0]-=1, cell[1]];break;
  }
  const fixedCellPosition = getFixedCellPosition(updatedCell);
  return fixedCellPosition;
}

export function getFixedSnakeBody(snakeHead: SnakeBodyCell, snakeBody: SnakeBodyCell[]) {
  return [
    snakeHead,
    ...snakeBody.slice(0, -1),
  ]; 
}

function getUpdatedSnake(snake: SnakeState) {
  const updatedHeadCell = getUpdatedCellPosition(snake.body[0], snake.direction);
  const updatedSnakeBody = getFixedSnakeBody(updatedHeadCell, snake.body);
  return {
    ...snake,
    body: updatedSnakeBody,
  };
}

function parseSnakeBodyCell(snakeBodyCell: SnakeBodyCell) {
  return (snakeBodyCell[0] * 10) + snakeBodyCell[1];
}

export function getUpdatedGameFrames(snakeBody: SnakeBodyCell[]) {
  const updatedGameFrames = _globals.initialGameFrames?.map((frame: GameFrame, index) => {
    if (snakeBody.filter((snakeBodyCell: SnakeBodyCell) =>
      index === parseSnakeBodyCell(snakeBodyCell)).length > 0) {
      return "1";
    }
    return "0";
  });
  
  return updatedGameFrames;
}

function getNextFrame(snake: SnakeState) {
  const updatedSnake: SnakeState = getUpdatedSnake(snake);
  return {
    updatedCells: getUpdatedGameFrames(updatedSnake.body),
    updatedSnake,
  };
}

function useSnakeState() {
  const [frames, setFrames] = useState<GameFrame[]>(getInitialState().cells);
  const [snake, setSnake] = useState<SnakeState>(getInitialState().snake);

  useEffect(() => {
    const loop = setTimeout(() => {
      const { updatedCells, updatedSnake } = getNextFrame(snake);
      setSnake(updatedSnake);
      setFrames(updatedCells);
    }, _globals.frameRate);
    return () => clearTimeout(loop);
  }, [snake]);

  return {
    frames, snake,
  };
}

function SnakeBox({} : SnakeBoxProps) {
  const [boxWidth, setBoxWidth] = useState<number>(0);
  const containerStyle = [styles.container, {height: boxWidth}];
  const { frames } = useSnakeState();

  return (
    <View style={containerStyle} onLayout={(event) => {
      const { width } = event.nativeEvent.layout;
      setBoxWidth(width);
    }}>
      {frames.map((frame: GameFrame, index) => {
        return <SnakeCell
          key={`snakecell_${index}`}
          focus={frame === "1"}
          parentWidth={boxWidth}
          heightDividor={_globals.heightDivisor}
          widthDividor={_globals.widthDivisor}
        />
      })}
    </View>
  );
}

export default SnakeBox;
