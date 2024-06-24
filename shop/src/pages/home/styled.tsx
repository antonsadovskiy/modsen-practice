import styled from "styled-components";

import { breakpoints } from "@/constants/styles";
export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 250px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 100px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 646px;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 440px;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 64px 0 40px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 21px 0 13px;
  }
`;
export const Title = styled.div`
  font: var(--h1);
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h5);
  }
`;
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  row-gap: 79px;
  column-gap: 54px;

  @media screen and (max-width: ${breakpoints.medium}) {
    column-gap: 16px;
    justify-content: space-around;
    row-gap: 24px;
  }
`;

export const ViewAllLink = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-700);
  color: ${({ theme }) => theme.color.accent};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--body-medium);
  }

  &:hover {
    color: ${({ theme }) => theme.mainTextColor};
  }
`;

export default {
  ViewAllLink,
  List,
  Title,
  TitleContainer,
  SwiperContainer,
  Wrapper,
};
