import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 486px;
  width: 100%;

  @media (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;
const ProductTitle = styled.div`
  font: var(--h2);
  color: ${({ theme }) => theme.mainTextColor};

  @media (max-width: ${breakpoints.small}) {
    font: var(--h3);
  }
`;
const ProductPrice = styled.div`
  margin-top: 24px;
  font: var(--h4);
  color: ${({ theme }) => theme.color.accent};

  @media (max-width: ${breakpoints.small}) {
    font: var(--h5);
  }
`;
const RatingContainer = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 25px;
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};

  @media (max-width: ${breakpoints.large}) {
    margin-top: 30px;
    justify-content: space-between;
    font: var(--h3-mobile);
  }
`;

const ProductDescription = styled.div`
  margin-top: 20px;
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};

  @media (max-width: ${breakpoints.small}) {
    font: var(--body-small);
  }
`;
const AddToCartContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${breakpoints.large}) {
    margin-top: 30px;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;

    @media (max-width: ${breakpoints.medium}) {
      max-width: 100%;
    }
  }
`;
const IconsContainer = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: ${breakpoints.large}) {
    margin-top: 30px;
  }
`;
const SocialMediaIconButton = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    svg path {
      transition: all 0.3s ease;

      fill: black;
    }
  }
`;

const CategoryContainer = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
  font: var(--h5);

  @media (max-width: ${breakpoints.large}) {
    margin-top: 30px;
  }
  @media (max-width: ${breakpoints.small}) {
    font: var(--body-small-mobile);
  }
`;
const CategoryTitle = styled.span`
  color: ${({ theme }) => theme.mainTextColor};
`;
const Category = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

export default {
  Information,
  ProductTitle,
  ProductPrice,
  RatingContainer,
  ProductDescription,
  AddToCartContainer,
  ButtonContainer,
  IconsContainer,
  SocialMediaIconButton,
  CategoryContainer,
  CategoryTitle,
  Category,
};
