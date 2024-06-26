import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  min-height: calc(100vh - 17px - 42px - 64px - 160px - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mainTextColor};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 24px;
  font: var(--h1);

  @media screen and (max-width: ${breakpoints.medium}) {
    font: var(--h1-mobile);
  }
`;
const Caption = styled.div`
  font: var(--h3);
  text-align: center;
  margin-bottom: 64px;
  white-space: pre-wrap;

  @media screen and (max-width: ${breakpoints.medium}) {
    font: var(--h3-mobile);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default { Caption, Title, Content, Wrapper, ButtonContainer };
