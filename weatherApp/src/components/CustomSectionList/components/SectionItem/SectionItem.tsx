import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors, fontStyles } from '../../../../styles';
import { Line } from '../../../Line';
import { SectionItemPropTypes } from './types';
import { SectionItemTextInfo } from './SectionItemTextInfo';
import { dayOfWeek } from '../../../../config/dateInfo';
import { CustomWeatherIcon } from '../../../CustomWeatherIcon';
import { converKelvinToCelsius } from '../../../../config/converter';
import moment from 'moment';

export const SectionItem: React.FC<SectionItemPropTypes> = ({ index, item }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <Text style={[fontStyles.bold24, styles.title]}>
        {dayOfWeek[new Date(item.dt * 1000).getDay()] + ' ' + moment(new Date(item.dt * 1000)).format('HH:mm')}
      </Text>
      <Line />
      <View style={styles.sectionContainer}>
        <View style={styles.iconContainer}>
          <CustomWeatherIcon height={100} width={100} code={item.weather[0].icon} receiveSize={2} />
          <Text style={fontStyles.bold16}>{item.weather[0].main}</Text>
        </View>
        <View style={styles.infoContainer}>
          <SectionItemTextInfo leftText={'Temperature'} rightText={converKelvinToCelsius(item.main.temp)} />
          <SectionItemTextInfo leftText={'Feels like'} rightText={converKelvinToCelsius(item.main.feels_like)} />
          <SectionItemTextInfo leftText={'Pressure'} rightText={`${item.main.pressure}hPa`} />
          <SectionItemTextInfo leftText={'Humidity'} rightText={`${item.main.humidity}%`} />
          <SectionItemTextInfo leftText={'Wind'} rightText={`${item.wind.speed}mps`} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.dark,
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    marginBottom: 10,
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 2,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
