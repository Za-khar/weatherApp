import React, { useMemo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../../../hooks';
import { CalendarWeatherState } from '../../../../types';
import { CustomWeatherIcon } from '../../../CustomWeatherIcon';
import { WeatherCalendarBlockItemPropTypes } from './types';
import { fontStyles } from '../../../../styles';
import moment from 'moment';
import { converKelvinToCelsius } from '../../../../config/converter';

export const WeatherCalendarBlockItem: React.FC<WeatherCalendarBlockItemPropTypes> = ({ setViewDateIndex, index }) => {
  const { data }: CalendarWeatherState = useTypedSelector(state => state.calendarWeather);

  const date = useMemo<string>(
    () => (data ? moment(new Date(data.list[index].dt * 1000)).format('MMM Do YY') : ''),
    [data, index],
  );

  if (!data) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.calendarItem} onPress={() => setViewDateIndex(index)}>
      <Text style={fontStyles.regular}>{date}</Text>
      <CustomWeatherIcon height={70} width={70} code={data.list[index].weather[0].icon} receiveSize={2} />
      <Text style={fontStyles.bold16}>{converKelvinToCelsius(data.list[index].temp.day)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  calendarItem: {
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 8,
    borderRadius: 10,
  },
});
