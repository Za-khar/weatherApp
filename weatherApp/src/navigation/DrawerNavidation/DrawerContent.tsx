import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Image, StyleSheet, View, Text } from 'react-native';
import images from '../../assets/images';
import { colors } from '../../styles';

export function DrawerContent({ ...props }: DrawerContentComponentProps<DrawerContentOptions>) {
  return (
    <DrawerContentScrollView style={styles.drawerContent} {...props}>
      <Image style={styles.image} source={images.contentImages.drawerImage} />
      <View style={styles.imageBlock} />
      <Text style={styles.location}>Location: Sumy, UA</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    marginBottom: 20,
  },
  imageBlock: { flex: 1, marginBottom: 300 },
  location: {
    fontFamily: 'OpenSans-SemiboldItalic',
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    position: 'absolute',
    marginTop: 270,
    marginLeft: 20,
  },
});
