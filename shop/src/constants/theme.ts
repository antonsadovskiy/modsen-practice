import { CommonThemeInterface, DefaultTheme } from "styled-components";

const commonThemeConfig: CommonThemeInterface = {
  xxxs: "2px",
  xxs: "4px",
  xs: "8px",
  s: "20px",
  m: "40px",
  l: "60px",
  xl: "80px",
  xxl: "100px",
  xxxl: "120px",

  desktopContentMarginTop: "100px",
  desktopContentMarginBottom: "250px",

  mobileContentMarginTop: "40px",
  mobileContentMarginBottom: "100px",

  toastColors: {
    success: "rgb(56, 142, 60)",
    info: "rgb(2, 136, 209)",
    warning: "rgb(245, 124, 0)",
    error: "rgb(211, 47, 47)",
  },
};

export const lightTheme: DefaultTheme = {
  ...commonThemeConfig,
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
  ...commonThemeConfig,
  mainTextColor: "#FBFBFB",
  loaderColor: "#FFFFFF",
  backgroundColor: "lightgray",
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
