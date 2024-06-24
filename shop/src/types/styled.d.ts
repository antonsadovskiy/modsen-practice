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

  export interface DefaultTheme {
    mainTextColor: string;
    loaderColor: string;
    backgroundColor: string;
    color: ColorsInterface;
  }
}
