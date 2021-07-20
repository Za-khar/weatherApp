import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { CustomImageBackgroundPropTypes } from './types';

export const CustomImageBackground: React.FC<CustomImageBackgroundPropTypes> = ({ children, image }) => {
  return (
    <ImageBackground style={styles.backgroundImg} source={image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
  },
});
