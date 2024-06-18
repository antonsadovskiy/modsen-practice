import styled from "styled-components";

export const Wrapper = styled.div<{ $disabled: boolean }>`
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  position: relative;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme.color.gray}`};

  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};
`;

export const Placeholder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 12px;
  cursor: pointer;
  border: 1px;
  font: var(--body-medium);
  color: ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;

  .arrow {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

export const Select = styled.div`
  margin-top: 2px;
  display: grid;
  position: absolute;
  list-style: none;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);

  box-shadow: 0 4px 6px 1px gray;

  li:not(:first-child) {
    border-top: ${({ theme }) => `1px solid ${theme.color.gray}`};
  }

  li:last-child {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
  }
`;
