import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 145px;
  margin-bottom: 250px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 62px;
  justify-content: space-between;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-width: 486px;
  width: 100%;
  .categoryContainer {
    .categoryTitle {
    }

    .category {
    }
  }
`;

export const IconsContainer = styled.div`
  margin-top: 70px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const CategoryContainer = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 16px;
  font: var(--h5);
`;

export const CategoryTitle = styled.span`
  color: ${({ theme }) => theme.color.black};
`;
export const Category = styled.span`
  color: ${({ theme }) => theme.color.darkGray};
`;

export const ProductTitle = styled.div`
  font: var(--h2);
  color: ${({ theme }) => theme.color.black};
`;

export const ProductPrice = styled.div`
  margin-top: 24px;
  font: var(--h4);
  color: ${({ theme }) => theme.color.accent};
`;
export const ProductDescription = styled.div`
  margin-top: 20px;
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
`;
export const RatingContainer = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  gap: 25px;
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
`;

export const AddToCartContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;
`;

export const AdditionalImage = styled.img`
  width: 120px;
  height: 120px;
  object-position: center;
  object-fit: scale-down;
  border-radius: 8px;
`;
export const MainImage = styled.img`
  width: 540px;
  height: 600px;
  object-position: center;
  object-fit: scale-down;
  border-radius: 8px;
`;

export const SocialMediaIconButton = styled.a`
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const Label = styled.div`
  font: var(--h2);
  color: ${({ theme }) => theme.color.black};
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 54px;
`;

export const Description = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
`;

export const SimilarItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 54px;
  flex-direction: column;
`;

export const DescriptionTitle = styled.div`
  padding-bottom: 35px;
  font: var(--h3);
  color: ${({ theme }) => theme.color.black};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
`;

export default {
  MainInfoContainer,
  Information,
  ProductTitle,
  ProductPrice,
  Wrapper,
  ProductDescription,
  IconsContainer,
  SocialMediaIconButton,
  CategoryContainer,
  CategoryTitle,
  Category,
  RatingContainer,
  AddToCartContainer,
  ImagesContainer,
  MainImage,
  AdditionalImage,
  ButtonContainer,
  DescriptionContainer,
  Label,
  List,
  Description,
  SimilarItems,
  DescriptionTitle,
};
