import { Wrapper } from "./styled";
import { useCallback, useRef, useState } from "react";
import { CustomOption } from "@/components/custom-select/custom-option";
import Arrow from "@/assets/svg/arrow.svg";
import { useOutsideClick } from "@/hooks/useClickOutside";

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

  const handleOptionClick = useCallback(
    (value: OptionType) => {
      setIsOpen(false);
      onChange?.(value);
    },
    [onChange],
  );

  const handlePlaceHolderClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Wrapper ref={ref} $disabled={disabled}>
      <div className={"placeholder"} onClick={handlePlaceHolderClick}>
        {selected?.title ?? placeholder}
        <div className={`${isOpen ? "arrow rotate" : "arrow"}`}>
          <Arrow />
        </div>
      </div>
      {isOpen && (
        <div className={"select"} ref={selectOptionsRef}>
          {options.map((option) => (
            <CustomOption
              key={option.value}
              option={option}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};