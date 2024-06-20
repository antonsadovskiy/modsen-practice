import { useCallback } from "react";

import { OptionType } from "@/components/custom-select";

import S from "./styled";

type CustomOptionPropsType = {
  option: OptionType;
  onClick: (value: OptionType) => void;
};

export const CustomOption = ({ option, onClick }: CustomOptionPropsType) => {
  const onChangeValueHandler = useCallback(() => {
    onClick(option);
  }, [onClick, option]);

  return (
    <S.Wrapper value={option.value} onClick={onChangeValueHandler}>
      {option.title}
    </S.Wrapper>
  );
};
