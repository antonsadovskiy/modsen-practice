import styled from "styled-components";

const PriceContainer = styled.div<{ $disabled: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;
const AmountContainer = styled.div`
  font-family: var(--font-family-dm-sans);
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;
const IncreaseAmountButton = styled.div<{ $disabled?: boolean }>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.mainTextColor}`};
  color: ${({ theme }) => theme.mainTextColor};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};

  user-select: none;

  ${({ $disabled }) => $disabled && "opacity: 0.5"}
`;
const Amount = styled.div`
  min-width: ${({ theme }) => theme.s};
  text-align: center;
  color: ${({ theme }) => theme.mainTextColor};
`;

const TotalPrice = styled.div`
  font: var(--h5);
  color: ${({ theme }) => theme.mainTextColor};
`;
export default {
  TotalPrice,
  PriceContainer,
  Amount,
  AmountContainer,
  IncreaseAmountButton,
};
