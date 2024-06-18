import S from "./styled";

type CustomSwitchPropsType = {
  defaultChecked: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const CustomSwitch = ({
  checked,
  defaultChecked,
  onCheckedChange,
}: CustomSwitchPropsType) => (
  <>
    <S.SwitchRoot
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    >
      <S.SwitchThumb className="switchThumb" />
    </S.SwitchRoot>
  </>
);
