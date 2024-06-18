import { Wrapper, Textarea, Error } from "@/components/custom-textarea/styled";
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
  <Wrapper $disabled={disabled} $isFullWidth={isFullWidth}>
    <Textarea rows={rows} {...rest} />
    {error && <Error>{error}</Error>}
  </Wrapper>
);
