import { ComponentProps, ReactNode } from "react";
import { Input, Wrapper } from "./styled";

type CustomInputPropsType = {
  isFullWidth?: boolean;
  value?: string | number;
  placeholder?: string;
  endIcon?: ReactNode;
  onIconClick?: () => void;
  error?: string;
} & ComponentProps<"input">;

export const CustomInput = ({
  isFullWidth = true,
  endIcon,
  onIconClick,
  disabled = false,
  error,
  ...rest
}: CustomInputPropsType) => (
  <Wrapper $isFullWidth={isFullWidth} $disabled={disabled}>
    <Input $isWithEndIcon={!!endIcon} disabled={disabled} {...rest} />
    {error && <div className={"error"}>{error}</div>}
    {endIcon && (
      <button
        disabled={disabled}
        className={onIconClick ? "icon clickable" : "icon"}
        onClick={onIconClick}
      >
        {endIcon}
      </button>
    )}
  </Wrapper>
);
