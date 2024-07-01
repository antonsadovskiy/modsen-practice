import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const CatalogCardWrapper = styled.div<{ $width: string }>`
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.s};
`;
const TitleAndDescription = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.s};
  width: 100%;
`;

const ImageAndDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.s};

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImagesContainer = styled.div`
  cursor: pointer;
  img {
    position: relative;

    object-position: center;
    object-fit: scale-down;
    border-radius: ${({ theme }) => theme.xs};
  }
`;
const Title = styled.div`
  max-width: 100%;
  font: var(--h3);
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h5);
  }
`;
const Description = styled.div`
  max-width: 100%;
  font: var(--h5);
  color: ${({ theme }) => theme.color.darkGray};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--h3-mobile);
  }
`;

const TitleAndDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default {
  CatalogCardWrapper,
  TitleAndDelete,
  ImagesContainer,
  ImageAndDescription,
  Description,
  Title,
  TitleAndDescription,
};
