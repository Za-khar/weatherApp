import React, { useState, useCallback } from 'react';
import { SectionList } from 'react-native';
import { SectionItem, SectionHeader } from './components';
import { CustomSectionListPropTypes, TOnRefresh, THandlePress } from './types';
import { useTypedSelector } from '../../hooks';

export const CustomSectionList: React.FC<CustomSectionListPropTypes> = ({ data, setRefresh }) => {
  const [showDetails, setShowDetails] = useState<Array<string>>([]);
  const { pending } = useTypedSelector(state => state.weatherForFiveDays);

  const handlePress = useCallback<THandlePress>(
    title => {
      if (showDetails.includes(title)) {
        setShowDetails(prev => prev.filter(elem => elem !== title));
      } else {
        setShowDetails(prev => [...prev, title]);
      }
    },
    [showDetails],
  );

  const onRefresh = useCallback<TOnRefresh>(() => {
    setRefresh((prev: boolean) => !prev);
  }, [setRefresh]);

  return (
    <SectionList
      onRefresh={onRefresh}
      refreshing={pending}
      sections={data}
      keyExtractor={(item, index) => item.toString() + index}
      renderItem={({ item, index, section: { title } }) => {
        return showDetails.includes(title) ? <SectionItem item={item} index={index} /> : null;
      }}
      renderSectionHeader={({ section: { title } }) => (
        <SectionHeader title={title} showDetails={showDetails} onPress={handlePress} />
      )}
    />
  );
};
