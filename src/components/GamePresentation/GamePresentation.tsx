import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './GamePresentationStyle';

interface GamePresentationProps {
  name: string;
  description: string;
  onPress: () => void;
}

function GamePresentation(props : GamePresentationProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress && props.onPress}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </TouchableOpacity>
  );
}

export default GamePresentation;
