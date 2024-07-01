import styled from "styled-components";

import { ButtonSize, ButtonVariant } from "./index";

const Button = styled.button<{
  $size: ButtonSize;
  $isFullWidth: boolean;
  $variant: ButtonVariant;
}>`
  width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "auto")};
  text-align: center;
  cursor: pointer;
  font: var(--body-large);
  padding: 16px 49px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.xxs};
  box-shadow: ${({ theme, $variant }) => {
    if ($variant === "primary") {
      return "transparent";
    }
    if ($variant === "secondary") {
      return `0 0 0 1px ${theme.color.black}`;
    }
  }};
  color: ${({ theme, $variant }) => {
    if ($variant === "primary") {
      return theme.color.white;
    }
    return theme.color.black;
  }};
  background-color: ${({ theme, $variant }) => {
    if ($variant === "primary") {
      return theme.color.black;
    }
    return theme.color.white;
  }};

  transition: all 0.3s ease;

  --loader-color: ${({ theme, $variant }) => {
    if ($variant === "primary") {
      return theme.color.white;
    }
    return theme.color.black;
  }};

  &:hover {
    --loader-color: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return theme.color.black;
      }
      return theme.color.white;
    }};

    background-color: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return theme.color.white;
      }
      return theme.color.black;
    }};
    color: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return theme.color.black;
      }
      return theme.color.white;
    }};
    box-shadow: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return `0 0 0 1px ${theme.color.black}`;
      }
    }};
  }
  &:active {
    background-color: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return theme.color.lightGray;
      }
      return theme.color.darkGray;
    }};
    color: ${({ theme, $variant }) => {
      if ($variant === "primary") {
        return theme.color.black;
      }
      return theme.color.white;
    }};
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default { Button };
