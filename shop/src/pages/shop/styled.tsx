import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .label {
    font: var(--h1);
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 35px;
    align-items: flex-start;

    .filters {
      width: 20%;
      //min-width: 262px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .selects {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    .sliderContainer {
      .price {
        margin-top: 8px;
        font: var(--body-medium);
        color: ${({ theme }) => theme.color.darkGray};
      }
    }

    .catalog {
      width: 80%;
      display: flex;
      column-gap: 24px;
      row-gap: 70px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;
