import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Line } from '../../../Line';
import { fontStyles } from '../../../../styles';
import { SectionItemTextInfoPropTypes } from './types';

export const SectionItemTextInfo: React.FC<SectionItemTextInfoPropTypes> = ({ rightText, leftText }) => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={fontStyles.regular}>{leftText}</Text>
        <Text style={fontStyles.bold16}>{rightText}</Text>
      </View>
      <Line opacity={0.3} />
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
