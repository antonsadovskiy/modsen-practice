import { useCallback } from "react";

import S from "./styled";

type CustomSwitchPropsType = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const CustomSwitch = ({
  checked,
  onCheckedChange,
}: CustomSwitchPropsType) => {
  const onChangeHandler = useCallback(() => {
    onCheckedChange(!checked);
  }, [checked, onCheckedChange]);

  return (
    <S.SwitchRoot
      onClick={onChangeHandler}
      data-state={checked ? "checked" : ""}
    >
      <S.SwitchThumb data-state={checked ? "checked" : ""} />
    </S.SwitchRoot>
  );
};
