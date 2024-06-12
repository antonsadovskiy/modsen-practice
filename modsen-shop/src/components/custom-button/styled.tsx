import styled from 'styled-components';
import { ButtonSize, ButtonVariant } from './index';

export const Button = styled.button<{
  $size: ButtonSize;
  $isFullWidth: boolean;
  $variant: ButtonVariant;
}>`
  cursor: pointer;
  font: var(--body-large);
  padding: 16px 49px;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: ${({ theme, $variant }) => {
    if ($variant === 'primary') {
      return 'transparent';
    }
    if ($variant === 'secondary') {
      return `0 0 0 1px ${theme.color.black}`;
    }
  }};
  color: ${({ theme, $variant }) => {
    if ($variant === 'primary') {
      return theme.color.white;
    }
    return theme.color.black;
  }};
  background-color: ${({ theme, $variant }) => {
    if ($variant === 'primary') {
      return theme.color.black;
    }
    return theme.color.white;
  }};

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, $variant }) => {
      if ($variant === 'primary') {
        return theme.color.white;
      }
      return theme.color.black;
    }};
    color: ${({ theme, $variant }) => {
      if ($variant === 'primary') {
        return theme.color.black;
      }
      return theme.color.white;
    }};
  }
`;
