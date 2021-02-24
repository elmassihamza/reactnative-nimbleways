import styled from 'styled-components/native';

export default styled.TextInput`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 5px;
  width: 100%;
  padding: ${({theme}) => theme.spacing.md}px;
  margin: ${({theme}) => theme.spacing.lg}px;
`;
