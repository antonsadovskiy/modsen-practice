import S from "./styled";

type CustomSwitchPropsType = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const CustomSwitch = ({
  checked,
  onCheckedChange,
}: CustomSwitchPropsType) => {
  const onChangeHandler = () => {
    onCheckedChange(!checked);
  };

  return (
    <S.SwitchRoot onClick={onChangeHandler} $isChecked={checked}>
      <S.SwitchThumb $isChecked={checked} />
    </S.SwitchRoot>
  );
};
