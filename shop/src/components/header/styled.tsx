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

  .line {
    height: 1px;
    width: 100%;
    background-color: black;
  }

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

      .link {
        font: var(--h5);
      }
    }
  }
`;
