import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

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
  justify-content: center;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  MainInfoContainer,
  Wrapper,
};
