import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  display: none;
  font: var(--body-small-mobile);
  color: ${({ theme }) => theme.color.accent};
  align-items: flex-start;
  gap: 8px;
  flex-direction: column;

  width: 100%;
  @media screen and (max-width: ${breakpoints.large}) {
    display: flex;
  }
`;

const FiltersTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
export default {
  Container,
  Price,
  Selects,
  FiltersTitle,
  ButtonContainer,
  PriceContainer,
};
