import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 17px - 42px - 64px - 160px - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  margin-bottom: 24px;
  font: var(--h1);
`;
export const Caption = styled.div`
  font: var(--h3);
  text-align: center;
  margin-bottom: 64px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default { Caption, Title, NotFound, Wrapper, ButtonContainer };
