import { WeatherForFiveDaysActionTypes, WeatherForFiveDaysDataType } from '../../types';
import axios from 'axios';
import { fetchWeatherForFiveDaysSuccess, fetchWeatherForFiveDaysFailure } from '../actions/weatherForFiveDaysActions';
import { all, call, put, takeEvery } from '@redux-saga/core/effects';

const options = {
  params: { q: 'Sumy, UA' },
  headers: {
    'x-rapidapi-key': '3a8725da34msh6cf7bf4863a0b9cp15b621jsndaf4e64047c1',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  },
};

const getWeatherForFiveDays = () =>
  axios.get<{ data: WeatherForFiveDaysDataType }>(
    'https://community-open-weather-map.p.rapidapi.com/forecast',
    options,
  );

function* fetchWeatherForFiveDaysSaga() {
  try {
    const response: { data: WeatherForFiveDaysDataType } = yield call(getWeatherForFiveDays);
    yield put(fetchWeatherForFiveDaysSuccess({ data: response.data }));
  } catch (e) {
    yield put(fetchWeatherForFiveDaysFailure(e.message));
  }
}

function* weatherForFiveDaysSaga() {
  yield all([
    takeEvery(WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST, fetchWeatherForFiveDaysSaga),
  ]);
}

export default weatherForFiveDaysSaga;
