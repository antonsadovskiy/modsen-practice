import styled from "styled-components";

import LogoSVG from "@/assets/svg/logo.svg";
import CrossSVG from "@/assets/svg/plus.svg";
import { breakpoints } from "@/constants/styles";

const Wrapper = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: var(--header-z-index);
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media screen and (max-width: ${breakpoints.large}) {
    padding-top: 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(LogoSVG)`
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 207px;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.m};

  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;
const ShopLink = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};
`;

const BorderBottomLine = styled.div<{ $isShow: boolean }>`
  height: 1px;
  width: 100%;
  transition: all 0.3s ease;
  background-color: ${({ theme, $isShow }) =>
    $isShow ? theme.color.gray : "transparent"};
`;

const MaxWidthContainer = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
  padding-top: 64px;

  background-color: ${({ theme }) => theme.backgroundColor};

  z-index: var(--header-container-z-index);

  @media screen and (max-width: ${breakpoints.maxPossibleWidth}) {
    max-width: 1100px;
  }
  @media screen and (max-width: ${breakpoints.extraLarge}) {
    max-width: 900px;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 744px;
    padding: 17px 20px 0 20px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: calc(100vw - 40px);
    padding: 17px 20px 0 20px;
  }
`;

const BurgerNav = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
    gap: 17px;
  }
`;

const Cross = styled(CrossSVG)`
  transform: rotate(45deg);
`;

export default {
  Wrapper,
  HeaderContent,
  Logo,
  BurgerNav,
  Actions,
  ShopLink,
  BorderBottomLine,
  MaxWidthContainer,
  Cross,
};
