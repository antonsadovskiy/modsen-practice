import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};

  .latest {
    .titleContainer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 64px 0 40px;

      .label {
        font: var(--h1);
      }
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      row-gap: 79px;
      column-gap: 54px;
    }
  }
`;
