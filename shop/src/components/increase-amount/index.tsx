import { useEffect, useMemo, useState } from "react";

import MinusSVG from "@/assets/svg/minus.svg";
import PlusSVG from "@/assets/svg/plus.svg";
import { useDebounce } from "@/hooks/useDebounce";

import S from "./styled";

type IncreaseAmountPropsType = {
  startAmount: number;
  pricePerItem?: number;
  onChangeDebouncedValue?: (debouncedValue: number) => void;
  onChangeValue?: (value: number) => void;
  disabled?: boolean;
};

export const IncreaseAmount = ({
  startAmount,
  disabled = false,
  pricePerItem,
  onChangeDebouncedValue,
  onChangeValue,
}: IncreaseAmountPropsType) => {
  const [value, setValue] = useState(startAmount);

  const debouncedAmount = useDebounce(value, 500);

  const increaseHandler = () => {
    setValue((prevState) => prevState + 1);
  };
  const decreaseHandler = () => {
    setValue((prevState) => prevState - 1);
  };

  const totalPrice = useMemo(
    () => (value * (pricePerItem ?? 0)).toFixed(2),
    [value, pricePerItem],
  );

  useEffect(() => {
    onChangeValue?.(value);
  }, [value, onChangeValue]);

  useEffect(() => {
    onChangeDebouncedValue?.(debouncedAmount);
  }, [debouncedAmount, onChangeDebouncedValue]);

  return (
    <S.PriceContainer $disabled={disabled}>
      <S.AmountContainer>
        <S.IncreaseAmountButton
          $disabled={value === 0 || disabled}
          onClick={decreaseHandler}
        >
          <MinusSVG />
        </S.IncreaseAmountButton>
        <S.Amount>{value}</S.Amount>
        <S.IncreaseAmountButton $disabled={disabled} onClick={increaseHandler}>
          <PlusSVG />
        </S.IncreaseAmountButton>
      </S.AmountContainer>
      <S.TotalPrice>${totalPrice}</S.TotalPrice>
    </S.PriceContainer>
  );
};
