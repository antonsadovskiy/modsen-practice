import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  Wrapper,
} from "./styled";

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
  <Wrapper>
    <SliderRoot
      value={value}
      min={min}
      max={max}
      defaultValue={defaultValue}
      onValueCommit={onValueCommit}
      onValueChange={onValueChange}
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </SliderRoot>
  </Wrapper>
);
