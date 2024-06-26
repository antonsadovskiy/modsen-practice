import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  position: sticky;
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  top: 144px;
  z-index: 10;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media screen and (max-width: ${breakpoints.large}) {
    display: none;
  }
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

export default {
  Container,
  Selects,
  Price,
  ButtonContainer,
};
