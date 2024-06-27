import "styled-components";

declare module "styled-components" {
  export interface ColorsInterface {
    accent: string;
    white: string;
    black: string;
    darkGray: string;
    gray: string;
    lightGray: string;
    error: string;
  }

  export interface CommonThemeInterface {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;

    desktopContentMarginTop: string;
    desktopContentMarginBottom: string;
    mobileContentMarginTop: string;
    mobileContentMarginBottom: string;
  }

  export interface DefaultTheme extends CommonThemeInterface {
    mainTextColor: string;
    loaderColor: string;
    backgroundColor: string;
    color: ColorsInterface;
  }
}
