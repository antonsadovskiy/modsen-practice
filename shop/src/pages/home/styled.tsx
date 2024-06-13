import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

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

export const ViewAllLink = styled.div`
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-700);
  color: ${({ theme }) => theme.color.accent};

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
