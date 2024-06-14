import * as Slider from "@radix-ui/react-slider";
import { Wrapper } from "./styled";

type CustomSliderPropsType = {
  value: number[];
  defaultValue?: number[];
  onValueCommit?: (value: number[]) => void;
  onValueChange?: (value: number[]) => void;
};

export const CustomSlider = ({
  onValueCommit,
  onValueChange,
  defaultValue,
  value,
}: CustomSliderPropsType) => (
  <Wrapper>
    <Slider.Root
      className="sliderRoot"
      value={value}
      defaultValue={defaultValue}
      onValueCommit={onValueCommit}
      onValueChange={onValueChange}
    >
      <Slider.Track className="sliderTrack">
        <Slider.Range className="sliderRange" />
      </Slider.Track>
      <Slider.Thumb className="sliderThumb" />
      <Slider.Thumb className="sliderThumb" />
    </Slider.Root>
  </Wrapper>
);
