import styled from "styled-components";

const Wrapper = styled.div<{ $disabled: boolean }>`
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  position: relative;
  border-radius: ${({ theme }) => theme.xxs};
  border: ${({ theme }) => `1px solid ${theme.color.gray}`};

  opacity: ${({ $disabled }) => ($disabled ? "0.5" : "1")};
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 12px;
  cursor: pointer;
  border: 1px;
  font: var(--body-medium);
  color: ${({ theme }) => theme.mainTextColor};
  background: ${({ theme }) => theme.backgroundColor};
  box-sizing: border-box;
  width: 100%;
  border-radius: ${({ theme }) => theme.xxs};

  .arrow {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: ${({ theme }) => theme.mainTextColor};
    }
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const Select = styled.div`
  margin-top: ${({ theme }) => theme.xxs};
  display: grid;
  position: absolute;
  list-style: none;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  z-index: var(--select-options-z-index);
  background-color: ${({ theme }) => theme.backgroundColor};

  box-shadow: 0 4px 6px 1px gray;

  li:not(:first-child) {
    border-top: ${({ theme }) => `1px solid ${theme.color.gray}`};
  }

  li:last-child {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
  }
`;

const ArrowContainer = styled.div<{ $isRotated: boolean }>`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    fill: ${({ theme }) => theme.mainTextColor};
  }

  ${({ $isRotated }) => ($isRotated ? "transform: rotate(180deg)" : "")};
`;

export default { Placeholder, Select, Wrapper, ArrowContainer };
