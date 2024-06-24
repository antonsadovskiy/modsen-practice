import styled from "styled-components";

export const Input = styled.input<{
  $isWithEndIcon: boolean;
}>`
  font-weight: var(--font-weight-400);
  font-size: var(--font-size-12);
  line-height: var(--line-height-16);
  font-family: var(--font-family-dm-sans);

  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: transparent;

  padding: ${({ $isWithEndIcon }) => {
    if ($isWithEndIcon) {
      return `8px 20px 8px 0`;
    }
    return `8px 0 8px 0`;
  }};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};

  ::placeholder {
    color: ${({ theme }) => `${theme.color.darkGray}`};
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
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

  color: ${({ theme }) => `${theme.mainTextColor}`};
`;

export const Wrapper = styled.div<{
  $isFullWidth: boolean;
  $disabled?: boolean;
}>`
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  width: ${({ $isFullWidth }) => ($isFullWidth ? "100%" : "auto")};

  position: relative;
  display: flex;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
  }
  .clickable {
    cursor: pointer;
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
export default { Input, Wrapper, Error };
