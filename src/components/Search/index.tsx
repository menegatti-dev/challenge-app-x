import React from 'react';

import { Search as SearchIcon } from 'react-native-feather';
import { useTheme } from 'styled-components';
import { Container, Input } from './styles';

interface SearchProps {
  placeholder?: string;
  onChangeText(value: string): void;
  value: string;
}

const Search: React.FC<SearchProps> = ({ placeholder, value, onChangeText }) => {
  const { colors } = useTheme();
  return (
    <Container>
      <SearchIcon color={value.length > 0 ? colors.white : colors.darkGray} height={16} width={16} />
      <Input
        placeholder={placeholder || 'Pesquise...'}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.darkGray}
      />
    </Container>
  );
};

export { Search };
