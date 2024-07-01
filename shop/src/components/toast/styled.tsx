import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div<{
  $position: "top" | "bottom";
  $corner: "left" | "right";
}>`
  position: fixed;

  ${({ $position }) => {
    switch ($position) {
      case "top":
        return "top: 32px";
      case "bottom":
        return "bottom: 32px";
    }
  }};
  ${({ $corner }) => {
    switch ($corner) {
      case "left":
        return "left: 32px";
      case "right":
        return "right: 32px";
    }
  }};

  z-index: 1000;
  color: black;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.s};

  @media (max-width: ${breakpoints.medium}) {
    ${({ $position }) => {
      switch ($position) {
        case "top":
          return "top: 16px";
        case "bottom":
          return "bottom: 16px";
      }
    }};
    ${({ $corner }) => {
      switch ($corner) {
        case "left":
          return "left: 16px";
        case "right":
          return "right: 16px";
      }
    }};
  }

  @media (max-width: ${breakpoints.small}) {
    left: 50%;
    right: auto;
    bottom: 16px;
    transform: translateX(-50%);

    ${({ $position }) => {
      switch ($position) {
        case "top":
          return "top: 16px";
        case "bottom":
          return "bottom: 16px";
      }
    }};
  }
`;

export default { Wrapper };
