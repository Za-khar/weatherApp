import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const CustomActivityIndicator: React.FC = () => {
  return <ActivityIndicator style={styles.indicator} size="large" color={colors.white} />;
};

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
