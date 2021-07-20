export type WeatherForFiveDaysListElemType = {
  dt_txt: string;
  dt: number;
  visibility: number;
  pop: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  sys: { pod: string };
};

export type WeatherForFiveDaysDataType = {
  list: Array<WeatherForFiveDaysListElemType>;
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
    sunrise: number;
    sunset: number;
  };
};

export enum WeatherForFiveDaysActionTypes {
  FETCH_WEATHER_FOR_FIVE_DAYS_SUCCESS = 'FETCH_WEATHER_FOR_FIVE_DAYS_SUCCESS',
  FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST = 'FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST',
  FETCH_WEATHER_FOR_FIVE_DAYS_FAILURE = 'FETCH_WEATHER_FOR_FIVE_DAYS_FAILURE',
}

export type WeatherForFiveDaysState = {
  pending: boolean;
  error: null | string;
  data: WeatherForFiveDaysDataType | null;
};

export type FetchWeatherForFiveDaysSuccessPayload = {
  data: WeatherForFiveDaysDataType;
};
export type FetchWeatherForFiveDaysFailurePayload = string;

export type FetchWeatherForFiveDaysRequestAction = {
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_REQUEST;
};

export type FetchWeatherForFiveDaysSuccessAction = {
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_SUCCESS;
  payload: FetchWeatherForFiveDaysSuccessPayload;
};

export type FetchWeatherForFiveDaysFailureAction = {
  type: WeatherForFiveDaysActionTypes.FETCH_WEATHER_FOR_FIVE_DAYS_FAILURE;
  payload: FetchWeatherForFiveDaysFailurePayload;
};

export type WeatherForFiveDaysAction =
  | FetchWeatherForFiveDaysRequestAction
  | FetchWeatherForFiveDaysSuccessAction
  | FetchWeatherForFiveDaysFailureAction;
