import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks';
import { fetchWeatherForFiveDaysRequest } from '../../redux/actions/weatherForFiveDaysActions';
import { colors } from '../../styles';
import { WeatherForFiveDaysListElemType, WeatherForFiveDaysState } from '../../types';
import { CustomStatusBar } from '../../components/CustomStatusBar';
import { CustomSectionList } from '../../components/CustomSectionList';
import { monthNames } from '../../config/dateInfo';
import { CustomImageBackground } from '../../components/CustomImageBackground';
import images from '../../assets/images';
import { useMemo } from 'react';
import { listDataType } from './types';
import { CustomActivityIndicator } from '../../components/CustomActivityIndicator';

export const FiveDaysWeather: React.FC = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState<boolean>(false);
  const { data, error, pending }: WeatherForFiveDaysState = useTypedSelector(state => state.weatherForFiveDays);

  useEffect(() => {
    dispatch(fetchWeatherForFiveDaysRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const LISTDATA = useMemo<listDataType | undefined>(() => {
    return data?.list.reduce((accum: listDataType, currenValue: WeatherForFiveDaysListElemType) => {
      const index = accum.findIndex(
        ({ title }) =>
          title ===
          `${monthNames[+new Date(currenValue.dt * 1000).getMonth()]} ${new Date(currenValue.dt * 1000)
            .getDate()
            .toString()}`,
      );

      if (index > -1) {
        accum[index].data.push(currenValue);
        return accum;
      } else {
        return [
          ...accum,
          {
            title: `${monthNames[+new Date(currenValue.dt * 1000).getMonth()]} ${new Date(currenValue.dt * 1000)
              .getDate()
              .toString()}`,
            data: [currenValue],
          },
        ];
      }
    }, []);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomStatusBar />
      <CustomImageBackground image={images.backgroundImages.bgBlue}>
        {pending && <CustomActivityIndicator />}
        {!error && !pending && LISTDATA && <CustomSectionList data={LISTDATA} setRefresh={setRefresh} />}
      </CustomImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
