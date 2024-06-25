import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const CatalogCardWrapper = styled.div<{ $width: string }>`
  cursor: pointer;
  max-width: ${({ $width }) => `${$width}px`};
  width: 100%;

  @media screen and (max-width: ${breakpoints.small}) {
    max-width: 136px;
  }
`;

const ImagesContainer = styled.div<{ $height: string; $width: string }>`
  height: ${({ $height }) => `${$height}px`};
  max-width: ${({ $width }) => `${$width}px`};
  width: 100%;

  @media screen and (max-width: ${breakpoints.small}) {
    max-width: 136px;
    max-height: 136px;
  }

  img {
    position: relative;

    object-position: center;
    object-fit: scale-down;
    border-radius: 8px;
  }
`;
const Title = styled.div`
  width: 100%;
  margin: 24px 0 16px;
  font: var(--h3);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.mainTextColor};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--body-medium);
  }
`;

const Price = styled.div`
  font: var(--h4);
  color: ${({ theme }) => theme.color.accent};

  @media screen and (max-width: ${breakpoints.small}) {
    font: var(--body-small-mobile);
  }
`;

export default { CatalogCardWrapper, ImagesContainer, Price, Title };
