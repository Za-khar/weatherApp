import { all, fork } from '@redux-saga/core/effects';
import calendarWeatherSaga from './calendarWeatherSaga';
import weatherForFiveDaysSaga from './weatherForFiveDaysSaga';

export function* rootSaga() {
  yield all([fork(weatherForFiveDaysSaga), fork(calendarWeatherSaga)]);
}
