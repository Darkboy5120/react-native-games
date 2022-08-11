import React, { useState } from 'react';
import { View } from 'react-native';
import SnakeCell from '../SnakeCell';
import styles from './SnakeBoxStyle';

interface SnakeBoxProps {
}
type SnakeCellState = keyof [0, 1];

const [widthDivisor, heightDivisor] = [10, 10];

function getInitialState() {
  const arr: SnakeCellState[] = [];
  for (let i = 0; i < (widthDivisor * heightDivisor); i++) {
    arr.push("0");
  }
  return arr;
}

function SnakeBox({} : SnakeBoxProps) {
  const [boxWidth, setBoxWidth] = useState();
  const [cells, setCells] = useState<SnakeCellState[]>(getInitialState());
  const containerStyle = [styles.container, {height: boxWidth}];
  return (
    <View style={containerStyle} onLayout={(event) => {
      const { width } = event.nativeEvent.layout;
      setBoxWidth(width);
    }}>
      {cells.map((cell: SnakeCellState) => {
        return <SnakeCell
          focus={cell === "1"}
          parentWidth={boxWidth}
          heightDividor={heightDivisor}
          widthDividor={widthDivisor}
        />
      })}
    </View>
  );
}

export default SnakeBox;
