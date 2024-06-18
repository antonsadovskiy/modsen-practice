import { ComponentProps, ReactNode } from "react";
import S from "./styled";

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
  <S.Wrapper $isFullWidth={isFullWidth} $disabled={disabled}>
    <S.Input $isWithEndIcon={!!endIcon} disabled={disabled} {...rest} />
    {error && <S.Error>{error}</S.Error>}
    {endIcon && (
      <div
        className={onIconClick ? "icon clickable" : "icon"}
        onClick={onIconClick}
      >
        {endIcon}
      </div>
    )}
  </S.Wrapper>
);
