import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 250px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 40px 0 100px;
    gap: 20px;
  }
`;

const PageTitle = styled.div`
  font: var(--h1);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    flex-direction: column;
  }
`;

export default {
  Wrapper,
  PageTitle,
  Content,
};
