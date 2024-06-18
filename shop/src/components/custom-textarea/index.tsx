import S from "./styled";
import { ComponentProps } from "react";

type CustomTextareaPropsType = ComponentProps<"textarea"> & {
  error?: string;
  isFullWidth?: boolean;
};

export const CustomTextarea = ({
  error,
  disabled,
  isFullWidth = true,
  rows = 3,
  ...rest
}: CustomTextareaPropsType) => (
  <S.Wrapper $disabled={disabled} $isFullWidth={isFullWidth}>
    <S.Textarea rows={rows} {...rest} />
    {error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
);
