import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 250px;
`;

const TitleContainer = styled.div`
  font: var(--h1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 54px;
  justify-content: center;
`;
const NoData = styled.div`
  font: var(--h4);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
