import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  font: var(--body-medium);
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
