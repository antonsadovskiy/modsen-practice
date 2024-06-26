import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  text-align: center;
`;

const Title = styled.div`
  font: var(--h3);
`;

const Caption = styled.div`
  font: var(--h5);
`;

export default { Wrapper, Title, Caption };
