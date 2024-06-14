import { ComponentProps, ReactNode } from "react";
import { Input, Wrapper } from "./styled";

type CustomInputPropsType = {
  isFullWidth?: boolean;
  value: string | number;
  placeholder?: string;
  endIcon?: ReactNode;
  onIconClick?: () => void;
} & ComponentProps<"input">;

//TODO: добавить валидацию

export const CustomInput = ({
  isFullWidth = true,
  endIcon,
  onIconClick,
  ...rest
}: CustomInputPropsType) => (
  <Wrapper $isFullWidth={isFullWidth}>
    <Input $isWithEndIcon={!!endIcon} {...rest} />
    {endIcon && (
      <div
        className={onIconClick ? "icon clickable" : "icon"}
        onClick={onIconClick}
      >
        {endIcon}
      </div>
    )}
  </Wrapper>
);
