import React, { useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import ThreeInRowBoxCell from '../../components/ThreeInRowBoxCell/ThreeInRowBoxCell';
import styles from './ThreeInRowStyle';
import { ThreeInRowCellPlayer, ThreeInRowBoxCellProps } from '../../models/ThreeInRowCell.model';
import CustomButton from '../../components/CustomButton';

const wininigPatterns = [
  //horizontal matches
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  //vertical matches
  [[2, 0], [2, 1], [2, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[0, 0], [0, 1], [0, 2]],
  //diagonal matches
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]]
];

function genCustomIdentifier(label = "") {
  return `${label}${Math.floor(Math.random() * 100000)}`;
}

function getInitialBoxState() {
  const boxLength = 3;
  const arrayLength = () => Array(boxLength).keys();
  let initialState: ThreeInRowBoxCellProps[][] = [];
  for (let i = 0; i < boxLength; i++) {
    const rowItem: ThreeInRowBoxCellProps[] = [...arrayLength()].map(() => ({
      key: genCustomIdentifier("cellItem"), player: "p1", isVisible: false, focus: false,
    }));
    initialState.push(rowItem);
  }
  return initialState;
}

function getNewBoxState(
  cellItem: ThreeInRowBoxCellProps,
  boxState: ThreeInRowBoxCellProps[][],
  playerTurn: ThreeInRowCellPlayer
) {
  let newBoxState: ThreeInRowBoxCellProps[][] = [];
  for (const boxRow of boxState) {
    const newBoxRow: ThreeInRowBoxCellProps[] = boxRow.map((item: ThreeInRowBoxCellProps) => {
      if (item.key === cellItem.key) {
        return {
          ...item,
          player: playerTurn,
          isVisible: true,
        };
      }
      return item;
    });
    newBoxState.push(newBoxRow);
  }
  return newBoxState;
}

function getIfSomebodyWon(boxState: ThreeInRowBoxCellProps[][]) {
  let winner: ThreeInRowCellPlayer | null = null;
  let winnerPatternIds: any[] = [];
  for (let wPatternRow of wininigPatterns) {
    let matchesInRow = 0;
    winnerPatternIds = [];
    for (let wPattern of wPatternRow) {
      const selectedCellItem = boxState[wPattern[0]][wPattern[1]];
      if (!selectedCellItem.isVisible) {
        break;
      } else if (winner === null) {
        winner = selectedCellItem.player;
      } else if (selectedCellItem.player !== winner) {
        break;
      } else if (selectedCellItem.player === winner) {
        matchesInRow += 1;
      }
      winnerPatternIds.push(selectedCellItem.key);
    }
    if (matchesInRow === 2) {
      break;
    }
    winner = null;
  }
  return {
    winner,
    winnerPatternIds: winner !== null ? winnerPatternIds : null,
  };
}

function getGameStatus(
  boxState: ThreeInRowBoxCellProps[][]
) {
  let allCellsCompleted = true;
  for (let boxRow of boxState) {
    if (!allCellsCompleted) {
      break; 
    }
    for (let cellItem of boxRow) {
      if (!cellItem.isVisible && allCellsCompleted) {
        allCellsCompleted = false;
        break;
      }
    }
  }
  const { winner, winnerPatternIds } = getIfSomebodyWon(boxState);

  return {
    allCellsCompleted,
    winner,
    winnerPatternIds,
  };
}

function finishGame(
  winner: ThreeInRowCellPlayer | null,
  winnerPatternIds: string[] | null,
  boxState: ThreeInRowBoxCellProps[][],
  setBoxState: any,
  incrementWinnerCount: () => void,
) {
  if (winner === null || winnerPatternIds === null) {
    Alert.alert("The game has end", "No one has won");
  } else {
    const winnerPlayer = winner === "p1" ? "1" : "2";
    Alert.alert("The game has end", `Player ${winnerPlayer} has won`);
    let newBoxState: ThreeInRowBoxCellProps[][] = [];
    for (let boxRow of boxState) {
      const newBoxRow: ThreeInRowBoxCellProps[] = boxRow.map((cellItem: ThreeInRowBoxCellProps) => {
        if (cellItem.key !== undefined && winnerPatternIds.includes(cellItem.key)) {
          return {
            ...cellItem,
            focus: true,
          };
        }
        return cellItem;
      });
      newBoxState.push(newBoxRow);
    }
    setBoxState(newBoxState);
  }
  incrementWinnerCount();
}

function getIncrementWinnerCount(winnerCounts, setWinnerCounts, winner) {
  return () => {
    const newWinnerCounts = [
      ...winnerCounts,
    ];
    newWinnerCounts[winner === "p1" ? 0 : 1] += 1;
    setWinnerCounts(newWinnerCounts);
  }
}

function ThreeInRowScreen() {
  const [boxWidth, setBoxWidth] = useState<number>();
  const boxContainerStyle = [
    {height: boxWidth},
    styles.boxContainer,
  ];
  const [boxState, setBoxState] = useState<ThreeInRowBoxCellProps[]>(getInitialBoxState());
  const [playerTurn, setPlayerTurn] = useState<ThreeInRowCellPlayer>("p1");
  const [gameIsDone, setGameIsDone] = useState<boolean>(false);
  const [winnerCounts, setWinnerCounts] = useState<[number, number]>([0, 0]);

  const onCellPressed = (cellItem: ThreeInRowBoxCellProps) => {
    const newBoxState: ThreeInRowBoxCellProps[][] = getNewBoxState(cellItem, boxState, playerTurn);
    setPlayerTurn(playerTurn === "p1" ? "p2" : "p1");
    setBoxState(newBoxState);
    const { allCellsCompleted, winner, winnerPatternIds } = getGameStatus(newBoxState);
    const _gameIsDone = allCellsCompleted || winner !== null;
    if (_gameIsDone) {
      const incrementWinnerCount = getIncrementWinnerCount(winnerCounts, setWinnerCounts, winner);
      setGameIsDone(true);
      finishGame(winner, winnerPatternIds, newBoxState, setBoxState, incrementWinnerCount);
    }
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <Text style={styles.textHeader}>Match{' '}
          <Text style={styles.contrastHeaderText}>Three in row</Text>{' '}
          to win!</Text>
        <View style={boxContainerStyle} onLayout={event => {
          const { width } = event.nativeEvent.layout;
          setBoxWidth(width);
        }}>
          {boxState.map(boxRow => {
            return (
              <View key={genCustomIdentifier("boxRow")} style={styles.boxRow}>
                {boxRow.map((cellItem: ThreeInRowBoxCellProps) => {
                  const cellItemProps = {
                    ...cellItem,
                    disabled: gameIsDone || cellItem.focus,
                  };
                  return (
                    <ThreeInRowBoxCell {...cellItemProps} onPress={() => onCellPressed(cellItem)} />
                  );
                })}
              </View>
            );
          })}
        </View>
        <View style={styles.winsRowContainer}>
          <Text style={styles.winsLabel}>Wins</Text>
          <Text style={styles.winsLabel}>Player1: {winnerCounts[0]}</Text>
          <Text style={styles.winsLabel}>Player2: {winnerCounts[1]}</Text>
        </View>
        {gameIsDone && (
          <CustomButton title="Reset" onPress={() => {
            setBoxState(getInitialBoxState());
            setPlayerTurn("p1");
            setGameIsDone(false);
          }} />
        )}
      </ScrollView>
    </View>
  );
}

export default ThreeInRowScreen;
