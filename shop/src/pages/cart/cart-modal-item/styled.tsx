import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.s};
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  text-align: left;
`;
const Image = styled.img`
  max-width: 150px;
  min-width: 150px;
  height: 150px;
  object-fit: scale-down;
`;

const Title = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};
`;
const Description = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;

const Price = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;

export default { Wrapper, Image, Info, Title, Description, Price };
