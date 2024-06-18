import S from "./styled";

type CustomSliderPropsType = {
  value: number[];
  defaultValue?: number[];
  onValueCommit?: (value: number[]) => void;
  onValueChange?: (value: number[]) => void;
  min?: number;
  max?: number;
};

export const CustomSlider = ({
  onValueCommit,
  onValueChange,
  defaultValue,
  value,
  min,
  max,
}: CustomSliderPropsType) => (
  <S.Wrapper>
    <S.SliderRoot
      value={value}
      min={min}
      max={max}
      defaultValue={defaultValue}
      onValueCommit={onValueCommit}
      onValueChange={onValueChange}
    >
      <S.SliderTrack>
        <S.SliderRange />
      </S.SliderTrack>
      <S.SliderThumb />
      <S.SliderThumb />
    </S.SliderRoot>
  </S.Wrapper>
);
