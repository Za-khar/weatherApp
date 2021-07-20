import React from 'react';
import { useMemo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { CustomWeatherIconPropTypes } from './types';

export const CustomWeatherIcon: React.FC<CustomWeatherIconPropTypes> = ({ code, height, width, receiveSize }) => {
  const styles = StyleSheet.create({
    iconStyle: {
      height: height,
      width: width,
    },
  });

  const size = useMemo<string>(() => `@${receiveSize}x` || '', [receiveSize]);

  return (
    <Image
      style={styles.iconStyle}
      source={{
        uri: `http://openweathermap.org/img/wn/${code}${size}.png`,
      }}
    />
  );
};
