import * as Switch from "@radix-ui/react-switch";
import { Wrapper } from "@/components/custom-switch/styled";

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
  <Wrapper>
    <Switch.Root
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      className="switchRoot"
    >
      <Switch.Thumb className="switchThumb" />
    </Switch.Root>
  </Wrapper>
);
