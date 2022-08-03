import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './ThreeInRowBoxCellStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme';
import { ThreeInRowCellPlayer, ThreeInRowBoxCellProps } from '../../models/ThreeInRowCell.model';

function getCellIcon(iconId: ThreeInRowCellPlayer, iconSize, isVisible: boolean) {
  const iconName = iconId === "p1" ? "ellipse-outline" : "close-outline";
  const iconColor = isVisible ? colors.secondaryText : 'transparent';
  return <Icon name={iconName} size={iconSize} color={iconColor} />;
}

function ThreeInRowBoxCell(props : ThreeInRowBoxCellProps) {
  const [iconSize, setIconSize] = useState<number>(0);
  const containerStyle = [styles.container, props.focus ? styles.focusContainer : null];
  return (
    <TouchableOpacity
      disabled={props.disabled || props.isVisible}
      style={containerStyle}
      onPress={props.onPress && props.onPress}
      onLayout={event => {
        const { width } = event.nativeEvent.layout;
        setIconSize(width * .5);
      }}
    >
      {getCellIcon(props.player, iconSize, props.isVisible)}
    </TouchableOpacity>
  );
}

export default ThreeInRowBoxCell;
