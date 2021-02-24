import React from 'react';
import styled from 'styled-components/native';
interface Props {
  title: string;
  onPress: () => void;
}
const Button = ({title, onPress}: Props) => (
  <CustomTouchableOpacity onPress={onPress}>
    <ButtonWrapper>
      <CustomText>{title}</CustomText>
    </ButtonWrapper>
  </CustomTouchableOpacity>
);
export default Button;

const ButtonWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${({theme}) => theme.spacing.md}px;
`;

const CustomText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  text-align: center;
`;

const CustomTouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  margin: ${({theme}) => theme.spacing.md}px;
`;
