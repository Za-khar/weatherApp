import React, { useRef, useState, useCallback } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';
import { SectionHeaderPropTypes, ToggleListItemType } from './types';
import { fontStyles, colors } from '../../../../styles';
import icons from '../../../../assets/icons';

export const SectionHeader: React.FC<SectionHeaderPropTypes> = ({ title, onPress }) => {
  const [open, setOpen] = useState<boolean>(false);
  const animatedController = useRef(new Animated.Value(0)).current;

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = useCallback<ToggleListItemType>(() => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
    setOpen(!open);
    onPress(title);
  }, [animatedController, onPress, open, title]);

  const iconStyle = StyleSheet.flatten([{ transform: [{ rotateZ: arrowAngle }] }]);

  return (
    <View style={styles.headerContainer}>
      <Text style={fontStyles.bold18}>{title}</Text>
      <TouchableOpacity onPress={toggleListItem}>
        <Animated.View style={iconStyle}>
          <Image style={styles.iconStyle} source={icons.arrowDown} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: colors.transpBlue,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
});
