import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, SafeAreaView, RefreshControl, ScrollView } from 'react-native';
import { WeatherCalendarBlock } from '../../components/WeatherCalendar';
import { WeatherInfoBlock } from '../../components/WeatherInfoBlock';
import { fetchCalendarWeatherRequest } from '../../redux/actions/calendarWeatherActions';
import { colors } from '../../styles';
import { CustomImageBackground } from '../../components/CustomImageBackground';
import images from '../../assets/images';
import { useTypedSelector } from '../../hooks';
import { CalendarWeatherState } from '../../types';
import { OnRefreshType } from './types';
import { CustomActivityIndicator } from '../../components/CustomActivityIndicator';
import { CustomStatusBar } from '../../components/CustomStatusBar';

export const WeatherCalendar: React.FC = () => {
  const [viewDateIndex, setViewDateIndex] = useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const { error, pending }: CalendarWeatherState = useTypedSelector(state => state.calendarWeather);
  const dispatch = useDispatch();

  const onRefresh = React.useCallback<OnRefreshType>(() => {
    setRefreshing(true);
  }, [setRefreshing]);

  useEffect(() => {
    dispatch(fetchCalendarWeatherRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <CustomImageBackground image={images.backgroundImages.bgSky}>
        {pending && <CustomActivityIndicator />}
        {!error && !pending && (
          <ScrollView
            style={styles.scroll}
            refreshControl={<RefreshControl refreshing={pending} onRefresh={onRefresh} />}>
            <WeatherInfoBlock dateIndex={viewDateIndex} />
            <WeatherCalendarBlock setViewDateIndex={setViewDateIndex} />
          </ScrollView>
        )}
      </CustomImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
  },
});
