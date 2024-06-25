import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const SimilarItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 54px;
  flex-direction: column;
`;

const Title = styled.div`
  font: var(--h2);
  color: ${({ theme }) => theme.mainTextColor};

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    text-align: center;
    font: var(--h5);
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 54px;
  width: 100%;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;
export default { Title, List, SimilarItems };
