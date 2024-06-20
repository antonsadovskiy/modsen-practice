import { ButtonHTMLAttributes } from "react";

import S from "./styled";

type CustomIconButtonPropsType = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onCopy"
>;

export const CustomIconButton = ({
  children,
  disabled,
  ...rest
}: CustomIconButtonPropsType) => (
  <S.IconButtonContainer $disabled={disabled} {...rest}>
    {children}
  </S.IconButtonContainer>
);
