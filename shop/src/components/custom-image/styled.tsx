import styled from "styled-components";

const Image = styled.img<{ $isLoaded: boolean }>`
  filter: ${({ $isLoaded }) => ($isLoaded ? "blur(0)" : "blur(5px)")};

  transition: filter 0.3s ease;
`;

export default { Image };
