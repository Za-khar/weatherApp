import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { converKelvinToCelsius } from '../../../config/converter';
import { WeatherInfoBlockItemPropTypes } from './types';
import { fontStyles } from '../../../styles';

export const WeatherInfoBlockItem: React.FC<WeatherInfoBlockItemPropTypes> = ({ temp, feelsLike, time, first }) => {
  if (first) {
    return (
      <View style={styles.containerFirst}>
        <Text style={fontStyles.bold16}>{time}</Text>
        <Text style={fontStyles.bold16}>{temp}</Text>
        <Text style={[fontStyles.bold16]}>{feelsLike}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={fontStyles.bold16}>{time}</Text>
      <Text style={fontStyles.regular}>{typeof temp === 'number' && converKelvinToCelsius(temp)}</Text>
      <Text style={fontStyles.regular}>{typeof feelsLike === 'number' && converKelvinToCelsius(feelsLike)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerFirst: {
    flex: 1.5,
    marginLeft: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
});
