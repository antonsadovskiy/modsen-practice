import { ComponentProps } from "react";
import { Input, Wrapper } from "./styled";
import SearchSVG from "@/assets/svg/search.svg";

type CustomInputPropsType = {
  isFullWidth?: boolean;
  value: string | number;
  placeholder?: string;
} & ComponentProps<"input">;

//TODO: добавить валидацию

export const CustomInput = ({
  type,
  isFullWidth = true,
  ...rest
}: CustomInputPropsType) => (
  <Wrapper $isFullWidth={isFullWidth}>
    <Input $type={type} {...rest} />
    {type === "search" && <SearchSVG className={"icon"} />}
  </Wrapper>
);
