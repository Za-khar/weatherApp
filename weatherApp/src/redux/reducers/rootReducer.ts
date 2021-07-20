import { combineReducers } from 'redux';
import calendarWeatherReducer from './calendarWeatherReducer';
import weatherForFiveDaysReducer from './weatherForFiveDaysReducer';

const rootReducer = combineReducers({
  weatherForFiveDays: weatherForFiveDaysReducer,
  calendarWeather: calendarWeatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
