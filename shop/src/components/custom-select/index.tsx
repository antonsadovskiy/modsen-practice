import { useRef, useState } from "react";

import Arrow from "@/assets/svg/arrow.svg";
import { CustomOption } from "@/components/custom-select/custom-option";
import { useOutsideClick } from "@/hooks";

import S from "./styled";

export type OptionType = {
  title: string;
  value: string;
};

type CustomSelectPropsType = {
  selected?: OptionType;
  options: OptionType[];
  placeholder?: string;
  onChange?: (selected: OptionType) => void;
  disabled?: boolean;
};

export const CustomSelect = ({
  options,
  selected,
  onChange,
  placeholder,
  disabled = false,
}: CustomSelectPropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectOptionsRef = useRef<HTMLDivElement | null>(null);

  const ref = useOutsideClick(() => {
    setIsOpen(false);
  }, isOpen);

  const handleOptionClick = (value: OptionType) => {
    setIsOpen(false);
    onChange?.(value);
  };

  const handlePlaceHolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper ref={ref} $disabled={disabled}>
      <S.Placeholder onClick={handlePlaceHolderClick}>
        {selected?.title ?? placeholder}
        <S.ArrowContainer $isRotated={isOpen}>
          <Arrow />
        </S.ArrowContainer>
      </S.Placeholder>
      {isOpen && (
        <S.Select ref={selectOptionsRef}>
          {options.map((option) => (
            <CustomOption
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </S.Select>
      )}
    </S.Wrapper>
  );
};
