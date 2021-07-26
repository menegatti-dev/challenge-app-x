import React from 'react';

import { Container, ButtonContainer, Item, Text, Logo } from './styles';

interface TableItemProps {
  type: 'header' | 'line';
  logo?: string;
  classification: string | number;
  name: string | number;
  points: string | number;
  wins: string | number;
  draw: string | number;
  losers: string | number;
  golsDiff: string | number;
  onPress?(): void;
}

const TableItem: React.FC<TableItemProps> = ({
  type,
  classification,
  name,
  points,
  wins,
  losers,
  draw,
  golsDiff,
  logo,
  onPress,
}) => {
  const Items = () => (
    <>
      <Item flex={0.7}>
        <Text>{classification}</Text>
      </Item>
      <Item flex={5}>
        {logo && <Logo source={{ uri: logo }} />}
        <Text>{name}</Text>
      </Item>
      <Item flex={1}>
        <Text>{points}</Text>
      </Item>
      <Item flex={1}>
        <Text>{wins}</Text>
      </Item>
      <Item flex={1}>
        <Text>{losers}</Text>
      </Item>
      <Item flex={1}>
        <Text>{draw}</Text>
      </Item>
      <Item flex={1}>
        <Text>{golsDiff}</Text>
      </Item>
    </>
  );
  if (type === 'header') {
    return (
      <Container>
        <Items />
      </Container>
    );
  }
  if (type === 'line') {
    return (
      <ButtonContainer onPress={onPress}>
        <Items />
      </ButtonContainer>
    );
  }

  return <></>;
};

export default TableItem;
