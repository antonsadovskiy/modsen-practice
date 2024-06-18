import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";

export const SwitchRoot = styled(Switch.Root)`
  cursor: pointer;
  width: 42px;
  height: 25px;
  background-color: #78788029;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px var(--black-a7);

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 50%;
  box-shadow: ${({ theme }) => `0 0px 3px ${theme.color.black}`};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`;

export default { SwitchRoot, SwitchThumb };
