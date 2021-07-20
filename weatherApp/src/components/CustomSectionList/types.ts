import { WeatherForFiveDaysListElemType } from '../../types';

export type CustomSectionListPropTypes = {
  data: Array<{ title: string; data: Array<WeatherForFiveDaysListElemType> }>;
  setRefresh: (prop: (prev: boolean) => boolean) => void;
};

export type THandlePress = (title: string) => void;
export type TOnRefresh = () => void;
