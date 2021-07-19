import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.black};
  flex-direction: row;
  width: 100%;
  padding: 16px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.white};
`;
