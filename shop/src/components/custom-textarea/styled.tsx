import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

export const Wrapper = styled.div<{
  $isFullWidth: boolean;
  $disabled: boolean;
}>`
  position: relative;
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "auto")};
`;

export const Textarea = styled.textarea`
  width: 100%;
  word-wrap: break-word;
  font: var(--h5);
  color: ${({ theme }) => `${theme.mainTextColor}`};
  padding: ${({ theme }) => `${theme.xs} 0 ${theme.xs} 0`};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--body-small-mobile);
  }

  ::placeholder {
    color: ${({ theme }) => `${theme.color.darkGray}`};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: ${({ theme }) =>
      `0 0 0 30px ${theme.backgroundColor} inset !important`};
    -webkit-text-fill-color: ${({ theme }) =>
      `${theme.mainTextColor} !important`};
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -22px;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-10);
  color: ${({ theme }) => `${theme.color.error}`};
`;

export default { Wrapper, Textarea, Error };
