import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled.div`
  font: var(--h2);
  color: ${({ theme }) => theme.mainTextColor};
`;

export default {
  Wrapper,
  Title,
};
