import styled from "styled-components";

const CatalogCardWrapper = styled.div<{ $width: string }>`
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 20px;
`;
const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 100%;
`;

const ImageAndDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: 20px;
`;

const ImagesContainer = styled.div`
  img {
    position: relative;

    object-position: center;
    object-fit: scale-down;
    border-radius: 8px;
  }
`;
const Title = styled.div`
  max-width: 100%;
  font: var(--h3);
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Description = styled.div`
  max-width: 100%;
  font: var(--h5);
  color: #707070;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Price = styled.div`
  font: var(--h4);
  color: ${({ theme }) => theme.color.accent};
  white-space: nowrap;
`;

export default {
  CatalogCardWrapper,
  ImagesContainer,
  ImageAndDescription,
  Price,
  Description,
  Title,
  TitleAndDescription,
};
