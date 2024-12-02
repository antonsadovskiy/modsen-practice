import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;

  @media screen and (max-width: ${breakpoints.large}) {
    display: none;
  }
`;
const Selects = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const Price = styled.div`
  margin-top: ${({ theme }) => theme.xs};
  font: var(--body-medium);
  color: ${({ theme }) => theme.color.darkGray};
`;

const ButtonContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

export default {
  Container,
  Selects,
  Price,
  ButtonContainer,
};
