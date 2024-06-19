import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MaxWidthContainer = styled.div`
  min-height: calc(100vh - 114px);
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export default { LoaderContainer, Content, MaxWidthContainer, Wrapper };
