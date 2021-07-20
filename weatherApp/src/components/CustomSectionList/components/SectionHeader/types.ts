export type SectionHeaderPropTypes = {
  title: string;
  onPress: (title: string) => void;
  showDetails: Array<string>;
};

export type ToggleListItemType = () => void;
