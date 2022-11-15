import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './TapRusherScreenStyle';

interface TapRusherScore {
  p1: number;
  p2: number;
}

interface HeightObjectStyle {
  height: string;
}

interface FontSizeObjectStyle {
  fontSize: number;
}

function getCustomHeight(value: number): HeightObjectStyle {
  return {height: `${value}%`};
}

function getCustomFontSize(value: number): FontSizeObjectStyle {
  return {fontSize: value * 2};
}

const scoreInitialValue = {
  p1: 50,
  p2: 50,
};

function TapRusherScreen({navigation}) {
  const [score, setScore] = useState<TapRusherScore>(scoreInitialValue);

  useEffect(() => {
    for (let att in score) {
      if (score[att] >= 100) {
        setScore(scoreInitialValue);
        break;
      }
    }
  }, [score]);

  return (
    <View style={[styles.screenContainer]}>
      <Pressable
        style={[
          styles.playerContainer,
          styles.p1Container,
          getCustomHeight(score.p1),
        ]}
        onPress={() => {
          setScore({p1: score.p1 + 1, p2: score.p2 - 1});
        }}>
        <Text style={getCustomFontSize(score.p1)}>{score.p1}</Text>
      </Pressable>
      <Pressable
        style={[
          styles.playerContainer,
          styles.p2Container,
          getCustomHeight(score.p2),
        ]}
        onPress={() => {
          setScore({p1: score.p1 - 1, p2: score.p2 + 1});
        }}>
        <Text style={getCustomFontSize(score.p2)}>{score.p2}</Text>
      </Pressable>
    </View>
  );
}

export default TapRusherScreen;
