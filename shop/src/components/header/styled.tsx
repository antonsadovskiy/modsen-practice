import styled from "styled-components";
import LogoSVG from "@/assets/svg/logo.svg";

export const Wrapper = styled.div`
  position: sticky;

  background-color: ${({ theme }) => theme.backgroundColor};
  z-index: 10;
  padding-top: 64px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled(LogoSVG)`
  cursor: pointer;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const ShopLink = styled.div`
  font: var(--h5);
`;

export const BorderBottomLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray};
`;
