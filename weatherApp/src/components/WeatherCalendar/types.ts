import { CalendarWeatherListElemType } from '../../types';

export type WeatherCalendarBlockPropTypes = {
  setViewDateIndex: (elem: number) => void;
};

export type TDataList = Array<{ id: string; title: CalendarWeatherListElemType }> | undefined;
