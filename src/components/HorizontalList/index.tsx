import TableItem from '@/components/TableItem';
import React, { useCallback, useRef } from 'react';
import { FlatList } from 'react-native';
import { FilterCard, FilterCardText, FilterList, ListSeparator, Title } from './styles';

interface HorizontalListProps {
  onChangeValue(value: string): void;
  selected: string;
  values: { id: string; name: string }[];
  title: string;
}

const HorizontalList: React.FC<HorizontalListProps> = ({ onChangeValue, selected, values, title }) => {
  const refFilter = useRef<FlatList<{ id: string; name: string }>>(null);

  const renderItem = useCallback(
    ({ item, index }: { item: { id: string; name: string }; index: number }) => (
      <FilterCard
        active={selected === item.id}
        onPress={() => {
          onChangeValue(item.id);
          refFilter.current?.scrollToIndex({ index });
        }}
      >
        <FilterCardText>{item.name}</FilterCardText>
      </FilterCard>
    ),
    [onChangeValue, selected],
  );

  return (
    <>
      <Title>{title}</Title>
      <FilterList
        data={values}
        horizontal
        ref={refFilter}
        ItemSeparatorComponent={ListSeparator}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
      <TableItem type="header" classification="" name="Nome" points="Pts" wins="V" draw="E" losers="D" golsDiff="DG" />
    </>
  );
};

export { HorizontalList };
