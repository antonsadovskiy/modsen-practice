import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.xxl};

  @media (max-width: ${breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.mobileContentMarginTop};
    margin-bottom: ${({ theme }) => theme.mobileContentMarginBottom};

    gap: 30px;
  }
`;

const MainInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.l};
  justify-content: space-around;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  MainInfoContainer,
  Wrapper,
};
