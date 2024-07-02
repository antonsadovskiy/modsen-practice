import styled, { keyframes } from "styled-components";

import { breakpoints } from "@/constants/styles";
import { ToastStatusType } from "@/store/slices/app/types";

const slideIn = (corner: "left" | "right") => keyframes`
  0% {
    transform: translateX(${corner === "left" ? "-100%" : "100%"});
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.85;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = (corner: "left" | "right") => keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  25% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  100% {
    transform: translateX(${corner === "left" ? "-100%" : "100%"});
    opacity: 0;
  }
`;

const Wrapper = styled.div<{
  $type: ToastStatusType;
  $isExiting: boolean;
  $index: number;
  $corner: "left" | "right";
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: ${({ theme }) => theme.xs};
  width: 300px;
  height: auto;
  background-color: ${({ $type, theme }) => theme.toastColors[$type]};
  font: var(--h3-mobile);
  border-radius: ${({ theme }) => theme.xxs};
  animation: ${({ $isExiting, $corner }) =>
      $isExiting ? slideOut($corner) : slideIn($corner)}
    0.3s ease;

  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${breakpoints.small}) {
    width: calc(100vw - 40px);
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { Wrapper, Icon };
