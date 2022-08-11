import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './SnakeGameScreenStyle';
import SnakeBox from '../../components/SnakeBox';

function SnakeGameScreen({navigation}) {
  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        <SnakeBox />
      </ScrollView>
    </View>
  );
}

export default SnakeGameScreen;
