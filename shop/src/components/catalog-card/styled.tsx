import styled from "styled-components";

export const CatalogCardWrapper = styled.div<{ $width: string }>`
  cursor: pointer;
  width: ${({ $width }) => `${$width}px`};
`;

export const ImagesContainer = styled.div`
  img {
    position: relative;

    object-position: center;
    object-fit: scale-down;
    border-radius: 8px;
  }
`;
export const Title = styled.div`
  width: 100%;
  margin: 24px 0 16px;
  font: var(--h3);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.div`
  font: var(--h4);
  color: ${({ theme }) => theme.color.accent};
`;

export default { CatalogCardWrapper, ImagesContainer, Price, Title };
