import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './CustomButtonStyle';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  height?: number;
}

function CustomButton({title, onPress, height = 50} : CustomButtonProps) {
  const containerStyle = [styles.container, {height}];
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
