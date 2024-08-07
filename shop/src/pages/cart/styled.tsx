import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};
  margin-top: ${({ theme }) => theme.desktopContentMarginTop};
  margin-bottom: ${({ theme }) => theme.desktopContentMarginBottom};

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.mobileContentMarginTop};
    margin-bottom: ${({ theme }) => theme.mobileContentMarginBottom};
  }
`;

const TitleContainer = styled.div`
  font: var(--h1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3);
  }
`;
const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => theme.l};
  column-gap: 54px;
  justify-content: center;
`;
const NoData = styled.div`
  font: var(--h4);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;
const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export default {
  Wrapper,
  TitleContainer,
  ProductsContainer,
  NoData,
  CartContainer,
};
