import styled from "styled-components";

const CatalogCardWrapper = styled.div<{ $width: string }>`
  width: 100%;
  display: flex;
  gap: 20px;
`;
const TitleAndDescription = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

const ImageAndDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const ImagesContainer = styled.div`
  cursor: pointer;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
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
