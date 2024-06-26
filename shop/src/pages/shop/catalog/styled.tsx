import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  width: 80%;
  display: flex;
  column-gap: 24px;
  row-gap: 70px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 100%;
  }
`;
const NoData = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font: var(--h4);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;

export default { Container, NoData };
