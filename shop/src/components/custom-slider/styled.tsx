import styled from "styled-components";

export const Wrapper = styled.div`
  .sliderRoot {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;
    height: 20px;
  }

  .sliderTrack {
    background-color: ${({ theme }) => theme.color.gray};
    position: relative;
    flex-grow: 1;
    height: 2px;
  }

  .sliderRange {
    position: absolute;
    background-color: ${({ theme }) => theme.color.black};
    border-radius: 9999px;
    height: 100%;
  }

  .sliderThumb {
    position: relative;
    transition: all 0.3s ease;
    display: block;
    width: 2px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.black};
    box-shadow: 0 2px 10px black;
  }
  .sliderThumb:after {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }

  .sliderThumb:hover {
    cursor: pointer;
  }
  .sliderThumb:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.color.black}`};
  }
`;
