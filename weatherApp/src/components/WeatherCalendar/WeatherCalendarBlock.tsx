import React, { useMemo } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import Dimensions from '../../config/screenDimensions';
import { useTypedSelector } from '../../hooks';
import { colors, fontStyles } from '../../styles';
import { CalendarWeatherListElemType, CalendarWeatherState } from '../../types';
import { WeatherCalendarBlockItem } from './components';
import { TDataList, WeatherCalendarBlockPropTypes } from './types';

export const WeatherCalendarBlock: React.FC<WeatherCalendarBlockPropTypes> = ({ setViewDateIndex }) => {
  const { data }: CalendarWeatherState = useTypedSelector(state => state.calendarWeather);

  const DATA = useMemo<TDataList>(
    () =>
      data?.list.map((elem: CalendarWeatherListElemType) => {
        return { id: elem.dt.toString(), title: elem };
      }),
    [data],
  );

  return (
    <View style={styles.calendarContainer}>
      <Text style={[fontStyles.bold24, styles.title]}>Forcast</Text>
      <View>
        {DATA && (
          <FlatList
            data={DATA}
            keyExtractor={(item: { id: string }) => item.id}
            renderItem={({ index }) => <WeatherCalendarBlockItem setViewDateIndex={setViewDateIndex} index={index} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    height: Dimensions.height * 0.35,
    backgroundColor: colors.lightBlue,
    marginHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 15,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  title: {
    textAlign: 'center',
  },
});
