import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 250px;
`;

export const PageTitle = styled.div`
  font: var(--h1);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
  align-items: flex-start;
`;
export const Filters = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Selects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Price = styled.div`
  margin-top: 8px;
  font: var(--body-medium);
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Catalog = styled.div`
  width: 80%;
  display: flex;
  column-gap: 24px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NoData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font: var(--h4);
`;

export const ButtonContainer = styled.div`
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
