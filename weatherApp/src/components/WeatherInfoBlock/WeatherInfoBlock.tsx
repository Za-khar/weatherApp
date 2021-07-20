import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTypedSelector } from '../../hooks';
import { colors, fontStyles } from '../../styles';
import { CalendarWeatherState } from '../../types';
import { CustomWeatherIcon } from '../CustomWeatherIcon';
import { WeatherInfoBlockPropTypes } from './types';
import Dimensions from '../../config/screenDimensions';
import { WeatherInfoBlockItem, WeatherInfoBlockDetails } from './components';

export const WeatherInfoBlock: React.FC<WeatherInfoBlockPropTypes> = ({ dateIndex }) => {
  const { data }: CalendarWeatherState = useTypedSelector(state => state.calendarWeather);

  if (!data) {
    return null;
  }

  return (
    <View style={styles.weatherInfoContainer}>
      <Text style={[fontStyles.bold18, styles.title]}>
        {moment(new Date(data.list[dateIndex].dt * 1000)).format('dddd, MMMM Do YYYY')}
      </Text>
      <View style={styles.iconBlock}>
        <View style={styles.iconContainer}>
          <CustomWeatherIcon
            height={Dimensions.width * 0.3}
            width={Dimensions.width * 0.4}
            code={data.list[dateIndex].weather[0].icon}
            receiveSize={4}
          />
          <Text style={fontStyles.bold16}>{data.list[dateIndex].weather[0].description}</Text>
        </View>
        <WeatherInfoBlockDetails
          minTemp={data.list[dateIndex].temp.min}
          maxTemp={data.list[dateIndex].temp.max}
          humidity={data.list[dateIndex].humidity}
          pressure={data.list[dateIndex].pressure}
          wind={data.list[dateIndex].speed}
        />
      </View>
      <View style={styles.dayPartsContainer}>
        <WeatherInfoBlockItem temp={'Temp'} feelsLike={'Feel like'} first={true} />
        <WeatherInfoBlockItem
          temp={data.list[dateIndex].temp.morn}
          feelsLike={data.list[dateIndex].feels_like.morn}
          time="morn"
        />
        <WeatherInfoBlockItem
          temp={data.list[dateIndex].temp.day}
          feelsLike={data.list[dateIndex].feels_like.day}
          time="day"
        />
        <WeatherInfoBlockItem
          temp={data.list[dateIndex].temp.eve}
          feelsLike={data.list[dateIndex].feels_like.eve}
          time="eve"
        />
        <WeatherInfoBlockItem
          temp={data.list[dateIndex].temp.night}
          feelsLike={data.list[dateIndex].feels_like.night}
          time="night"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherInfoContainer: {
    height: Dimensions.height * 0.5,
    justifyContent: 'space-around',
    backgroundColor: colors.lightBlue,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1.5,
    alignItems: 'center',
  },
  dayPartsContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '25%',
  },
  title: {
    textAlign: 'center',
  },
});
