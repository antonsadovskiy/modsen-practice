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

  .title {
    font: var(--h2);
    color: ${({ theme }) => theme.color.black};
  }

  .price {
    margin-top: 24px;
    font: var(--h4);
    color: ${({ theme }) => theme.color.accent};
  }

  .rating {
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 25px;
    font: var(--h5);
    color: ${({ theme }) => theme.color.darkGray};
  }

  .description {
    margin-top: 20px;
    font: var(--h5);
    color: ${({ theme }) => theme.color.darkGray};
  }

  .icons {
    margin-top: 140px;
    display: flex;
    align-items: center;
    gap: 25px;
  }
  .categoryContainer {
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    font: var(--h5);

    .categoryTitle {
      color: ${({ theme }) => theme.color.black};
    }

    .category {
      color: ${({ theme }) => theme.color.darkGray};
    }
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;

  .moreImages {
    img {
      width: 120px;
      height: 120px;
      object-position: center;
      object-fit: scale-down;
      border-radius: 8px;
    }
  }

  .mainImage {
    img {
      width: 540px;
      height: 600px;
      object-position: center;
      object-fit: scale-down;
      border-radius: 8px;
    }
  }
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  .title {
    padding-bottom: 35px;
    font: var(--h3);
    color: ${({ theme }) => theme.color.black};
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
  }

  .description {
    font: var(--h5);
    color: ${({ theme }) => theme.color.darkGray};
  }
`;

export const SimilarItems = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 54px;
  flex-direction: column;

  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 54px;
  }

  .label {
    font: var(--h2);
    color: ${({ theme }) => theme.color.black};
  }
`;
