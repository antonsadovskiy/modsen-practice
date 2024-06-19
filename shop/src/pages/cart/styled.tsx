import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 250px;
`;

const Title = styled.div`
  font: var(--h1);
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 60px;
  column-gap: 54px;
  justify-content: center;
  width: 75%;
`;
const NoData = styled.div`
  font: var(--h4);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
`;
const BuyContainer = styled.div`
  width: 25%;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;

export default {
  Wrapper,
  Title,
  ProductsContainer,
  NoData,
  CartContainer,
  BuyContainer,
  ButtonContainer,
};
