import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font: var(--body-medium);
  color: ${({ theme }) => theme.mainTextColor};
  background: ${({ theme }) => theme.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGray};
  }
`;

export default { Wrapper };
