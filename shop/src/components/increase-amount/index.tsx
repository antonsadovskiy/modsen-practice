import { useEffect, useMemo, useState } from "react";

import { Button } from "antd";

import MinusSVG from "@/assets/svg/minus.svg";
import PlusSVG from "@/assets/svg/plus.svg";
import { useDebounce } from "@/hooks";

import S from "./styled";

type IncreaseAmountPropsType = {
  startAmount: number;
  pricePerItem?: number;
  onChangeDebouncedValue?: (debouncedValue: number) => void;
  onChangeValue?: (value: number) => void;
  disabled?: boolean;
  min?: number;
};

export const IncreaseAmount = ({
  startAmount,
  disabled = false,
  pricePerItem,
  onChangeDebouncedValue,
  onChangeValue,
  min = 0,
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
    setValue(startAmount);
  }, [startAmount]);

  useEffect(() => {
    onChangeValue?.(value);
  }, [value, onChangeValue]);

  useEffect(() => {
    onChangeDebouncedValue?.(debouncedAmount);
  }, [debouncedAmount, onChangeDebouncedValue]);

  return (
    <S.PriceContainer $disabled={disabled}>
      <S.AmountContainer>
        <Button disabled={value === min || disabled} onClick={decreaseHandler}>
          <MinusSVG />
        </Button>
        <S.Amount>{value}</S.Amount>
        <Button disabled={disabled} onClick={increaseHandler}>
          <PlusSVG />
        </Button>
      </S.AmountContainer>
      <S.TotalPrice>${totalPrice}</S.TotalPrice>
    </S.PriceContainer>
  );
};
