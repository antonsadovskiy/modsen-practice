import * as Slider from "@radix-ui/react-slider";
import styled from "styled-components";

const SliderRoot = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 20px;
`;

const SliderTrack = styled(Slider.Track)`
  background-color: ${({ theme }) => theme.color.gray};
  position: relative;
  flex-grow: 1;
  height: 2px;
`;

const SliderRange = styled(Slider.Range)`
  position: absolute;
  background-color: ${({ theme }) => theme.mainTextColor};
  border-radius: 9999px;
  height: 100%;
`;

const SliderThumb = styled(Slider.Thumb)`
  position: relative;
  transition: all 0.3s ease;
  display: block;
  width: 2px;
  height: 10px;
  background-color: ${({ theme }) => theme.mainTextColor};
  box-shadow: 0 2px 10px black;

  &:after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.mainTextColor}`};
  }
`;

export default { SliderRoot, SliderTrack, SliderRange, SliderThumb };
