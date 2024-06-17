import { Wrapper, Textarea } from "@/components/custom-textarea/styled";
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
    <Textarea className={"textarea"} rows={rows} {...rest} />
    {error && <div className={"error"}>{error}</div>}
  </Wrapper>
);
