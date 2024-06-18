import S from "./styled";
import { ButtonHTMLAttributes } from "react";
import { CircleLoader } from "@/components/circle-loader";

export type ButtonSize = "small" | "large";
export type ButtonVariant = "primary" | "secondary";

export type CustomButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onCopy"
> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  isLoading?: boolean;
};

export const CustomButton = ({
  size = "small",
  variant = "primary",
  fullWidth = true,
  isLoading = false,
  children,
  ...rest
}: CustomButtonProps) => (
  <S.Button $isFullWidth={fullWidth} $variant={variant} $size={size} {...rest}>
    {isLoading ? <CircleLoader size={20} /> : children}
  </S.Button>
);
