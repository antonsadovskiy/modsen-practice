import { ReactNode } from "react";
import S from "./styled";

type CustomIconButtonPropsType = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

export const CustomIconButton = ({
  children,
  onClick,
  disabled = false,
}: CustomIconButtonPropsType) => (
  <S.IconButtonContainer $disabled={disabled} onClick={onClick}>
    {children}
  </S.IconButtonContainer>
);
