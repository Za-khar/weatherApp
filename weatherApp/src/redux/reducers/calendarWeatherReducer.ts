import { CalendarWeatherState, CalendarWeatherAction, CalendarWeatherActionTypes } from '../../types';

const initialState: CalendarWeatherState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: CalendarWeatherAction) => {
  switch (action.type) {
    case CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_REQUEST:
      return { pending: true, data: null, error: null };
    case CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_SUCCESS:
      return { pending: false, data: action.payload.data, error: null };
    case CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_FAILURE:
      return { pending: false, data: null, error: action.payload };
    default:
      return state;
  }
};
