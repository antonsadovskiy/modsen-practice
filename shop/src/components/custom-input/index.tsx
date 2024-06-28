import { ComponentProps, ReactNode } from "react";

import S from "./styled";

type CustomInputPropsType = {
  isFullWidth?: boolean;
  value?: string | number;
  placeholder?: string;
  endIcon?: ReactNode;
  onIconClick?: () => void;
  error?: string;
  isIconButtonDisabled?: boolean;
  iconButtonType?: "submit" | "reset" | "button";
} & ComponentProps<"input">;

export const CustomInput = ({
  isFullWidth = true,
  endIcon,
  onIconClick,
  disabled = false,
  error,
  isIconButtonDisabled = false,
  iconButtonType = "button",
  ...rest
}: CustomInputPropsType) => (
  <S.Wrapper $isFullWidth={isFullWidth} $disabled={disabled}>
    <S.Input $isWithEndIcon={!!endIcon} disabled={disabled} {...rest} />
    {error && <S.Error>{error}</S.Error>}
    {endIcon && (
      <S.InputIcon
        type={iconButtonType}
        $disabled={
          iconButtonType === "submit"
            ? false
            : !onIconClick || isIconButtonDisabled
        }
        onClick={onIconClick}
      >
        {endIcon}
      </S.InputIcon>
    )}
  </S.Wrapper>
);
