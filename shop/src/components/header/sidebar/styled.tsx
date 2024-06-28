import styled from "styled-components";

const SideBar = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  padding: ${({ theme }) => `${theme.xxl} 0 ${theme.s} ${theme.s}`};
  z-index: var(--side-bar-z-index);
  left: 0;
  top: 0;
  text-align: left;
  transition: all 0.3s ease;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;

  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  ${({ $isOpen }) => ($isOpen ? "" : "transform: translateY(-140%);")}
`;

const NavOption = styled.div`
  display: flex;
  flex-direction: column;
  font: var(--h3);

  color: ${({ theme }) => theme.mainTextColor};
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100dvh;
  z-index: var(--modal-background-z-index);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { SideBar, NavOption, Background };
