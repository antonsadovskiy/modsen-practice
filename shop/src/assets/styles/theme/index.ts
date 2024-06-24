import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mainTextColor: "#000000",
  loaderColor: "#000000",
  backgroundColor: "#FFFFFF",
  color: {
    accent: "#A18A68",
    white: "#FFFFFF",
    black: "#000000",
    darkGray: "#707070",
    gray: "#D8D8D8",
    lightGray: "#EFEFEF",
    error: "#D82700",
  },
};

export const darkTheme: DefaultTheme = {
  mainTextColor: "#FBFBFB",
  loaderColor: "#FFFFFF",
  backgroundColor: "#32012F",
  color: {
    accent: "#B4A186",
    white: "#FBFBFB",
    black: "#0A0A0A",
    darkGray: "#707070",
    gray: "#3D3D3D",
    lightGray: "#9A9A9A",
    error: "#D82700",
  },
};
