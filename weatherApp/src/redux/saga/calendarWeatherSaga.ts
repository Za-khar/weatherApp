import { CalendarWeatherActionTypes, CalendarWeatherDataType } from '../../types';
import axios from 'axios';
import { fetchCalendarWeatherSuccess, fetchCalendarWeatherFailure } from '../actions/calendarWeatherActions';
import { all, call, put, takeEvery } from '@redux-saga/core/effects';

var options = {
  params: { q: 'Sumy, UA', cnt: '16' },
  headers: {
    'x-rapidapi-key': '3a8725da34msh6cf7bf4863a0b9cp15b621jsndaf4e64047c1',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  },
};

const getCalendarWeather = () =>
  axios.get<{ data: CalendarWeatherDataType }>(
    'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
    options,
  );

function* fetchCalendarWeatherSaga() {
  try {
    const response: { data: CalendarWeatherDataType } = yield call(getCalendarWeather);
    yield put(fetchCalendarWeatherSuccess({ data: response.data }));
  } catch (e) {
    yield put(fetchCalendarWeatherFailure(e.message));
  }
}

function* calendarWeatherSaga() {
  yield all([takeEvery(CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_REQUEST, fetchCalendarWeatherSaga)]);
}

export default calendarWeatherSaga;
