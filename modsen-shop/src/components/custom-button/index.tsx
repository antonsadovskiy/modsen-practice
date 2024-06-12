import { Button } from './styled';
import { ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'large';
export type ButtonVariant = 'primary' | 'secondary';

export type CustomButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onCopy'
> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

export const CustomButton = ({
  size = 'small',
  variant = 'primary',
  fullWidth = true,
  children,
  ...rest
}: CustomButtonProps) => (
  <Button $isFullWidth={fullWidth} $variant={variant} $size={size} {...rest}>
    {children}
  </Button>
);
