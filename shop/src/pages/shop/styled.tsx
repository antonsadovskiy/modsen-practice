import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 250px;
`;

const PageTitle = styled.div`
  font: var(--h1);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.large}) {
    font: var(--h5);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-start;
  position: relative;
`;
const Filters = styled.div`
  position: sticky;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: 144px;
`;
const Selects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Price = styled.div`
  margin-top: 8px;
  font: var(--body-medium);
  color: ${({ theme }) => theme.color.darkGray};
`;

const Catalog = styled.div`
  width: 80%;
  display: flex;
  column-gap: 24px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NoData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font: var(--h4);
  color: ${({ theme }) => theme.mainTextColor};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default {
  Wrapper,
  PageTitle,
  Content,
  Filters,
  Selects,
  Price,
  Catalog,
  NoData,
  ButtonContainer,
};
