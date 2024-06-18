import { SwitchRoot, SwitchThumb } from "./styled";

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
    <SwitchRoot
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    >
      <SwitchThumb className="switchThumb" />
    </SwitchRoot>
  </>
);
