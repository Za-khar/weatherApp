import { WeatherForFiveDaysActionTypes, WeatherForFiveDaysAction, WeatherForFiveDaysState } from '../../types';

const initialState: WeatherForFiveDaysState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: WeatherForFiveDaysAction) => {
  switch (action.type) {
    case WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST:
      return { pending: true, data: null, error: null };
    case WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_SUCCESS:
      return { pending: false, data: action.payload.data, error: null };
    case WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_FAILURE:
      return { pending: false, data: null, error: action.payload };
    default:
      return state;
  }
};
