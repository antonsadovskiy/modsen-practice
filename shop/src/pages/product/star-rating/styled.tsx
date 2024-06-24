import styled from "styled-components";

import StarSVG from "@/assets/svg/star.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Star = styled(StarSVG)<{ $isFill: boolean }>`
  fill: ${({ $isFill, theme }) => ($isFill ? "#FFC107" : theme.color.black)};
`;

export default { Star, Wrapper };
