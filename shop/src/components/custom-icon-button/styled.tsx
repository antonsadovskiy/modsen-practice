import styled from "styled-components";

const IconButtonContainer = styled.button<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};
`;

export default { IconButtonContainer };
