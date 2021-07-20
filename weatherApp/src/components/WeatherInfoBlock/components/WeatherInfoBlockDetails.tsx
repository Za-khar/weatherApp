import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { WeatherInfoBlockDetailsPropTypes } from './types';
import icons from '../../../assets/icons';
import { fontStyles } from '../../../styles';
import { converKelvinToCelsius } from '../../../config/converter';

export const WeatherInfoBlockDetails: React.FC<WeatherInfoBlockDetailsPropTypes> = ({
  humidity,
  pressure,
  wind,
  minTemp,
  maxTemp,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tempContainer}>
        <View style={styles.tempBlock}>
          <Image style={[styles.icon, styles.arrowUp]} source={icons.whiteUpIcon} />
          <Text style={[fontStyles.bold16, styles.tempText]}>{converKelvinToCelsius(minTemp)}</Text>
        </View>
        <View style={styles.tempBlock}>
          <Image style={styles.icon} source={icons.whiteUpIcon} />
          <Text style={[fontStyles.bold16, styles.tempText]}>{converKelvinToCelsius(maxTemp)}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.block}>
          <Image style={[styles.icon, styles.elemMarging]} source={icons.humidityIcon} />
          <Image style={[styles.icon, styles.elemMarging]} source={icons.pressureIcon} />
          <Image style={[styles.icon, styles.elemMarging]} source={icons.windIcon} />
        </View>
        <View style={styles.block}>
          <Text style={[fontStyles.regular, styles.elemMarging]}>Humidity</Text>
          <Text style={[fontStyles.regular, styles.elemMarging]}>Pressure</Text>
          <Text style={[fontStyles.regular, styles.elemMarging]}>Wind</Text>
        </View>
        <View style={styles.block}>
          <Text style={[fontStyles.bold16, styles.elemMarging]}>{`${humidity}%`}</Text>
          <Text style={[fontStyles.bold16, styles.elemMarging]}>{`${pressure}hPa`}</Text>
          <Text style={[fontStyles.bold16, styles.elemMarging]}>{`${wind}mps`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  block: {
    marginHorizontal: 5,
  },
  tempContainer: {
    flexDirection: 'row',
  },
  tempBlock: { flexDirection: 'row', marginHorizontal: 5, marginVertical: 6 },
  tempText: {
    marginLeft: 8,
  },
  arrowUp: {
    transform: [{ rotateZ: '180deg' }],
  },
  elemMarging: {
    marginBottom: 8,
  },
});
