import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Container = styled.div`
  display: none;

  @media (max-width: ${breakpoints.small}) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.s};
  }
`;
const Title = styled.div`
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

const ArrowContainer = styled.div<{ $isRotated: boolean }>`
  display: flex;
  transition: all 0.3s ease;
  align-items: center;
  justify-content: center;
  transform: ${({ $isRotated }) =>
    $isRotated ? "rotate(180deg)" : "rotate(0)"};
`;

const Description = styled.div`
  font: var(--body-small-mobile);
  color: ${({ theme }) => theme.color.darkGray};
`;

export default { Container, Description, Title, ArrowContainer };
