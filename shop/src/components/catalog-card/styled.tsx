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

const AddToCartButton = styled.div`
  position: absolute;
  bottom: ${({ theme }) => `-${theme.l}`};
  height: ${({ theme }) => `${theme.l}`};
  padding: 0 16px;
  width: calc(100% - 32px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};

  svg path {
    fill: ${({ theme }) => theme.mainTextColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.color.lightGray};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      opacity: 0.9;
    }
  }
`;

const ImagesContainer = styled.div<{ $height: string; $width: string }>`
  position: relative;
  height: ${({ $height }) => `${$height}px`};
  max-width: ${({ $width }) => `${$width}px`};
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.small}) {
    max-width: 136px;
    max-height: 136px;
  }

  &:hover ${AddToCartButton} {
    transform: ${({ theme }) => `translateY(-${theme.l})`};
  }

  img {
    position: relative;
    object-position: center;
    object-fit: scale-down;
    border-radius: ${({ theme }) => theme.xs};
  }
`;

export default {
  CatalogCardWrapper,
  ImagesContainer,
  Price,
  Title,
  AddToCartButton,
};
