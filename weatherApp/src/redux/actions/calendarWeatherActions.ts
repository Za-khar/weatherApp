import {
  FetchCalendarWeatherRequestAction,
  CalendarWeatherActionTypes,
  FetchCalendarWeatherSuccessPayload,
  FetchCalendarWeatherSuccessAction,
  FetchCalendarWeatherFailurePayload,
  FetchCalendarWeatherFailureAction,
} from '../../types';

export const fetchCalendarWeatherRequest = (): FetchCalendarWeatherRequestAction => ({
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_REQUEST,
});

export const fetchCalendarWeatherSuccess = (
  payload: FetchCalendarWeatherSuccessPayload,
): FetchCalendarWeatherSuccessAction => ({
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_SUCCESS,
  payload,
});

export const fetchCalendarWeatherFailure = (
  payload: FetchCalendarWeatherFailurePayload,
): FetchCalendarWeatherFailureAction => ({
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_FAILURE,
  payload,
});
