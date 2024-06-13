import styled from "styled-components";
import { ComponentProps } from "react";

export const Input = styled.input<{ $type: ComponentProps<"input">["type"] }>`
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-12);
  line-height: var(--line-height-16);
  font-family: var(--font-family-dm-sans);
  color: ${({ theme }) => `${theme.color.black}`};
  width: 100%;
  padding: ${({ $type }) => {
    if ($type === "search") {
      return `8px 20px 8px 0`;
    }
    return `8px 0 8px 0`;
  }};
  box-shadow: ${({ theme }) => ` 0 1px 0 0 ${theme.color.gray}`};

  ::placeholder {
    color: ${({ theme }) => `${theme.color.darkGray}`};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
  }
`;

export const Wrapper = styled.div<{ $isFullWidth: boolean }>`
  width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "auto")};

  position: relative;
  display: flex;
  align-items: center;

  .icon {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
`;
