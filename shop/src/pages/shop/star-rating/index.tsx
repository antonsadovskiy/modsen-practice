import Star from "@/assets/svg/star.svg";
import { Wrapper } from "@/pages/shop/star-rating/styled";
import { useMemo } from "react";

type StarRatingPropsType = {
  value: number;
};

export const StarRating = ({ value }: StarRatingPropsType) => {
  const roundedValue = useMemo(() => Math.round(value), [value]);

  return (
    <Wrapper>
      <Star fill={roundedValue >= 1 ? "#FFC107" : "black"} />
      <Star fill={roundedValue >= 2 ? "#FFC107" : "black"} />
      <Star fill={roundedValue >= 3 ? "#FFC107" : "black"} />
      <Star fill={roundedValue >= 4 ? "#FFC107" : "black"} />
      <Star fill={roundedValue === 5 ? "#FFC107" : "black"} />
    </Wrapper>
  );
};
