import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 10;
  padding-top: 64px;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;

  .headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      cursor: pointer;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 40px;

      .link {
        font: var(--h5);
      }
    }
  }
`;

export const BorderBottomLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray};
`;
