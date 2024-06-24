import styled from "styled-components";

export const SwitchRoot = styled.div<{ $isChecked: boolean }>`
  cursor: pointer;
  width: 42px;
  height: 25px;
  background-color: #78788029;
  border-radius: 9999px;
  position: relative;
  display: flex;
  align-items: center;

  ${({ $isChecked, theme }) =>
    $isChecked && `background-color: ${theme.color.darkGray};`}
`;

export const SwitchThumb = styled.div<{ $isChecked: boolean }>`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 50%;
  box-shadow: ${({ theme }) => `0 0px 3px ${theme.color.black}`};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  ${({ $isChecked }) => $isChecked && `transform: translateX(19px);`}
`;

export default { SwitchRoot, SwitchThumb };
