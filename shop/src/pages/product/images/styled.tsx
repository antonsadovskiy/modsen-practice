import styled from "styled-components";

import { breakpoints } from "@/constants/styles";

const ImagesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  justify-content: space-between;
`;
const AdditionalImageContainer = styled.div`
  @media (max-width: ${breakpoints.extraLarge}) {
    display: none;
  }
`;
const MainImage = styled.img`
  width: 540px;
  height: 600px;
  object-position: center;
  object-fit: scale-down;
  border-radius: 8px;

  @media (max-width: ${breakpoints.large}) {
    width: 288px;
    height: 374px;
  }
`;
const AdditionalImage = styled.img`
  width: 120px;
  height: 120px;
  object-position: center;
  object-fit: scale-down;
  border-radius: 8px;
`;
export default {
  ImagesContainer,
  AdditionalImageContainer,
  MainImage,
  AdditionalImage,
};
