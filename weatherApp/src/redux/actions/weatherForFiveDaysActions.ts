import {
  FetchWeatherForFiveDaysRequestAction,
  WeatherForFiveDaysActionTypes,
  FetchWeatherForFiveDaysSuccessPayload,
  FetchWeatherForFiveDaysSuccessAction,
  FetchWeatherForFiveDaysFailurePayload,
  FetchWeatherForFiveDaysFailureAction,
} from '../../types';

export const fetchWeatherForFiveDaysRequest = (): FetchWeatherForFiveDaysRequestAction => ({
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST,
});

export const fetchWeatherForFiveDaysSuccess = (
  payload: FetchWeatherForFiveDaysSuccessPayload,
): FetchWeatherForFiveDaysSuccessAction => ({
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_SUCCESS,
  payload,
});

export const fetchWeatherForFiveDaysFailure = (
  payload: FetchWeatherForFiveDaysFailurePayload,
): FetchWeatherForFiveDaysFailureAction => ({
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_FAILURE,
  payload,
});
