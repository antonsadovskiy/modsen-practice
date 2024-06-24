import styled from "styled-components";

export const PriceContainer = styled.div<{ $disabled: boolean }>`
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AmountContainer = styled.div`
  font-family: var(--font-family-dm-sans);
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;
`;
export const IncreaseAmountButton = styled.div<{ $disabled?: boolean }>`
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
export const Amount = styled.div`
  min-width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.mainTextColor};
`;

export const TotalPrice = styled.div`
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
