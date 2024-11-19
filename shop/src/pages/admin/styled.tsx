import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  min-height: calc(100vh - 17px - 42px - 64px - 160px - 90px);
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export default {
  Wrapper,
};
