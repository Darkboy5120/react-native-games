import React from 'react';
import { View } from 'react-native';
import { colors } from '../../theme';
import styles from './SnakeCellStyle';

interface SnakeCellProps {
  parentWidth: number;
  heightDividor: number;
  widthDividor: number;
  focus: boolean;
}

function SnakeCell({focus, parentWidth = 1, heightDividor, widthDividor} : SnakeCellProps) {
  const containerStyle = [
    styles.container,
    focus ? {backgroundColor: colors.secondaryInteraction} : null,
    {height: Math.floor(parentWidth / heightDividor), width: Math.floor(parentWidth / widthDividor)}
  ];
  return (
    <View style={containerStyle}>
    </View>
  );
}

export default SnakeCell;
