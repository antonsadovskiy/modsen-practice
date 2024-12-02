import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.mobileContentMarginTop};
    margin-bottom: ${({ theme }) => theme.mobileContentMarginBottom};

    gap: ${({ theme }) => theme.s};
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
  flex-direction: column;
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
