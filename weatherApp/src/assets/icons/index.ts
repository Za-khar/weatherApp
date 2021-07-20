import { ImageSourcePropType } from 'react-native';

type iconsType = {
  [data: string]: ImageSourcePropType;
};

const icons: iconsType = {
  arrowDown: require('./logs/arrow.png'),
  whiteUpIcon: require('./logs/white-up-icon.png'),
  humidityIcon: require('./logs/humidity-icon.png'),
  windIcon: require('./logs/wind-icon.png'),
  pressureIcon: require('./logs/pressure-icon.png'),
};

export default icons;
