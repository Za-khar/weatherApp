import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../styles';
import { LinePropTypes } from './types';

export const Line: React.FC<LinePropTypes> = ({ color = colors.white, width, opacity = 1 }) => {
  const lineStyle = StyleSheet.flatten([
    styles.lineStyle,
    {
      borderBottomColor: color,
      wigth: width,
      opacity: opacity,
    },
  ]);

  return <View style={lineStyle} />;
};

const styles = StyleSheet.create({
  lineStyle: {
    borderBottomWidth: 1,
  },
});
