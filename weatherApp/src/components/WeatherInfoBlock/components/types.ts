export type WeatherInfoBlockItemPropTypes = {
  time?: string;
  temp: number | string;
  feelsLike: number | string;
  first?: boolean;
};

export type WeatherInfoBlockDetailsPropTypes = {
  minTemp: number;
  maxTemp: number;
  humidity: number;
  pressure: number;
  wind: number;
};
