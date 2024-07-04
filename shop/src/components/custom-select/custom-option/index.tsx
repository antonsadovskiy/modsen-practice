import { OptionType } from "@/components/custom-select";

import S from "./styled";

type CustomOptionPropsType = {
  option: OptionType;
  onClick: (value: OptionType) => void;
  type: "category" | "sort";
};

export const CustomOption = ({
  option,
  onClick,
  type,
}: CustomOptionPropsType) => {
  const onChangeValueHandler = () => {
    onClick(option);
  };

  return (
    <S.Wrapper
      value={option.value}
      onClick={onChangeValueHandler}
      data-cy={`${type}-option`}
    >
      {option.title}
    </S.Wrapper>
  );
};
