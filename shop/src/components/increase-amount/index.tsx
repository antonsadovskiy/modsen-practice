import MinusSVG from "@/assets/svg/minus.svg";
import PlusSVG from "@/assets/svg/plus.svg";

import S from "./styled";

type IncreaseAmountPropsType = {
  amount: number;
  increaseHandler: () => void;
  decreaseHandler: () => void;
  totalPrice: string;
  disabled: boolean;
};

export const IncreaseAmount = ({
  increaseHandler,
  amount,
  decreaseHandler,
  disabled,
  totalPrice,
}: IncreaseAmountPropsType) => (
  <S.PriceContainer $disabled={disabled}>
    <S.AmountContainer>
      <S.IncreaseAmountButton
        $disabled={amount === 0 || disabled}
        onClick={decreaseHandler}
      >
        <MinusSVG />
      </S.IncreaseAmountButton>
      <S.Amount>{amount}</S.Amount>
      <S.IncreaseAmountButton $disabled={disabled} onClick={increaseHandler}>
        <PlusSVG />
      </S.IncreaseAmountButton>
    </S.AmountContainer>
    <S.TotalPrice>${totalPrice}</S.TotalPrice>
  </S.PriceContainer>
);
