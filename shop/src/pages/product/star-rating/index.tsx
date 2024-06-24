import { useMemo } from "react";

import S from "./styled";

type StarRatingPropsType = {
  value: number;
};

export const StarRating = ({ value }: StarRatingPropsType) => {
  const roundedValue = useMemo(() => Math.round(value), [value]);

  return (
    <S.Wrapper>
      <S.Star $isFill={roundedValue >= 1} />
      <S.Star $isFill={roundedValue >= 2} />
      <S.Star $isFill={roundedValue >= 3} />
      <S.Star $isFill={roundedValue >= 4} />
      <S.Star $isFill={roundedValue === 5} />
    </S.Wrapper>
  );
};
