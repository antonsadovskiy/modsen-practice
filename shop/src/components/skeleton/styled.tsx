import styled from "styled-components";

const Wrapper = styled.div<{ $height?: number; $width?: number }>`
  height: ${({ $height }) => ($height ? `${$height}px` : "116px")};
  width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
  border-radius: ${({ theme }) => theme.xs};
  background: ${({ theme }) => `linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    ${theme.color.lightGray}`};
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
  @keyframes loading {
    to {
      background-position-x: -20%;
    }
  }
`;

export default { Wrapper };
