import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  margin-top: 145px;
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 40px;
    margin-bottom: 100px;
    gap: 30px;
  }
`;

const MainInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 62px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

export default {
  MainInfoContainer,
  Wrapper,
};
