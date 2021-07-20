export type CalendarWeatherListElemType = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain: number;
};

export type CalendarWeatherDataType = {
  list: Array<CalendarWeatherListElemType>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
  };
};

export enum CalendarWeatherActionTypes {
  FETCH_CALENDAR_WEATHER_SUCCESS = 'FETCH_CALENDAR_WEATHER_SUCCESS',
  FETCH_CALENDAR_WEATHER_REQUEST = 'FETCH_CALENDAR_WEATHER_REQUEST',
  FETCH_CALENDAR_WEATHER_FAILURE = 'FETCH_CALENDAR_WEATHER_FAILURE',
}

export type CalendarWeatherState = {
  pending: boolean;
  error: null | string;
  data: CalendarWeatherDataType | null;
};

export type FetchCalendarWeatherSuccessPayload = {
  data: CalendarWeatherDataType;
};
export type FetchCalendarWeatherFailurePayload = string;

export type FetchCalendarWeatherRequestAction = {
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_REQUEST;
};

export type FetchCalendarWeatherSuccessAction = {
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_SUCCESS;
  payload: FetchCalendarWeatherSuccessPayload;
};

export type FetchCalendarWeatherFailureAction = {
  type: CalendarWeatherActionTypes.FETCH_CALENDAR_WEATHER_FAILURE;
  payload: FetchCalendarWeatherFailurePayload;
};

export type CalendarWeatherAction =
  | FetchCalendarWeatherRequestAction
  | FetchCalendarWeatherSuccessAction
  | FetchCalendarWeatherFailureAction;
