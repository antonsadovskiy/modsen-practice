import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MaxWidthContainer = styled.div`
  min-height: calc(100vh - 114px);
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.maxPossibleWidth}) {
    max-width: 1100px;
  }
  @media screen and (max-width: ${breakpoints.extraLarge}) {
    max-width: 900px;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 750px;
    min-height: calc(100vh - 67px);
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: calc(100vw - 40px);
    padding: ${({ theme }) => `0 ${theme.s}`};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default { LoaderContainer, Content, MaxWidthContainer, Wrapper };
