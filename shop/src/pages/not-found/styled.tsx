import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: calc(100vh - 17px - 42px - 64px - 160px - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      margin-bottom: 24px;
      font: var(--h1);
    }
    .caption {
      font: var(--h3);
      text-align: center;
      margin-bottom: 64px;
    }
  }
`;