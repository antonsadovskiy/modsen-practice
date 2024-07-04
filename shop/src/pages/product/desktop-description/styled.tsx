import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: ${breakpoints.small}) {
    display: none;
  }
`;
const Title = styled.div`
  padding-bottom: 35px;
  font: var(--h3);
  color: ${({ theme }) => theme.mainTextColor};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};

  @media (max-width: ${breakpoints.small}) {
    font: var(--body-small);
    padding-bottom: ${({ theme }) => theme.s};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Description = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
`;

export default { Container, Description, Title };
