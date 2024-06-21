import styled from "styled-components";

import LogoSVG from "@/assets/svg/logo.svg";

const Wrapper = styled.div`
  position: sticky;

  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 2;
  padding-top: 64px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled(LogoSVG)`
  cursor: pointer;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const ShopLink = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.color.black};
`;

const BorderBottomLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray};
`;

const CartIconContainer = styled.div`
  position: relative;
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  min-width: 16px;
  height: 16px;
  width: 100%;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  font: var(--h5);
  font-size: var(--font-size-10);
`;

const MaxWidthContainer = styled.div`
  max-width: 1248px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
`;

export default {
  Wrapper,
  HeaderContent,
  Logo,
  Actions,
  ShopLink,
  BorderBottomLine,
  MaxWidthContainer,
  CartIconContainer,
  CartCount,
};
