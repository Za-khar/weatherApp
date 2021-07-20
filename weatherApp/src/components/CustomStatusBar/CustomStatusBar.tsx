import React from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../styles';

export const CustomStatusBar: React.FC = () => {
  return <StatusBar backgroundColor={colors.darkBlue} />;
};
